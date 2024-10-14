import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TodoServiceService } from '../todo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl:'./add-todo-component.component.html',
})
export class AddTodoComponent {
  todoForm: FormGroup;

  constructor(private fb: FormBuilder, private todoService: TodoServiceService, private router: Router) {
    this.todoForm = this.fb.group({
      description: ['', Validators.required],
      priority: ['medium', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.todoForm.valid) {
      this.todoService.addTodo({
        id: Date.now(),
        description: this.todoForm.value.description,
        priority: this.todoForm.value.priority,
        completed: false
      });
      this.todoForm.reset();
      this.router.navigate(['/todos'])  // Limpia el formulario
    }
  }

}