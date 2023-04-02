import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { appStateI } from "src/app/shared/types/appstate.interface";
import { registerAction } from "../../store/actions";
import { isSubmittingSelector } from "../../store/selectors";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  signupform: FormGroup;
  isSubmitting$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store<appStateI>) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues() {
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
    console.log('submitting', this.isSubmitting$);
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
    this.store.dispatch(registerAction({ request: this.signupform.value }));
    // console.log(this.signupform.value, this.signupform.valid);
  }
}
