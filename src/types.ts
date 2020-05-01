import { IRpcServer } from './interface/IRpcServer';
import { IResponse } from './interface/IResponse';

const TYPES = {
    IPayload: Symbol.for("IPayload"),
    IClient: Symbol.for("IClient"),
    IAuth: Symbol.for("IAuth"),
    IResponse: Symbol.for("IResponse"),
    IRpcServer: Symbol.for("IRpcServer")
};

export { TYPES };