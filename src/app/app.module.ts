import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }   from './app.component';

import { TreeSelectModule } from 'primeng/treeselect';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {FormsModule} from '@angular/forms';
import { NodeService } from './nodeservice';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    PanelModule,
		FormsModule,
    HttpClientModule,
    TreeSelectModule,
    ReactiveFormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ NodeService ]

})

export class AppModule { }
