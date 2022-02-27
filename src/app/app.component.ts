import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {  
  title = 'Register';
  userElements = [{type: 'user', name: 'TestUser', password: 'TestPassword'}];

  onUserAdded(event){
    this.userElements.push({
      type: 'user',
      name: event.userName,
      password: event.userPassword
    });
  }

}
