import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";


import { currentUserI } from "src/app/shared/types/currentuser.interface";
import { currentUserSelector, isAnonymousSelector, isLoggedinSelector } from "src/app/auth/store/selectors";


@Component({
    selector: 'mc-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopBarComponent implements OnInit {
    isLoggedin$: Observable<boolean>;
    isAnonymous$: Observable<boolean>;
    currentUser$: Observable<currentUserI | null>;

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.isLoggedin$ = this.store.select(isLoggedinSelector);
        this.isAnonymous$ = this.store.select(isAnonymousSelector);
        this.currentUser$ = this.store.select(currentUserSelector);
    }
}