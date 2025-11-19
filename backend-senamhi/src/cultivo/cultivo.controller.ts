import { Body, Controller, Post, Get, Param } from "@nestjs/common";
import { CultivoService } from "./cultivo.service";
import { CrearCultivoDto } from "./dto/crear-cultivo.dto";
import { CrearRegistroDto } from "./dto/crear-registro.dto";

@Controller('cultivos') 
export class CultivoController {
    constructor(private readonly cultivoService: CultivoService) {}

    @Post()
    async crear(@Body() dto:CrearCultivoDto) {
        return this.cultivoService.crearCultivo(dto)
    }

    @Get()
    async obtenerCultivo() {
        return this.cultivoService.findAll()
    }


    /*@Get()
    async obtenerTodos() {
        return this.cultivoService.obtenerTodo()
    }
    */
    @Post('registro')
    async agregarRegistro(@Body() dto:CrearRegistroDto) {
        return this.cultivoService.agregarRegistro(dto)
    }

    /* 
    @Post('fases')
    async crearFaseFenologica(@Body() dto: CrearFaseFenologica) {
        return this.cultivoService.crearFaseFenologica(dto)
    }
    */

    @Get(':id/fases')
    async obtenerFasesPorCultivo(@Param("id") id:number) {
        return this.cultivoService.obtenerFasesPorCultivo(id);
    }
    
    @Get('fases/all')
    async obtenerFases() {
        return this.cultivoService.obtenerFases()
    }

    @Get('reporte/fases') 
    async obtenerTodoAnalisis() {
        return this.cultivoService.obtenerFenologiaAnalisis()
    }
    

}