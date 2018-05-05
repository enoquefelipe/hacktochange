import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients-component/clients-component';
import { EstrategiasComponent } from './estrategias-component/estrategias-component';
import { GeradorEstrategiaComponent } from './gerador-estrategia/gerador-estrategia.component';

const routes: Routes = [

    { path: 'clients', component: ClientsComponent },
    { path: 'estrategias', component: EstrategiasComponent },
    { path: 'nova-estrategia', component: GeradorEstrategiaComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }