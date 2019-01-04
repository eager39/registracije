import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { RouterModule} from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormDodajComponent } from './form-dodaj/form-dodaj.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormDodajComponent
  ],
  imports: [BrowserModule,FormsModule,ReactiveFormsModule,MatButtonModule,MatMenuModule,NoopAnimationsModule,HttpClientModule,MatTableModule,MatDatepickerModule,MatFormFieldModule,MatNativeDateModule,MatInputModule, RouterModule.forRoot([
    {
       path: 'home',
       component: HomeComponent
    },
    {
      path:"dodaj",
      component:FormDodajComponent
    },
    {
      path:"",
      component:HomeComponent
    },
    {
      path:"dodaj/:id",
      component:FormDodajComponent
    }
 ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
