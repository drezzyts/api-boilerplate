import { BaseGateway } from "./gateways";

export type UseCase<Input, Output, Repository extends BaseGateway<unknown>> = 
    (input: Input, repository: Repository) => Promise<Output>; 