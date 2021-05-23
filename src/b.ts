import { intersectionCheck } from "./a";

export const intersectionCheckWrapper =
	<Types extends unknown[] = []>() =>
		<Obj>(obj: Obj) => intersectionCheck<Types>()(obj);
