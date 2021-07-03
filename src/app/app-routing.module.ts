import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AformComponent } from './forms/aform/aform.component';

const routes: Routes = [
    {path : 'firstform', component: AformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
