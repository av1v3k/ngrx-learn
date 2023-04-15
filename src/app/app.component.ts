import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getcurrentUserAction } from "./auth/store/actions/currentuser.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "mediumclone-ng";

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(getcurrentUserAction());
  }
}
