import { NgModule } from '@angular/core';

//Rutas
import {RouterModule,Routes} from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

//Componentes
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

  const routes: Routes = [  
    
    //path: '/dashboard'  PagesRouting
    //path: '/auth' authRouting
    //path: '/medios' medicosRouting
    {path:'', redirectTo:'/dashboard',pathMatch:'full'},
    {path:'**', component:NopagefoundComponent}
  ]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
