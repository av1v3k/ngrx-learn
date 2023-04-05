import { Injectable } from "@angular/core";

@Injectable()
export class PersistenceService {
    setData(key: string, data: any): void {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        }
        catch (e) {
            console.error(`Error saaving to localstorage`, e);
        }
    }

    getData(key: string): any {
        try {
            return JSON.parse(localStorage.getItem(key));
        }
        catch (e) {
            console.error(`Error getting from localstorage`, e);

        }
    }
}