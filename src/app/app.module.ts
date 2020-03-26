import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './pages/signup-form/signup-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SwitchComponent } from './components/switch/switch.component';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesService } from './pages/products/northwind.service';
import { HttpClientModule, HttpClient, HttpClientJsonpModule  } from '@angular/common/http';
import { RemoteProductBindingDirective } from './pages/remote-product-binding.directive';
import { ProductsService } from './pages/products/northwind.service';
import { ProductCrudComponent } from './pages/product-crud/product-crud.component';
import { EditService } from './pages/product-crud/edit.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    SwitchComponent,
    NumberInputComponent,
    ProductsComponent,
    RemoteProductBindingDirective,
    ProductCrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    GridModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [ CategoriesService, ProductsService, {
    deps: [HttpClient],
    provide: EditService,
    useFactory: (jsonp: HttpClient) => () => new EditService(jsonp)
} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
