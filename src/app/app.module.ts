import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import { AppComponent } from './app.component';
import { TablaJorgeComponent } from './tabla-jorge/tabla-jorge.component';
import { TablechrisComponent } from './tablechris/tablechris.component';
@NgModule({
  declarations: [
    AppComponent,
    TablechrisComponent,
    TablaJorgeComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
    CdkTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
