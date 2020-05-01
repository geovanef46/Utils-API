
export interface IRpcServer{

    login():boolean|Error
    rpc():string|Error
    sysRPC(method: string, params: string[]):string|Error
    uciRPC(method: string, params: string[]):string|Error
    fsRPC(method: string, params: string[]):string|Error

}