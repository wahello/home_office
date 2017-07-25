// @flow
import { observable } from 'mobx';

export default class BaseModel {
    _data$: any;
    _links: { [string]: any };
    static fields = {};

    static fromArray(data: Array<Object>): Array<this> {
        return data.map(d => new this(d));
    }

    // eslint-disable-next-line consistent-return
    constructor(data: Object | Array<Object>) {
        if (Array.isArray(data)) {
            return data.map(d => new this.constructor(d));
        }
        if (data) {
            const fields = this.constructor.fields;
            const result: { [string]: any } = {};
            Object.keys(fields).forEach((key) => {
                result[key] = fields[key](data[key], this, key);
            });
            this._data$ = observable(result);
            this._links = data.link || {};
        } else {
            this._data$ = observable({});
        }
    }

    toJS(): Object {
        const result = {};
        const fields = this.constructor.fields;
        Object.keys(fields).forEach((key) => {
            if (this._data$[key] !== undefined) {
                const value = this._data$[key];
                result[key] = (value && value._selfLink) || value;
            }
        });
        return result;
    }

    get _selfLink(): ?string {
        const link = this._links.self;
        if (link) {
            if (typeof link === 'string') {
                return link;
            } else if (link.fullPath) {
                return link.fullPath;
            }
        }
        return null;
    }
}
