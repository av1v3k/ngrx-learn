
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule
    ],
})
export class AuthModule { }
