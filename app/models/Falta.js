// @flow
import * as models from './base';
import type Aluno from './Aluno';

@models.register('Falta', {
    data: models.Date(),
    alunos: models.ManyToMany('Aluno'),
})
export default class Falta extends models.Model {
    data: Date;
    alunos: Array<Aluno>;
}
