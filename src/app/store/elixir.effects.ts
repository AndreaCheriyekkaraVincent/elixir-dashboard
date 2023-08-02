import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ElixirActions from './elixir.actions';
import { ElixirService } from '../services/elixir.service';

@Injectable()
export class ElixirEffects {
  loadElixirs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ElixirActions.loadElixirs),
      mergeMap(() =>
        this.elixirService.getAllElixirs().pipe(
          map((elixirs: any) => {
            return ElixirActions.loadElixirsSuccess({ elixirs });
          }),
          catchError((error) => of(ElixirActions.loadElixirsFailure({ error })))
        )
      )
    )
  );
  constructor(private actions$: Actions, private elixirService: ElixirService) {}
}
