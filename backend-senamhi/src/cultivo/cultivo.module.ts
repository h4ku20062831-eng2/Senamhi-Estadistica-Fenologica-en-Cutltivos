import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cultivo } from "./entity/cultivo.entity";
import { FaseFenologica } from "./entity/fase-fenologica.entity";
import { CultivoFase } from "./entity/cultivo-fase.entity";
import { CultivoRegistro } from "./entity/cultivo-registro.entity";
import { CultivoController } from "./cultivo.controller";
import { CultivoService } from "./cultivo.service";
import { CultivoAnalisis } from "./cultivo-analisis.service";

@Module({
    imports: [TypeOrmModule.forFeature([Cultivo, FaseFenologica, CultivoFase, CultivoRegistro])],
    controllers: [CultivoController],
    providers: [CultivoService, CultivoAnalisis]
})

export class CultivoModule {}