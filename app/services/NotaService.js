// @flow

import { CollectionService, Constants } from './base';

export default class NotaService extends CollectionService {
  constructor() {
    super(Constants.NOTAS);
  }

  findByEvento(id: number) {
    return super.search({ id });
  }

  findByAluno(id: number) {
    return super.search({ id });
  }

  findByAlunoAndTarefa(aluno: number, tarefa: number) {
    return super.search({ aluno, tarefa });
  }

  findByTurmaAndTarefa(turma: number, tarefa: number) {
    return super.search({ turma, tarefa });
  }
}