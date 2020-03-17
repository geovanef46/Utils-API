import {RpcServer} from './IRpcServer'
import {Auth} from './IAuth'

export interface IClient{
  RPCServer: RpcServer
  Auth: Auth
  Token: String
  ID: String

}