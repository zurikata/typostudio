import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { ServiceComponent } from './pages/service/service.component';
import { MasterComponent } from './shared/master/master.component';


const routes: Routes = [

  {path:'', component:MasterComponent, 
  children: [
    {path:'', component:HomeComponent},
    {path:"servicio/:slug",component:ServiceComponent},
    {path:"proyecto/:slug",component:ProjectComponent}
  ]
},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling:'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
