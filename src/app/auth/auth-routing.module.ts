import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "src/app/auth/components/login/login.component";
import { RegisterComponent } from "src/app/auth/components/register/register.component";

const routes: Routes = [
  { path: '', loadChildren: () => import('../globalfeed/globalfeed.module').then(m => m.GlobalFeedModule) },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
