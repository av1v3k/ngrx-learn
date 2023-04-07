import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";

import { AuthRoutingModule } from "./auth-routing.module";
import { RegisterComponent } from "./components/register/register.component";
import { authReducer } from "./store/reducer";
import { AuthService } from "./services/auth.service";
import { RegisterEffect } from "./store/effects/register.effects";
import { BackEndErrorMessagesModule } from "../shared/modules/backenderrormessages/backenderrormessages.module";
import { PersistenceService } from "../shared/services/persistence.service";
import { LoginEffect } from "./store/effects/login.effects";

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    HttpClientModule,
    BackEndErrorMessagesModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([RegisterEffect, LoginEffect])
  ],
  providers: [AuthService, PersistenceService]
})
export class AuthModule { }
