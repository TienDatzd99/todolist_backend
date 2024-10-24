import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    refresh_token: string;

    @Column({ nullable: true })
    last_name: string;

    @Column({ nullable: true })
    password: string;

    @Column({ nullable: true })
    first_name: string;

    @Column()
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;
}
