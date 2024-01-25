import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_STORAGE } from "../../../utils/constants";
import { NewsHitsModel } from "../../models/newsModel";

export interface NewsLocalDataSource {
  getNews(): Promise<NewsHitsModel[]>;
  deleteNew(id: string): Promise<boolean>;
  getDeletedNews(): Promise<string[]>;
}

export const newsLocalDataSource: NewsLocalDataSource = {
  async getNews(): Promise<NewsHitsModel[]> {
    const result = await AsyncStorage.getItem(LOCAL_STORAGE.NEWS);
    return result ? JSON.parse(result) : [];
  },
  async deleteNew(id: string): Promise<boolean> {
    try {
      var deletedStr = await AsyncStorage.getItem(LOCAL_STORAGE.DELETED);
      var deletedArray = deletedStr ? JSON.parse(deletedStr) : [];
      deletedArray.push(id);
      await AsyncStorage.setItem(
        LOCAL_STORAGE.DELETED,
        JSON.stringify(deletedArray)
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async getDeletedNews(): Promise<string[]> {
    try {
      var deletedStr = await AsyncStorage.getItem(LOCAL_STORAGE.DELETED);
      return deletedStr ? JSON.parse(deletedStr) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  },
};
