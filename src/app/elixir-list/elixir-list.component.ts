import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Elixir } from '../models/elixir.model';
import { loadElixirs } from '../store/elixir.actions';
import { ElixirService } from '../services/elixir.service';

@Component({
  selector: 'app-elixir-list',
  templateUrl: './elixir-list.component.html',
  styleUrls: ['./elixir-list.component.scss']
})
export class ElixirListComponent implements OnInit {
  elixirs$!: Observable<Elixir[]> ; 
  elixirs: Elixir[] = [];
  constructor(private elixirService: ElixirService,private router: Router, private store: Store<{ elixir: Elixir[] }>) {}

  ngOnInit() {

    this.store.dispatch(loadElixirs());
    this.elixirs$ = this.store.select(state => state.elixir);
    this.elixirs$.subscribe(
      ((elixirs : any) => {
        this.elixirs = Object.values(elixirs.entities).map((elixirData: any) => ({
          id: elixirData.id,
          name: elixirData.name,
          ingredients: elixirData.ingredients.map((ingredient: any) => ingredient.name),
          sideEffects: elixirData.sideEffects,
          effects: elixirData.effect,
        }));
      }),
      (error) => {
        console.error('Error fetching Elixirs:', error);
      }
    );
  }

  goToDetailPage(elixirId: string) {
    this.router.navigate(['/elixirs', elixirId]);
  }

  searchElixirs(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    if (searchTerm.trim() !== '') {
      this.elixirService.searchElixirsByName(searchTerm).subscribe(
        elixirs => {
          this.elixirs = elixirs;
        },
        error => {
          console.error('Error searching Elixirs:', error);
        }
      );
    }
  }
}
