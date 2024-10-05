import type { UUID } from "crypto";
import type { UserGateway } from "../typings/gateways";

import { createUseCase } from "../lib/utils";
import { User } from "../entities/user";

export interface CreateUserInput {
    name: string,
    email: string
};

export interface CreateUserOutput {
    id: UUID
};

export const createUserUseCase = createUseCase(
    async (input: CreateUserInput, repository: UserGateway): Promise<CreateUserOutput> => {
        const { name, email } = input;
        const user = User.create(name, email);

        await repository.save(user);

        return { id: user.id };
    } 
);