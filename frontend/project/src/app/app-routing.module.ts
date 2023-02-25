import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  {
    path: "task",
    component: TaskComponent
  },
  {
    path: "",
    redirectTo: "/task",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const RoutingComponents = [
  TaskComponent
]
