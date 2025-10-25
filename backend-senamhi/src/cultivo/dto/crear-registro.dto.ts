import { IsNumber, IsString } from "class-validator";

export class CrearRegistroDto {
    @IsNumber()
    cultivoId: number

    @IsString()
    faseCodigo: string

    @IsNumber()
    valor: number
}