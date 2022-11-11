// deno-lint-ignore-file no-empty-interface
declare module 'xs' {
	global {
		const xs: MarkLogic.xs.XS;

		namespace MarkLogic.xs {
			interface decimal {}
			interface double {}
			interface float {}
			interface half {}
			interface integer {}
			interface quad {}
			interface unsignedLong {}

			type int = integer;

			type numeric = number | decimal | double | float | half | integer | quad | unsignedLong;

			type anyAtomicType = numeric | string | boolean | null;

			interface equalityComparisons<T> {
				eq(other: T): boolean;
				ne(other: T): boolean;
			}
			interface comparable<T> extends equalityComparisons<T> {
				ge(other: T): boolean;
				gt(other: T): boolean;
				le(other: T): boolean;
				lt(other: T): boolean;
			}

			interface addable<R, A = duration> {
				add(value: A): R;
				subtract(value: A): R;
			}
			interface multiplicable<R, A = R> extends addable<R, A> {
				multiply(value: number): R;
				divide(value: number | R): number | R;
			}

			interface date extends comparable<date>, addable<date> {}
			interface dateTime extends comparable<dateTime>, addable<dateTime> {}
			interface dayTimeDuration extends comparable<dayTimeDuration> {}
			interface time extends comparable<time> {}
			interface yearMonthDuration extends comparable<yearMonthDuration> {}

			type duration = dayTimeDuration | yearMonthDuration;

			interface gDay extends equalityComparisons<gDay> {}
			interface gMonth extends equalityComparisons<gMonth> {}
			interface gMonthDay extends equalityComparisons<gMonthDay> {}
			interface gYear extends equalityComparisons<gYear> {}
			interface gYearMonth extends equalityComparisons<gYearMonth> {}

			interface NCName extends String {}
			interface QName extends String {}

			interface XS {
				date(dateString: string | dateTime): date;
				dateTime(dateTimeString: string | date): dateTime;
				dayTimeDuration(dayTimeDurationString: string): dayTimeDuration;
				decimal(n: number): decimal;
				gDay(gDayString: string): gDay;
				gMonth(gMonthString: string): gMonth;
				gMonthDay(gMonthDayString: string): gMonthDay;
				gYear(gYearString: string): gYear;
				gYearMonth(gYearMonthString: string): gYearMonth;
				integer(n: number): integer;
				NCName(name: string): NCName;
				QName(name: string): QName;
				string(str: string): string;
				time(timeString: string): time;
				yearMonthDuration(yearMonthDurationString: string): yearMonthDuration;
			}
		}
	}
}
