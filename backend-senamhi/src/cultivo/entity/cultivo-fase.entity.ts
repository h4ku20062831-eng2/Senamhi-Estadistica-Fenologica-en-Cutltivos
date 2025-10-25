import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cultivo } from "./cultivo.entity";
import { FaseFenologica } from "./fase-fenologica.entity";
import { CultivoRegistro } from "./cultivo-registro.entity";

@Entity('cultivo-fase')

export class CultivoFase {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Cultivo, (cultivo) => cultivo.fases)
    cultivo: Cultivo

    @ManyToOne(() => FaseFenologica, (fase) => fase.cultivoFases)
    fase: FaseFenologica;

    @Column()
    fechaInicio: Date

    @Column()
    fechaFin: Date

    @Column()
    observaciones: string;
    
    @OneToMany(() => CultivoRegistro, (r) => r.cultivoFase)
    registros: CultivoRegistro[];
}