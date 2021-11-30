import { Component, OnInit } from '@angular/core';
import { createBrotliDecompress } from 'zlib';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  //activatedRoute add here, tododateservice, router
  constructor() { }

  ngOnInit(): void {
  }

  saveTodo(){
    //from your data service
    createTodo()

  }
  // this should be in the todo data service
  createTodo(todo) {
    this.http.post('url',todo)
  }

}
