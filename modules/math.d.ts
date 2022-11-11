// deno-lint-ignore-file no-empty-interface ban-types
/// <reference path="./xs.d.ts" />

declare module 'math' {
	global {
		const math: MarkLogic.math.MLMath;

		namespace MarkLogic.math {
			interface linearModel {}

			interface MLMath {
				acos(x: number): number;
				asin(x: number): number;
				atan(x: number): number;
				atan2(x: number, y: number): number;
				ceil(x: number): number;
				correlation(arr: [number, number][]): number;
				cos(x: number): number;
				cosh(x: number): number;
				cot(x: number): number;
				covariance(arr: [number, number][]): number;
				covarianceP(arr: [number, number][]): number;
				degrees(x: number): number;
				exp(x: number): number;
				fabs(x: number): number;
				floor(x: number): number;
				fmod(x: number, y: number): number;
				frexp(x: number): Sequence<number>;
				lrexp(x: number, i: number): number;
				linearModel(arr: [number, number][]): linearModel;
				linearModelCoeff(linearModel: linearModel): Sequence<number>;
				linearModelIntercept(linearModel: linearModel): number;
				linearModelRSquared(linearModel: linearModel): number;
				log(x: number): number;
				log10(x: number): number;
				median(arr: number[]): number;
				mode(arr: number[]): number;
				modf(x: number): Sequence<number>;
				percentile(arr: number[], p: number[]): Sequence<number>;
				percentRank(values: (string | number | boolean | null | unknown[] | object)[], value: xs.anyAtomicType, options?: string[]): number;
				pi(): number;
				pow(x: number, y: number): number;
				radians(x: number): number;
				rank(values: (string | number | boolean | null | unknown[] | object)[], value: xs.anyAtomicType, options?: string[]): number;
				sin(x: number): number;
				sinh(x: number): number;
				sqrt(x: number): number;
				stddev(arr: number[]): number;
				stddevP(arr: number[]): number;
				tan(x: number): number;
				tanh(x: number): number;
				trunc(x: number, places?: number): number;
				variance(arr: number[]): number;
				varianceP(arr: number[]): number;
			}
		}
	}
}
