import { API_ENDPOINTS } from "../../../utils/constants";
import { NewsHitsModel } from "../../models/newsModel";

export interface NewsRemoteDataSource {
  getNews(): Promise<NewsHitsModel[]>;
}

export const newsRemoteDataSource: NewsRemoteDataSource = {
  async getNews(): Promise<NewsHitsModel[]> {
    const url = API_ENDPOINTS.API_MOBILE_NEWS;
    const response = await fetch(url);
    const result = await response.json();
    return result.hits;
  },
};
