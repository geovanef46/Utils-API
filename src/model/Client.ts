import { RpcServer } from '../interface/IRpcServer';
import { Auth } from '../interface/IAuth';
import { IClient } from '../interface/IClient';
import { injectable, inject } from "inversify";

@injectable()
export class Client implements IClient{
    
    getIP(): String {
        throw new Error("Method not implemented.");
    }
    getMAC(): String {
        throw new Error("Method not implemented.");
    }
    setIP(ip: String) {
        throw new Error("Method not implemented.");
    }
    private RPCServer: RpcServer
    private Auth: Auth
    private Token: String
    private ID: String
    

    constructor(RPCServer: RpcServer, Auth: Auth, Token: String, ID: String){
        this.RPCServer = RPCServer
        this.Auth =  Auth
        this.Token = Token
        this.ID = ID

    }

    

}