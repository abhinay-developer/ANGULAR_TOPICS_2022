import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { NgforExComponent } from './ngfor-ex/ngfor-ex.component';
import { NgifElseExComponent } from './ngif-else-ex/ngif-else-ex.component';
import { NgswitchExComponent } from './ngswitch-ex/ngswitch-ex.component';
import { NgstyleExComponent } from './ngstyle-ex/ngstyle-ex.component';
import { NgclassExComponent } from './ngclass-ex/ngclass-ex.component';
import { CustomDirective } from './directives/custom.directive';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    NgforExComponent,
    NgifElseExComponent,
    NgswitchExComponent,
    NgstyleExComponent,
    NgclassExComponent,
    CustomDirective,
    TemplatedrivenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
