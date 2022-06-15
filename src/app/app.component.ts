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
  personSelected = "";


  onInput(message: string){
    this.newMessage = message;

  }

  onpersonSelectedInput(value: string){
    this.personSelected = value;
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

  selectingaPerson(!this.personSelected){
  this.errorMessage = "Name not found";
  return;
  }
}
