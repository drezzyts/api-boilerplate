import fastify from "fastify";
import { loadEntityRoutes } from "./lib/routes";
import { CacheUserRepository } from "./repositories/user.cache";

async function main() {
    const app = fastify();

    await loadEntityRoutes("/users", app, new CacheUserRepository());
    await app.listen({ port: 3333 });
    
    console.log("[log] server running.")
}

main();
