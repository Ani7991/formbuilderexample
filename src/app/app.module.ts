import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SecondPageComponent } from './second-page/second-page.component';
import { MatchDirective } from './match.directive';
import { FinalComponent } from './final/final.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    SecondPageComponent,
    MatchDirective,
    FinalComponent,
    SubscribeComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
