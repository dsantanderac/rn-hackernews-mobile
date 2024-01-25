import { newsRepository } from "../../data/news/newsDataSource";
import { NewsHitsModel } from "../../data/models/newsModel";
import { AsyncUseCase } from "../AsyncUseCase";

export const getNewsUseCase: AsyncUseCase<NewsHitsModel[]> = {
  async execute(): Promise<NewsHitsModel[]> {
    const news = await newsRepository.getNews();
    const removedIds: string[] = await newsRepository.getDeletedNews();
    const removedNews: NewsHitsModel[] = news.filter(
      (newItem) => !removedIds.includes(newItem.objectID.toString())
    );
    return removedNews;
  },
};
