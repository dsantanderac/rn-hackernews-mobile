export abstract class AsyncUseCase<Result> {
  abstract execute(): Promise<Result>;
}
export abstract class AsyncUseCaseWithParams<Params, Result> {
  abstract execute(params: Params): Promise<Result>;
}
