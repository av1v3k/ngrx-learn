import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { registerAction } from "../../store/actions";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  signupform: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.initializeForm();
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
