import { useState, useEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getNewsUseCase } from "../../../domain/news/getNewsUseCase";
import { NewsHitsModel } from "../../../data/models/newsModel";
import { deleteNewUseCase } from "../../../domain/news/deleteNewUseCase";
import { RootStackParamList } from "../../../navigation/Navigation";

export interface NewsViewModelProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
}

export const useNewsViewModel = ({ navigation }: NewsViewModelProps) => {
  const [news, setNews] = useState<NewsHitsModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await loadNews();
    })();
  }, []);

  const loadNews = async () => {
    setLoading(true);
    var response = await getNewsUseCase.execute();

    setNews(response);
    setLoading(false);
  };

  const deleteNew = async (id: string) => {
    await deleteNewUseCase.execute(id);
    loadNews();
  };

  const goToDetail = (url: string) => {
    navigation.navigate("DetailScreen", { url: url });
  };

  return { news, loadNews, loading, deleteNew, goToDetail };
};
