import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElixirListComponent } from './elixir-list/elixir-list.component';
import { ElixirCardComponent } from './elixir-card/elixir-card.component';
import { ElixirDetailComponent } from './elixir-detail/elixir-detail.component';
import { elixirReducer } from './store/elixir.reducers';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ElixirEffects } from './store/elixir.effects';
import { EffectsModule } from '@ngrx/effects';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ElixirListComponent,
    ElixirCardComponent,
    ElixirDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ elixir: elixirReducer }),
    EffectsModule.forRoot([ElixirEffects]),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
