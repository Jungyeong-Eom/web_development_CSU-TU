import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import all page
import { CatAllTaskComponent } from './cat-all-task/cat-all-task.component';
import { CatInternalCommsAppComponent } from './cat-internal-comms-app/cat-internal-comms-app.component';
import { CatOtherComponent } from './cat-other/cat-other.component';
import { CatGeneralWorkComponent } from './cat-general-work/cat-general-work.component';
import { ViewTaskComponent } from './view-task/view-task.component';


const routes: Routes = [{
  path: 'all',
  component: CatAllTaskComponent
},{
  path: '',
  redirectTo: '/all',
    pathMatch: 'full'
},{
  path: 'internal-comms-app',
  component: CatInternalCommsAppComponent
},
{
  path: 'other',
  component: CatOtherComponent
},{
  path: 'general-work',
  component: CatGeneralWorkComponent
},{
path: 'view-task',
  component: ViewTaskComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
