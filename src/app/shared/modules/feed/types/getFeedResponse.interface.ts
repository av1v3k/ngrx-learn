import { ArticlesI } from "src/app/shared/types/article.interface";


export interface getFeedResponseI {
    articles: ArticlesI[];
    articlesCount: number;
}