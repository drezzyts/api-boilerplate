import type { UUID } from "crypto"
import type { User } from "../entities/user"

export interface BaseGateway {
    get(id: UUID): Promise<unknown>
    save(data: unknown): Promise<void>,
    list(): Promise<unknown[]>
}

export interface UserGateway extends BaseGateway {
    get(id: UUID): Promise<User>,
    save(user: User): Promise<void>,
    list(): Promise<User[]>,
}