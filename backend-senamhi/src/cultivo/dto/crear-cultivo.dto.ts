import { ArrayNotEmpty, IsArray, IsString } from "class-validator";

export class CrearCultivoDto {
    @IsString()
    nombreCultivo: string;
    
    estacion: string;
    fechaSiembra: Date;

    // Espacio para implementar temperatura

    @IsArray()
    cantidad: number[];

    tempMinOptima: number
    tempMaxOptima: number
}