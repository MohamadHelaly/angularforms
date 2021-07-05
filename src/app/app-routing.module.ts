import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AformComponent } from './forms/aform/aform.component';
import { CRUDfromComponent } from './forms/crudfrom/crudfrom.component';

const routes: Routes = [
    {path : 'firstform', component: AformComponent},
    {path : 'realCRUD', component: CRUDfromComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
