import { ICGM } from '../redux/actions/cgm';

export const parseDate = (date: string) => {
  const year = +date.slice(0, 4);
  const month = +date.slice(4, 6);
  const day = +date.slice(6, 8);
  const hours = +date.slice(8, 10);
  const minutes = +date.slice(10, 12);
  const seconds = +date.slice(12, 14);
  return new Date(year, month - 1, day, hours, minutes, seconds);
};

export const groupByDay = (cgm: ICGM[]) => {
  return cgm.reduce((acc, val) => {
    const key = `${val.date.getDay()}/${val.date.getMonth()}/${val.date.getFullYear()}`;
    (acc[key] = acc[key] || []).push(val);
    return acc;
  }, {});
};

export const calcAveragePerDay = (cgm: ICGM[]) => {
  const groupedCGM = groupByDay(cgm);
  return Object.values(groupedCGM).map((data: ICGM[]) =>
    data.reduce(
      (acc, val, _, arr) => ({
        value: acc.value + val.value / arr.length,
        date: val.date,
      }),
      { value: 0 }
    )
  );
};

export const filterCGM = (
  cgm: ICGM[],
  filter: 'Daily' | 'Weekly' | 'Monthly'
) => {
  const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
  const WEEK_IN_MILLISECONDS = DAY_IN_MILLISECONDS * 7;
  const MONTH_IN_MILLISECONDS = DAY_IN_MILLISECONDS * 30;
  const today = Date.now();

  switch (filter) {
    case 'Daily':
      return cgm.filter(
        ({ date }: ICGM) =>
          Math.abs(today - date.getTime()) <= DAY_IN_MILLISECONDS
      );

    case 'Weekly':
      return calcAveragePerDay(
        cgm.filter(
          ({ date }: ICGM) =>
            Math.abs(today - date.getTime()) <= WEEK_IN_MILLISECONDS
        )
      );

    case 'Monthly':
      return calcAveragePerDay(
        cgm.filter(
          ({ date }: ICGM) =>
            Math.abs(today - date.getTime()) <= MONTH_IN_MILLISECONDS
        )
      );

    default:
      return cgm;
  }
};

export const calcDailyAverage = (cgm) => {
  return filterCGM(cgm, 'Daily').reduce(
    (acc, val, _, arr) => acc + val.value / arr.length,
    0
  );
};
