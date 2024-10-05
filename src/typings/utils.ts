import { BaseGateway } from "./gateways";

export type UseCase<Input, Output, Repository extends BaseGateway> = 
    (input: Input, repository: Repository) => Promise<Output>; 