import { randomUUID, UUID } from "crypto";

export interface UserProps {
    readonly id: UUID,
    name: string,
    email: string
}

export class User { 
    private constructor(private props: UserProps) {}

    public static create(name: string, email: string) {
        const id = randomUUID();
        return new User({ id, name, email });
    }

    public static from(props: UserProps) {
        return new User(props);
    } 
}