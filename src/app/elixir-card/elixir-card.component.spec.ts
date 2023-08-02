import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElixirCardComponent } from './elixir-card.component';

describe('ElixirCardComponent', () => {
  let component: ElixirCardComponent;
  let fixture: ComponentFixture<ElixirCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElixirCardComponent]
    });
    fixture = TestBed.createComponent(ElixirCardComponent);
    component = fixture.componentInstance;
    component.elixir = {
      id: '1',
      name: 'Mock Elixir',
      ingredients: [{id:'Ingredient 1', name:'Ingredient 2'}],
      sideEffects: 'No side effects',
      effects: 'Effects of the elixir'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
