import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

import { getFeedResponseI } from "../types/getFeedResponse.interface";


@Injectable()
export class FeedService {
    constructor(private http: HttpClient) { }

    getFeed(url: string): Observable<getFeedResponseI> {
        const fURL = environment.apiUrl + url;
        return this.http.get<getFeedResponseI>(fURL);
    }
}