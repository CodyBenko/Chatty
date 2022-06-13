import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMessage = "";
  messages: string[] = [];

  onInput(message: string){
    this.newMessage = message;
    console.log(this.newMessage);
  }

  addMessage(){
    this.messages.push(this.newMessage);
    this.newMessage = "";
    console.log(this.messages);
    +
  }
}
