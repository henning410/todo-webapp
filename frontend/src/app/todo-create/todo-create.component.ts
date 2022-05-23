import { Component, OnInit } from '@angular/core';
import {Todo} from "../models/todo";
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {
  current = 0;
  index = 'First-content';
  todo: Todo = {
    todo: '',
    priority: 1,
  };

  constructor(private todoService: DataService) { }

  ngOnInit(): void {
  }

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }

  done(): void {
    this.todoService.createTodo(this.todo).subscribe(todo => {
      //TODO: Add new todo to current todos
      //this.todos.push(todo);
    });
  }

  toNumber() {
    console.log('old: ', this.todo);
    this.todo.priority = +this.todo.priority;
    console.log('new: ', this.todo);
  }
}