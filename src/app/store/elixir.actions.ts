import { createAction, props } from '@ngrx/store';
import { Elixir } from '../models/elixir.model';

export const loadElixirs = createAction('[Elixir] Load Elixirs');
export const loadElixirsSuccess = createAction('[Elixir] Load Elixirs Success', props<{ elixirs: Elixir[] }>());
export const loadElixirsFailure = createAction('[Elixir] Load Elixirs Failure', props<{ error: any }>());
