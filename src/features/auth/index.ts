import { activateSaga, registerSaga } from "./authSagas";

export function* authSagas(){
	yield ([registerSaga(), activateSaga()]);

}