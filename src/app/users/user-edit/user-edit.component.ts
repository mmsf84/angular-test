import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router/'
import { UserService } from '../../services/user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  usuario: User;
  constructor(private route: ActivatedRoute,
                private router: Router,
                private userService: UserService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe((user: User) => {
      this.usuario = user;
    })
  }

  handleSubmit(user: User) {
    this.userService.updateUser(user.id, user)            
    .subscribe(response => {
      this.router.navigate(['/user']);
    });
  }
}