import { Component, Input, OnInit } from "@angular/core";
import { backenderrorobjI } from "src/app/shared/types/backenderrors.interface";

@Component({
    selector: 'mc-backend-error',
    templateUrl: './backenderror.component.html',
    styleUrls: ['./backenderror.component.scss']
})
export class BackEndErrorComponent implements OnInit {

    @Input('backenderrors') backenderrorsProps: backenderrorobjI;

    errorMessages: string[];

    ngOnInit() {
        // debugger;
        console.log(this.backenderrorsProps);
        this.errorMessages = Object.keys(this.backenderrorsProps).map((name: string) => {
            const messages = this.backenderrorsProps[name].join('');
            return (
                `${name}: ${messages}`
            );
        })
    }
}