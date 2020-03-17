import {RpcServer} from './RpcServer'
import {Auth} from './Auth'

export interface Client{
  RPCServer: RpcServer
  Auth: Auth
  Token: String
  ID: String

}