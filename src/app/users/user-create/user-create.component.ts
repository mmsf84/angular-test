import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/'
import { User } from '../user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  newUser : User = new User();

  constructor(private router: Router, 
              private userService: UserService) {}
  
  handleSubmit(usuario: User) {
    this.userService.createUser(usuario).subscribe(response => {
      this.router.navigate(['/user']);
    });
  }

  ngOnInit() {
  }

}
