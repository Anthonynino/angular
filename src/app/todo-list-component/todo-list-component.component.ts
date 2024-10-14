import { Component } from '@angular/core';
import { TodoServiceService, Todo } from '../todo-service.service';

@Component({
  selector: 'app-todo-list-component',
  standalone: true,
  imports: [],
  templateUrl: './todo-list-component.component.html',
  styleUrl: './todo-list-component.component.css'
})
export class TodoListComponentComponent {

  todos: Todo[] = []

    constructor( private todoService: TodoServiceService ){

    }
    ngOnInit(): void {
        this.todos = this.todoService.getTodos();
    }

    completeTodo(id: number) {
      this.todoService.completedTodo(id);
    }
  
    deleteTodo(id: number) {
      this.todoService.deleteTodo(id);
    }

}
