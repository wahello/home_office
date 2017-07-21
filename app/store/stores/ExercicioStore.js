// @flow

import { observable, extendObservable, action } from 'mobx';
import { ExercicioService } from '../../services';
import CONFIG from './../../../config';

class ExercicioStore {
    service: ExercicioService;
    @observable exercicios: Array<any>; // TODO: Colocar o model especifico

    constructor() {
        this.service = new ExercicioService();
    }

    async load() {
        const result = await this.service.get();
        this.exercicios = result.exercicios;
    }

    async save(data: Object) {
        const readyData = {
            ...data,
            disciplina: `${CONFIG.API.BASE_URL}/disciplinas/${data.disciplina}`,
            titulo: 'Teste',
        };
        const result = await this.service.post(readyData);
        if (__DEV__) console.log(result); // eslint-disable-line
    }
}

const store = new ExercicioStore();
store.load();

export default store;
