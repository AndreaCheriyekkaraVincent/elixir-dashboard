import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Elixir } from '../models/elixir.model';

export interface ElixirState extends EntityState<Elixir> {
}

export const elixirAdapter: EntityAdapter<Elixir> = createEntityAdapter<Elixir>({});
