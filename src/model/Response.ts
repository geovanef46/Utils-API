import { IResponse } from './../interface/IResponse';
import { injectable } from 'inversify';

@injectable()
export class Response implements IResponse{
    private _Id: string;    
    private _Result: JSON;
    private _Error: string;


    constructor(Id: string, result: JSON, erro: string){
        this._Id = Id
        this._Result = result
        this._Error = erro


    }

    public get Id(): string {
        return this._Id;
    }
    public set Id(value: string) {
        this._Id = value;
    }

    public get Result(): JSON {
        return this._Result;
    }
    public set Result(value: JSON) {
        this._Result = value;
    }

    public get Error(): string {
        return this._Error;
    }
    public set Error(value: string) {
        this._Error = value;
    }
}