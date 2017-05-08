import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {UsersComponent} from "./components/users/users.component";
import {ModuleWithProviders} from "@angular/core";
import {UserComponent} from "./components/users/sheet/user.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'user/:id',
    component: UserComponent
  },
  { path: '**', component: DashboardComponent }
];

export const sondagesRouting: ModuleWithProviders = RouterModule.forRoot(routes);

