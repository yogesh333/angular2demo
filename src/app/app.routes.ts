import {Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {RepoComponent} from './github/repo-browser/repo.component';
import {RepoListComponent} from './github/repo-list/repo-list.component';
import {RegisterComponent} from './register/register.component';
import {RegisterListComponent} from './register/list/register-list.component';



export const rootRouterConfig: Routes=[


  {path :'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},

  {path:'github',component:RepoComponent,
  children:[
  {path:'',component:RepoListComponent},
  { path: ':org', component: RepoListComponent}
  ]
},
{path:'register',component:RegisterComponent},
{path:'register-list',component:RegisterListComponent}


]; 



 