import type { UUID } from "crypto"
import type { User } from "../entities/user"

export interface BaseGateway<T> {
    get(id: UUID): Promise<T>
    save(data: unknown): Promise<void>,
    list(): Promise<T[]>
};

export interface UserGateway extends BaseGateway<User> {};