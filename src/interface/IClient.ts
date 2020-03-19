import {RpcServer} from './IRpcServer'
import {Auth} from './IAuth'

export interface IClient{

getIP():String

getMAC():String

setIP(ip: String): any

}