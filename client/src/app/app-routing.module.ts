import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';
import { ServiceComponent } from './pages/service/service.component';
import { SingleContentComponent } from './pages/single-content/single-content.component';
import { MasterComponent } from './shared/master/master.component';


const routes: Routes = [

  {path:'', component:MasterComponent, 
  children: [
    {path:'', component:HomeComponent},
    {path:"servicio/:id",component:ServiceComponent},
    {path:"proyecto/:id",component:ProjectComponent},
    {path:"clientes", component:SingleContentComponent, data:{page:"clientes"}},
    {path:"equipo", component:SingleContentComponent, data:{page:"equipo"}},
    {path:"red-colaboracion", component:SingleContentComponent, data:{page:"redColaboracion"}},
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
