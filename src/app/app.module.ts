import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgforExComponent } from './ngfor-ex/ngfor-ex.component';
import { NgifElseExComponent } from './ngif-else-ex/ngif-else-ex.component';
import { NgswitchExComponent } from './ngswitch-ex/ngswitch-ex.component';
import { NgstyleExComponent } from './ngstyle-ex/ngstyle-ex.component';
import { NgclassExComponent } from './ngclass-ex/ngclass-ex.component';
import { CustomDirective } from './directives/custom.directive';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { FormValidationsComponent } from './form-validations/form-validations.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturesComponent } from './components/features/features.component';
import { ServicesComponent } from './components/services/services.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

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
    FormValidationsComponent,
    NavbarComponent,
    FooterComponent,
    FeaturesComponent,
    ServicesComponent,
    NotfoundComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
