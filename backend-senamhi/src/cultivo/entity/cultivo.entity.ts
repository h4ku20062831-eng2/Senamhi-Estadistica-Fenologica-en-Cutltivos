import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CultivoFase } from "./cultivo-fase.entity";


@Entity()
export class Cultivo {
    @PrimaryGeneratedColumn()
    id: number

    @Column('string')
    nombreCultivo: string

    @Column('string')
    estacion: string

    @Column({ type: 'date' })
    fechaSiembra: Date;

    // Espacio para relacional Cultivo con Temperatura
    @Column({ type: 'float' })
    tempMinOptima: number

    @Column({ type: 'float' })
    tempMaxOptima: number;

    @OneToMany(() => CultivoFase, (cf) => cf.cultivo)
    fases: CultivoFase[] // Un cultivo tiene muchas fases, por ende OneToMany, y llamamos CultivoFase para tenerlo como FK

}