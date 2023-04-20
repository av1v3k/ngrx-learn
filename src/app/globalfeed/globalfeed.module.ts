import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FeedModule } from "../shared/modules/feed/feed.module";


import { GlobalFeedComponent } from "./components/globalfeed/globalfeed.component";


const routes = [
    { path: '', component: GlobalFeedComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FeedModule
    ],
    declarations: [GlobalFeedComponent],
    exports: [RouterModule]
})
export class GlobalFeedModule {

}