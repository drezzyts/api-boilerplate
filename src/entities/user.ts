import { randomUUID, UUID } from "crypto";

export interface UserProps {
    readonly id: UUID,
    name: string,
    email: string
}

export class User implements UserProps { 
    public readonly id: UUID;
    public name: string;
    public email: string;

    private constructor(props: Readonly<UserProps>) {
        this.id = props.id;
        this.name = props.name;
        this.email = props.email;
    }

    public static create(name: string, email: string) {
        const id = randomUUID();
        return new User({ id, name, email });
    }

    public static from(props: UserProps) {
        return new User(props);
    } 
}
