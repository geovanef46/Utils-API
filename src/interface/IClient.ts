import {IRpcServer} from './IRpcServer'
import {IAuth} from './IAuth'

export interface IClient{

    RPCServer?: IRpcServer
    Auth: IAuth
    Token: string
    ID: string
    

getIP():string

getMAC():string

setIP(ip: string): any

}