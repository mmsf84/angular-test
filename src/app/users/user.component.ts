import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
    users: User[];

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.users = [];
        console.log("Ingesa a UserComponent");
        this.getUsers();
    }

    private getUsers() {
        this.userService.getUsers()
            .subscribe((usuarios: User[]) => {
                this.users = usuarios;
            });
    }

    deleteUser(user: User) {
        const { id } = user;
        console.log("ID a eliminar = "+id);
        this.userService.deleteUser(id).subscribe(response => {
            //this.users = this.users.filter(user => user.id !== id);
            this.getUsers();
        });
    }
}