import { Routes } from '@angular/router';
import { TaskListComponent } from "./components/task-list/task-list.component";
import { TaskCreateComponent } from "./features/task/task-create/task-create.component";
import { TaskEditComponent } from "./features/task/task-edit/task-edit.component";

export const routes: Routes = [
    { path: 'tasks/overview', component: TaskListComponent },
    { path: 'tasks/create', component: TaskCreateComponent },
    { path: 'tasks/:id/edit:', component: TaskEditComponent },
    { path: '',   redirectTo: '/tasks/overview', pathMatch: 'full' }, // redirect to `first-component`
];
