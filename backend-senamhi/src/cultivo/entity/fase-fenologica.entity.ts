import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CultivoFase } from "./cultivo-fase.entity";

@Entity('fase_fenologica')
export class FaseFenologica {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    codigo: string; // Ej: 'BF', 'FL', 'FR', 'MD'

    @Column({ nullable: true })
    descripcion: string

    @OneToMany(() => CultivoFase, (cf) => cf.fase)
    cultivoFases: CultivoFase[];

}