import { getFeedResponseI } from "./getFeedResponse.interface";

export interface feedStateI {
    isLoading: boolean;
    error: string | null;
    data: getFeedResponseI | null;

}