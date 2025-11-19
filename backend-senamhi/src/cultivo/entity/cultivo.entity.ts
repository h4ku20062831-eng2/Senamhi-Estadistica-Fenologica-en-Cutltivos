import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CultivoFase } from "./cultivo-fase.entity";


@Entity()
export class Cultivo {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar')
    nombreCultivo: string

    @Column('varchar')
    estacion: string


    @OneToMany(() => CultivoFase, (cf) => cf.cultivo)
    fases: CultivoFase[] // Un cultivo tiene muchas fases, por ende OneToMany, y llamamos CultivoFase para tenerlo como FK

}