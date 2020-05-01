import { RpcServer } from './RpcServer';
import { IRpcServer } from './../interface/IRpcServer';
import { inject, injectable } from 'inversify';
import "reflect-metadata";
import { IAuth } from '../interface/IAuth';
import { IClient } from '../interface/IClient';
import { TYPES } from '../types';


@injectable()
export class Client implements IClient{
    
    private _RPCServer?: IRpcServer
    private _Auth: IAuth
    private _Token: string
    private _ID: string
    

    constructor(@inject(TYPES.IAuth) Auth: IAuth, Token: string, ID: string, @inject(TYPES.IRpcServer) RPCServer?: IRpcServer){
        this._Auth = Auth
        this._Token = Token
        this._ID = ID
        this._RPCServer = RPCServer      
        if (!RPCServer) {
            this.RPCServer = this.setRpcDefault()
        }
            
    
    }

    
    get RPCServer() : IRpcServer | undefined {
        return this._RPCServer
    }
    
    set RPCServer(server : IRpcServer | undefined) {
        this._RPCServer = server;
    }
    
    get Auth() : IAuth {
        return this._Auth;
    }
    
    set Auth(auth : IAuth) {
        this._Auth = auth;
    }

    get Token() : string {
        return this._Token
    }
    
    set Token(token : string) {
        this._Token = token;
    }

    get ID() : string {
        return this._ID
    }
    
    set ID(id : string) {
        this._ID = id;
    }

    getIP(): string {
        throw new Error("Method not implemented.");
    }
    getMAC(): string {
        throw new Error("Method not implemented.");
    }
    setIP(ip: string) {
        throw new Error("Method not implemented.");
    }
    
    setRpcDefault() : IRpcServer{
        return new RpcServer('192.168.1.1',80,false)
    }
}