import { Component, Input } from '@angular/core';
import { Elixir } from '../models/elixir.model';

@Component({
  selector: 'app-elixir-card',
  templateUrl: './elixir-card.component.html',
  styleUrls: ['./elixir-card.component.scss']
})
export class ElixirCardComponent {
  @Input() elixir!: Elixir;
}
