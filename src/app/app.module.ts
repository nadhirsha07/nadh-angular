import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { DatangComponent } from './datang/datang.component';
import { DetailsComponent } from './Kart/details.component';
import { CartComponent } from './cart/cart.component';
import { StudentsComponent } from './students/students.component';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    DatangComponent,
    DetailsComponent,
    CartComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
