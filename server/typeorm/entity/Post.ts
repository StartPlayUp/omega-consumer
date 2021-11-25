import { Thumb } from './Thumb';
import { IsIP, Length } from "class-validator";
import { Entity, Column, ManyToOne, OneToMany, AfterInsert } from "typeorm";
import { Comment } from "./Comment";

import { Model } from './Models/Model'
import { User } from './User'

@Entity()
export class Post extends Model {
    @Column()
    @Length(1, 255)
    title!: string;

    @Column()
    @Length(1, 255)
    content!: string;

    @Column({
        type: 'enum',
        enum: ['user', 'admin', 'superadmin'],
        default: 'user'
    })
    permision!: string;

    @Column({
        nullable: false,
        default: false
    })
    delete!: boolean;

    @Column({
        nullable: false,
        default: true
    })
    useComment!: boolean;

    @Column()
    @IsIP()
    ipAddress!: string;

    @Column({
        nullable: true
    })
    slug!: string;

    @AfterInsert()
    createSlug() {
        this.title
    }

    @ManyToOne(() => User, post => post.posts, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    user!: User

    @OneToMany(() => Comment, comment => comment.post)
    comments!: Comment[]

    @OneToMany(() => Thumb, thumb => thumb.post)
    thumbs!: Thumb[]

    toJSON() {
        const ipAddress = "X.X." + this.ipAddress.split('.').slice(2, 4).join('.')
        return {
            ...this,
            ipAddress
        }


    }
}
