import { ProfileI } from "./profile.interface";

export interface ArticlesI {
    title: string;
    slug: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    tagList: string[];
    description: string;
    author: ProfileI;
    favorited: boolean;
    favoritesCount: number;
}