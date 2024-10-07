import type { UUID } from "crypto";
import type { User } from "../entities/user";
import type { UserGateway } from "../typings/gateways";

export class CacheUserRepository implements UserGateway {
    private cache: Map<UUID, User>;

    public constructor() {
        this.cache = new Map();
    }

    public async get(id: UUID): Promise<User> {
        const user = this.cache.get(id);
        if (!user) throw new Error("This user is not saved in the cache.");
        
        return user;
    }
    
    public async save(data: User): Promise<void> {
        this.cache.set(data.id, data);
    }

    public async list(): Promise<User[]> {
        const users = [...this.cache.values()];
        return users;
    }
}