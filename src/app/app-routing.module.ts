import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './pages/signup-form/signup-form.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductCrudComponent } from './pages/product-crud/product-crud.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupFormComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'crud',
    component: ProductCrudComponent
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
