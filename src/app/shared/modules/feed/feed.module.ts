import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";


import { FeedComponent } from "./components/feed/feed.component";
import { FeedService } from "./services/feed.service";
import { GetFeedEffect } from "./store/effects/feed.effects";


@NgModule({
    imports: [CommonModule, EffectsModule.forFeature([GetFeedEffect])],
    declarations: [FeedComponent],
    exports: [FeedComponent],
    providers: [FeedService]
})
export class FeedModule {

}