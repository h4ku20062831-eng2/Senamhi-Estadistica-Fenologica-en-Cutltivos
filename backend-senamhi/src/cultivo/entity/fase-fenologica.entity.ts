import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CultivoFase } from "./cultivo-fase.entity";
import { Cultivo } from "./cultivo.entity";

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

    @ManyToOne(() => Cultivo, (cultivo) => cultivo.fases)
    cultivo: Cultivo

}