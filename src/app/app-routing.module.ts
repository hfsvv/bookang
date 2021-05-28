import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'book',component:BookComponent
  },
  {
    path:'update/:id',component:UpdateBookComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
