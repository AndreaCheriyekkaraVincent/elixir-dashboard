import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElixirService } from '../services/elixir.service';
import { Elixir } from '../models/elixir.model';

@Component({
  selector: 'app-elixir-detail',
  templateUrl: './elixir-detail.component.html',
  styleUrls: ['./elixir-detail.component.scss']
})
export class ElixirDetailComponent implements OnInit {
  elixir!: Elixir ;

  constructor(private route: ActivatedRoute,private router: Router, private elixirService: ElixirService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const elixirId = params.get('id');
      if (elixirId) {
        this.getElixirDetails(elixirId);
      } else {
        console.error('Invalid Elixir ID:', elixirId);
      }
    });
  }

  getElixirDetails(elixirId: string) {
    this.elixirService.getElixirById(elixirId).subscribe(
      (elixir) => {
        this.elixir = elixir;
        console.log('inside the details page', this.elixir);
      },
      (error) => {
        console.error('Error fetching Elixir details:', error);
      }
    );
  }

  goToCardPage() {
    this.router.navigate(['/elixirs']);
  }
}
