import { User, type UserProps } from "../../entities/user";
import { UserGateway } from "../../typings/gateways";
import { Route, RouteHttpMethod } from "../../typings/routes";
import { createUserUseCase } from "../../use-cases/user.create";

interface CreateUserBody {
    name: string,
    email: string
}

export default function (repository: UserGateway) {
    return {
        method: RouteHttpMethod.POST,
        path: "/users",
        handler: async (request, reply) => {
            const { name, email } = request.body as CreateUserBody;

            if (!name || !email ) return reply.code(400).send({
                error: "Missing required fields: 'email' or 'name'"
            });

            const output = createUserUseCase({ name, email }, repository);
            return output;
        }
    } as Route;
}