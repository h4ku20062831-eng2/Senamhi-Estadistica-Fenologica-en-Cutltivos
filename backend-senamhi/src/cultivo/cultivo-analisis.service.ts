import { Injectable } from "@nestjs/common";

@Injectable()
export class CultivoAnalisis {
    async hacerAnalisis(fase_fenologica: number) {

        const fase_optima = 'FIN'

        if (fase_fenologica > 4 && fase_fenologica < 10) return "PLENO";
        if (fase_fenologica < 4) return "INICIO";
        return fase_optima;
    }   
}