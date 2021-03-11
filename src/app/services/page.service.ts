import { Injectable } from '@angular/core';
import { getInclusionDirectives } from '@apollo/client/utilities';
import { QueryRef } from 'apollo-angular';
import { ClienteGQL, ClienteQuery, EquipoGQL, EquipoQuery, FeaturedServicesGQL, FeaturedServicesQuery, ProjectGQL, ProjectQuery, ProjectsInfoGQL, ProjectsInfoQuery, RedColaboracionGQL, RedColaboracionQuery, ServiceGQL, ServiceQuery} from '../../generated/graphql'

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(
    private featuredServicesGQL:FeaturedServicesGQL,
    private projectsInfoGQL:ProjectsInfoGQL,
    private serviceGQL:ServiceGQL,
    private projectGQL:ProjectGQL,
    private clienteGQL:ClienteGQL,
    private equipoGQL:EquipoGQL,
    private redColaboracionGQL:RedColaboracionGQL,

  ) { }

  getFeaturedServicesInfo():QueryRef<FeaturedServicesQuery>{
    return this.featuredServicesGQL.watch();
  }

  getProjectsInfo():QueryRef<ProjectsInfoQuery>{
    return this.projectsInfoGQL.watch();
  }

  getService(id:any):QueryRef<ServiceQuery>{
    return this.serviceGQL.watch({id});
  }

  getProject(id:any):QueryRef<ProjectQuery>{
    return this.projectGQL.watch({id});
  }

  getClientes():QueryRef<ClienteQuery>{
    return this.clienteGQL.watch()
  }

  getEquipo():QueryRef<EquipoQuery>{
    return this.equipoGQL.watch()
  }

  getRedColaboracion():QueryRef<RedColaboracionQuery>{
    return this.redColaboracionGQL.watch()
  }


}
