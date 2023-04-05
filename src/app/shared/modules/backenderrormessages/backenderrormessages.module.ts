import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BackEndErrorComponent } from "./components/backenderror.component";

@NgModule({
    imports: [CommonModule],
    declarations: [BackEndErrorComponent],
    exports: [BackEndErrorComponent]
})
export class BackEndErrorMessagesModule {

}