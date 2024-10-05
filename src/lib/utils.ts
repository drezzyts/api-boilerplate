import type { UseCase } from "../typings/utils";
import type { BaseGateway } from "../typings/gateways";

export function createUseCase<I, O, R extends BaseGateway>(fn: UseCase<I, O, R>) {
    return fn;
}