import { TipoAtividadeEnum } from './enum/TipoAtividadeEnum';
export class Atividade{
    idAtividade: number;
    idAlvo: number;
    idTecnico: number;
    tipoAtividade: TipoAtividadeEnum;
    dataProgramacao: Date;
    dataConclusao: Date;
}