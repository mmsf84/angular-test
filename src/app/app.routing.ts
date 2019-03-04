import { Route } from '@angular/router';
import { UserComponent } from './users/user.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserCreateComponent } from './users/user-create/user-create.component';

export const routes: Route[] = [
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'nuevo-user',
        component: UserCreateComponent
    },
    {
        path: 'user/:id',
        component: UserEditComponent
    },
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
    }
];