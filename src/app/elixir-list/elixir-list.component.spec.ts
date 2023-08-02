import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElixirListComponent } from './elixir-list.component';
import { ElixirService } from '../services/elixir.service';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card';
import { Elixir } from '../models/elixir.model';
import { loadElixirs } from '../store/elixir.actions';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { elixirReducer } from '../store/elixir.reducers';

describe('ElixirListComponent', () => {
  let component: ElixirListComponent;
  let fixture: ComponentFixture<ElixirListComponent>;
  let elixirService: jasmine.SpyObj<ElixirService>;
  let router: jasmine.SpyObj<Router>;
  let store: Store<{ elixir: Elixir[] }>;

  beforeEach(async () => {
    const elixirServiceSpy = jasmine.createSpyObj('ElixirService', ['searchElixirsByName']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ElixirListComponent],
      imports: [MatCardModule,StoreModule.forRoot({ elixir: elixirReducer }),HttpClientTestingModule],
      providers: [
        { provide: ElixirService, useValue: elixirServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();

    elixirService = TestBed.inject(ElixirService) as jasmine.SpyObj<ElixirService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElixirListComponent);
    component = fixture.componentInstance;
    component.elixirs = [{
      id: '1',
      name: 'Mock Elixir',
      ingredients: [{id:'Ingredient 1', name:'Ingredient 2'}],
      sideEffects: 'No side effects',
      effects: 'Effects of the elixir'
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadElixirs action on init', () => {
    spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(loadElixirs());
  });

  it('should navigate to elixir detail page', () => {
    const elixirId = '0106fb32-b00d-4d70-9841-4b7c2d2cca71';
    component.goToDetailPage(elixirId);
    expect(router.navigate).toHaveBeenCalledWith(['/elixirs', elixirId]);
  });
});
