import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() userCreated = new EventEmitter<{userName: string, userPassword: string}>();
 
  constructor() { }

  ngOnInit(): void {
  }

  OnClick(name, pass){
    this.userCreated.emit({
      userName: name.value,
      userPassword: pass.value
    });
  }

}
