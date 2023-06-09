import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { appStateI } from "src/app/shared/types/appstate.interface";
import { backenderrorobjI } from "src/app/shared/types/backenderrors.interface";
import { currentUserI } from "src/app/shared/types/currentuser.interface";
import { AuthService } from "../../services/auth.service";
import { registerAction } from "../../store/actions/register.actions";
import { isSubmittingSelector, validationerrorsSelectors } from "../../store/selectors";
import { registerUserI } from "../../types/registerRequest.interface";

@Component({
  selector: "mc-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  signupform: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<backenderrorobjI | null>;

  constructor(private fb: FormBuilder, private store: Store<appStateI>, private authservice: AuthService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues() {
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
    this.backendErrors$ = this.store.select(validationerrorsSelectors);
  }

  initializeForm() {
    this.signupform = this.fb.group({
      username: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit(): void {
    console.log({ ...this.signupform.value });
    // this.store.dispatch(registerAction({ ...this.signupform.value }));
    const request: registerUserI = {
      user: this.signupform.value
    }
    this.store.dispatch(registerAction({ request }));
  }
}
