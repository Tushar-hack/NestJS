import { Column, Entity, Index, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from "./flavor.entity";


// @Index(['name', 'id']) composite Indexes
@Entity()
export class Coffee{
    @PrimaryGeneratedColumn()
    id: number;

    // @Index() single indexes
    @Column()
    name: string;

    @Column()
    brand: string;

    @Column({default:0})
    recomendations: number;

    @JoinTable()
    @ManyToMany(
        type => Flavor,
        (flavor) => flavor.coffees,
        {
            cascade: true
        }
    )
    flavors: Flavor[];
}