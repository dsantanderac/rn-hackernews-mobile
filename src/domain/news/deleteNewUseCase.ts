import { newsRepository } from "../../data/news/newsDataSource";
import { AsyncUseCaseWithParams } from "../AsyncUseCase";

export const deleteNewUseCase: AsyncUseCaseWithParams<string, boolean> = {
  async execute(params: string): Promise<boolean> {
    const isDeleted = await newsRepository.deleteNew(params);

    return isDeleted;
  },
};
