import { Injectable } from '@angular/core';

export interface Todo {
  id: number,
  description: string,
  completed: boolean,
  priority: string
}

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private todos: Todo[] =[] 

  constructor() { }

  getTodos():Todo[]{
    return this.todos
  }

  addTodo(todo: Todo){
    this.todos.push(todo)
  }

  

  completedTodo(id: number) {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
      this.todos[todoIndex].completed = true;
    }
  }

  // Eliminar una tarea por su id
  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

}
