import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { CultivoFase } from "./cultivo-fase.entity";

@Entity('cultivo_registro')
export class CultivoRegistro {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => CultivoFase, (cf) => cf.registros)
  cultivoFase: CultivoFase;

  @Column({ type: 'date' })
  fecha: Date;

  @Column('float')
  valor: number;
}
