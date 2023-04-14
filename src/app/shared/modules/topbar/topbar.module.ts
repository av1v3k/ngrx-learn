import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { TopBarComponent } from "./components/topbar/topbar.component";


@NgModule({
    declarations: [TopBarComponent],
    imports: [CommonModule, RouterModule],
    exports: [TopBarComponent, RouterModule]
})
export class TopBarModule {

}