// @flow
import * as models from './../lib/models';
import Ano from './Ano';
import type Evento from './Evento';
import type Responsabilidade from './Responsabilidade';
import type Aluno from './Aluno';

@models.register('Turma', {
    id: models.PrimaryKey(),
    titulo: models.String(),
    eventos: models.OneToMany('Evento'),
    ano: models.ForeignKey('Ano'),
    responsabilidades: models.OneToMany('Responsabilidade'),
    alunos: models.OneToMany('Aluno'),
})
export default class Turma extends models.Model {
    id: number;
    titulo: string;
    eventos: Array<Evento>;
    ano: Ano;
    responsabilidades: Array<Responsabilidade>;
    alunos: Array<Aluno>;

    toString(): string {
        return this.titulo || '';
    }
}
