import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients-component/clients-component';
import { EstrategiasComponent } from './estrategias-component/estrategias-component';

import { AppRoutingModule } from './app-routing.module';
import { GeradorEstrategiaComponent } from './gerador-estrategia/gerador-estrategia.component';

@NgModule({
  declarations: [AppComponent, ClientsComponent, EstrategiasComponent, GeradorEstrategiaComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
