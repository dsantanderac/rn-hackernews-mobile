import AsyncStorage from "@react-native-async-storage/async-storage";
import { newsLocalDataSource } from "./local/newsLocalDataSource";
import { newsRemoteDataSource } from "./remote/newsRemoteDataSource";
import { NewsHitsModel } from "../models/newsModel";
import { LOCAL_STORAGE } from "../../utils/constants";

export interface NewsDataSource {
  getNews(): Promise<NewsHitsModel[]>;
  deleteNew(id: string): Promise<boolean>;
  getDeletedNews(): Promise<string[]>;
}

export const newsRepository: NewsDataSource = {
  async getNews(): Promise<NewsHitsModel[]> {
    try {
      var hits = await newsRemoteDataSource.getNews();

      await AsyncStorage.setItem(LOCAL_STORAGE.NEWS, JSON.stringify(hits));
      return hits;
    } catch (error) {
      console.error(error);
      return await newsLocalDataSource.getNews();
    }
  },

  async deleteNew(id: string): Promise<boolean> {
    try {
      return await newsLocalDataSource.deleteNew(id);
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  async getDeletedNews(): Promise<string[]> {
    try {
      return await newsLocalDataSource.getDeletedNews();
    } catch (error) {
      console.log(error);
      return [];
    }
  },
};
