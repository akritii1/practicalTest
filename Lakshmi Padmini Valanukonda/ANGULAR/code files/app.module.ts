import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrainComponent } from './train/train.component';
import { PassengerComponent } from './passenger/passenger.component';
import {RouterModule, Routes} from '@angular/router';

import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { TraininfoService } from './traininfo.service';

const appRoutes:Routes=[
  {path:'train',component:TrainComponent},
  {path:'passenger',component:PassengerComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:"full"}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrainComponent,
    FilterPipe,
    PassengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TraininfoService],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
