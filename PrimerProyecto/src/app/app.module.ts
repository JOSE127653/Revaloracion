import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule,Route, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { MenuComponent } from './menu/menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';



const appRoutes: Routes=[

  {path:'inicio',component:InicioComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'login',component:LoginComponent},
  {path:'Menu',component:MenuComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [ 
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    ),
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule, MatButtonModule,MatToolbarModule,MatTabsModule,MatSidenavModule,MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
