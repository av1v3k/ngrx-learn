import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { appStateI } from "src/app/shared/types/appstate.interface";
import { backenderrorobjI } from "src/app/shared/types/backenderrors.interface";
import { loginAction } from "src/app/auth/store/actions/login.actions";
import { isSubmittingSelector, validationerrorsSelectors } from "src/app/auth/store/selectors";
import { registerUserI } from "src/app/auth/types/registerRequest.interface";

@Component({
  selector: "mc-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  signinform: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<backenderrorobjI | null>;

  constructor(private fb: FormBuilder, private store: Store<appStateI>) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues() {
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
    this.backendErrors$ = this.store.select(validationerrorsSelectors);
  }

  initializeForm() {
    this.signinform = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit(): void {
    console.log({ ...this.signinform.value });
    const request: registerUserI = {
      user: this.signinform.value
    }
    this.store.dispatch(loginAction({ request }));
  }
}
