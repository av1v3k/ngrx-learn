import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { ReactiveFormsModule } from "@angular/forms";


import { AuthRoutingModule } from "./auth-routing.module";
import { RegisterComponent } from "./components/register/register.component";
import { authReducer } from "./store/reducer";

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule, StoreModule.forFeature('auth', authReducer)],
})
export class AuthModule { }
