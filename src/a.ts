type TupleIntersection<T extends unknown[]> =
	T extends [] ? unknown :
	T extends [infer Hd, ...infer Tl] ? Hd & TupleIntersection<Tl> :
	never;

export const intersectionCheck =
	<Types extends unknown[] = []>() =>
		<Intersection extends TupleIntersection<Types>>(obj: Intersection) => obj;
