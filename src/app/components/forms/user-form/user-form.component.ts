import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from 'src/app/users/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {  
  @Input() usuario: User;
  @Output() handleSubmit: EventEmitter<User> = new EventEmitter<User>();
  
  constructor() {}

  ngOnInit() { }

  onSubmit(f: any) {
    if (f.valid) {
      this.handleSubmit.emit(this.usuario);
    }
  }
}