import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { BaseGateway } from "./gateways";

export type RoutesRegister = (app: FastifyInstance) => Promise<void>;

export const enum RouteHttpMethod {
    GET = "get",
    POST = "post"
};

export type RouteHandler = (request: FastifyRequest, reply: FastifyReply) => unknown;
export type RouteRegister<T> = (repository: BaseGateway<T>) => Route;

export interface Route {
    path: string,
    method: RouteHttpMethod,
    handler: RouteHandler
}