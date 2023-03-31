
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { RegisterComponent } from './components/register/register.component';


@NgModule({
    imports: [CommonModule, AuthRoutingModule],
    declarations: [RegisterComponent]
})
export class AuthModule { }