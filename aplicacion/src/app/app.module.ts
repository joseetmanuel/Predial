import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImportMaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPayPalModule } from 'ngx-paypal';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    ImportMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
