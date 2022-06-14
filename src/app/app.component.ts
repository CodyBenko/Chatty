import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMessage = "";
  messages: string[] = [];
  errorMessage = "";


  onInput(message: string){
    this.newMessage = message;

  }

  addMessage(){

if(!this.newMessage){
  this.errorMessage = "Name cant be empty";
return;
}

    this.errorMessage = "Name cant be empty";
    this.messages.push(this.newMessage);
    this.newMessage = "";
  }
}
