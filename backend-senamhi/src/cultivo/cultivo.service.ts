import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cultivo } from "./entity/cultivo.entity";
import { In, Repository } from "typeorm";
import { FaseFenologica } from "./entity/fase-fenologica.entity";
import { CultivoFase } from "./entity/cultivo-fase.entity";
import { privateDecrypt } from "crypto";
import { CrearCultivoDto } from "./dto/crear-cultivo.dto";
import { CultivoAnalisis } from "./cultivo-analisis.service";
import { CrearRegistroDto } from "./dto/crear-registro.dto";
import { CultivoRegistro } from "./entity/cultivo-registro.entity";

@Injectable()


export class CultivoService {
    constructor(
        @InjectRepository(Cultivo)
        private cultivoRepo: Repository<Cultivo>,

        @InjectRepository(FaseFenologica)
        private faseRepo: Repository<FaseFenologica>,

        @InjectRepository(CultivoFase)
        private cultivoFaseRepo: Repository<CultivoFase>,

        private analisisCultivo: CultivoAnalisis,

        @InjectRepository(CultivoRegistro)
        private cultivoRegistro: Repository<CultivoRegistro>

        

    ) { }

    async crearCultivo(dto: CrearCultivoDto) {
        const cultivo = this.cultivoRepo.create({
            estacion: dto.estacion,
            nombreCultivo: dto.nombreCultivo, // El DTO que llega del frontend, hace llegar al backend
            fechaSiembra: dto.fechaSiembra,
            tempMinOptima: dto.tempMinOptima,
            tempMaxOptima: dto.tempMaxOptima

            // Espacio para implementar temperatura
        
        })

        await this.cultivoRepo.save(cultivo) // Se guarda el nombre del cultivo en la tabla Cultivo

        
    }

    async agregarRegistro(dto: CrearRegistroDto) {
        const cultivoFase = await this.cultivoFaseRepo.findOne({
            where: {
                cultivo: { id: dto.cultivoId },
                fase: { codigo: dto.faseCodigo }
            },
            relations: ["cultivo", "fase"],
        });

        if (!cultivoFase) return 'No existe la relación cultivo-fase'

        const nuevoRegistro = this.cultivoRegistro.create({
            cultivoFase,
            fecha: new Date(),
            valor: dto.valor
        })

        await this.cultivoRegistro.save(nuevoRegistro)

        return { mensaje: "Registro agregado correctamente", nuevoRegistro };
    }

    async obtenerTodo() {
        return await this.cultivoRepo.find({
            relations: ["fases", "fases.fase"]
            // Traemos el fases -> CultivoFase y CultivoFase (fases) tiene fases.fase -> fase fenologica
        })
    }

    async obtenerFases(){
        return await this.faseRepo.find();
    }

    async obtenerFasesPorCultivo(cultivoId: number) {
        const cultivo = await this.cultivoRepo.findOne({
            where: {id: cultivoId },
            relations: ["fases", "fases.fase"],
        });

        return cultivo
    }


    async obtenerFenologiaAnalisis() {

        // Obtenemos todo la base de datos de cultivoFase
        const fases = await this.cultivoFaseRepo.find({
            relations: ["fases", "cultivo"]
        })

        // Relacionamos con  sus FK, para poder actualizar el nuevo array con los valores que pertenece a cada 
        // dato que existe para evitar que el usuario vuelva a escribir esos datos


        // Mapeamos o creamos otro array con valores existentes pero agregando su analisis a cada fase
            const datos = (await fases).map((d) => {
                const resultado = this.analisisCultivo.hacerAnalisis(d.fase.id)

                return {
                    cultivo: d.cultivo.nombreCultivo,
                    fases: d.fase.codigo,
                    analisis: resultado
                }
            })
            return datos
    }

}