import { injectable, inject } from 'inversify';
import {IPayload} from '../interface/IPayload'
import { TYPES } from '../types';

@injectable()
export class Payload implements IPayload{
    private _Id: string;    
    private _Method: string;
    private _Params: string[];

    constructor(Id: string, Method: string, Params: string[]){
        this._Id = Id;
        this._Method = Method;
        this._Params = Params;
    }


    public get Id(): string {
        return this._Id;
    }
    public set Id(value: string) {
        this._Id = value;
    }

    public get Method(): string {
        return this._Method;
    }
    public set Method(value: string) {
        this._Method = value;
    }

    public get Params(): string[] {
        return this._Params;
    }
    public set Params(value: string[]) {
        this._Params = value;
    }

}