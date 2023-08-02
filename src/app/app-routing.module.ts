import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElixirListComponent } from './elixir-list/elixir-list.component';
import { ElixirDetailComponent } from './elixir-detail/elixir-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/elixirs', pathMatch: 'full' },
  { path: 'elixirs', component: ElixirListComponent },
  { path: 'elixirs/:id', component: ElixirDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
