import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newPost = "NO COMMENT";
  onAddPost(postInput: HTMLTextAreaElement){
    this.newPost = postInput.value;
  }

  enteredValue = '';
  newPost2 = "nothing yet";
  onAddPost2(){
    this.newPost2 = this.enteredValue;
  }

}
