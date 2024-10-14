
import { AddTodoComponent } from './add-todo-component/add-todo-component.component';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'todos', component:TodoListComponentComponent },
    {path: 'add-todo', component: AddTodoComponent },
];
