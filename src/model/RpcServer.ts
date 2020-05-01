import { IRpcServer } from './../interface/IRpcServer';
import { injectable } from 'inversify';


@injectable()
export class RpcServer implements IRpcServer{

    private _HostName: string;    
    private _Port: number;
    private _SSL: boolean;
   
    
    /**
     * Server RPC
     */
    constructor(host: string, port: number, ssl: boolean) {
        this._HostName = host
        this._Port = port
        this._SSL = ssl
    }

    public get HostName(): string {
        return this._HostName;
    }
    public set HostName(value: string) {
        this._HostName = value;
    }

    public get Port(): number {
        return this._Port;
    }
    public set Port(value: number) {
        this._Port = value;
    }

    public get SSL(): boolean {
        return this._SSL;
    }
    public set SSL(value: boolean) {
        this._SSL = value;
    }

    login(): boolean | Error {
        throw new Error("Method not implemented.");
    }
    rpc(): string | Error {
       let response : Response
       let result : string
       
       return result, err
    }
    sysRPC(method: string, params: string[]): string | Error {
        throw new Error("Method not implemented.");
    }
    uciRPC(method: string, params: string[]): string | Error {
        throw new Error("Method not implemented.");
    }
    fsRPC(method: string, params: string[]): string | Error {
        throw new Error("Method not implemented.");
    }


    
}