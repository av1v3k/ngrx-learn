import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


import { GlobalFeedComponent } from "./components/globalfeed/globalfeed.component";


const routes = [
    { path: '', component: GlobalFeedComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [GlobalFeedComponent]
})
export class GlobalFeedModule {

}