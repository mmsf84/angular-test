import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../users/user.model';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
    private baseURL: string;

    constructor(private http: HttpClient) {
        this.baseURL = environment.api;
    }

    getUsers() {
        const fullUrl = `${this.baseURL}/users/`;
        console.log("llama al url: "+fullUrl);
        return this.http.get(fullUrl);
    }

    getUserById(id: string) {
        const fullUrl = `${this.baseURL}/users/${id}`;

        return this.http.get(fullUrl);
    }

    createUser(user: User) {
        const fullUrl = `${this.baseURL}/users`;

        return this.http.post(fullUrl, user);
    }

    updateUser(id: string, user: User) {
        const fullUrl = `${this.baseURL}/users/${id}`;

        return this.http.put(fullUrl, user);
    }

    deleteUser(id: string) {
        const fullUrl = `${this.baseURL}/users/${id}`;
        console.log("Delete llama al url: "+fullUrl);
        return this.http.delete(fullUrl);
    }
}