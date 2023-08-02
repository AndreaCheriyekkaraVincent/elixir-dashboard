import { createReducer, on } from '@ngrx/store';
import { elixirAdapter, ElixirState } from './elixir.state';
import * as ElixirActions from './elixir.actions';

export const initialState: ElixirState = elixirAdapter.getInitialState({
});

export const elixirReducer = createReducer(
  initialState,
  on(ElixirActions.loadElixirsSuccess, (state, { elixirs }) => {
    return elixirAdapter.setAll(elixirs, state);
  })
);
