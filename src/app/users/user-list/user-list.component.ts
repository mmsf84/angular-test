import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User} from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users: User[];
  @Output() deleteUser: EventEmitter<any> = new EventEmitter<any>();
    
  constructor(private router: Router) {}

  ngOnInit() {      
  }

  handleDelete(user: User) {
    this.deleteUser.emit(user);
  }

  handleUpdate(id: string) {
    this.router.navigate(['user', id]);
  }  
}
