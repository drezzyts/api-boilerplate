import { FastifyInstance } from "fastify";
import { Route, RouteRegister } from "../typings/routes";
import { BaseGateway } from "../typings/gateways";
import { glob } from "glob";

export async function loadEntityRoutes<T>(path: string, app: FastifyInstance, repository: BaseGateway<T>) {
    const entityRoutes = await registerEntityRoutes(path, repository);

    entityRoutes.forEach(route => {
        app[route.method](route.path, route.handler);
        console.log(`[log] route ${route.method}:${route.path} loaded.`);
    })
}

export async function registerEntityRoutes<T>(path: string, repository: BaseGateway<T>): Promise<Route[]> {
    const files = await glob(`src/routes/${path}/**.ts`);
    const routes: Route[] = [];

    for (const file of files) {
        const { default: register }: { default: RouteRegister<T> } = await import(`../../${file}`);
        const route = register(repository);

        routes.push(route);
    };

    return routes;
} 