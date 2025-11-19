import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { CultivoFase } from "./cultivo-fase.entity";

@Entity('cultivo_registro')
export class CultivoRegistro {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => CultivoFase, (cf) => cf.registros)
  cultivoFase: CultivoFase;

  @Column({ type: 'date' })
  fechaSiembra: Date;

  // Espacio para relacional Cultivo con Temperatura
  @Column({ type: 'float' })
  tempMinOptima: number

  @Column({ type: 'float' })
  tempMaxOptima: number;


  @Column('float')
  valor: number;
}
