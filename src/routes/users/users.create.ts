import { User, type UserProps } from "../../entities/user";
import { UserGateway } from "../../typings/gateways";
import { Route, RouteHttpMethod } from "../../typings/routes";

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

            const user = User.create(name, email);
            await repository.save(user);

            reply.send({ id: user.id });
        }
    } as Route;
}