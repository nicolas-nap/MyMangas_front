import * as dayjs from 'dayjs';
import * as durationPlugin from 'dayjs/plugin/duration';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(durationPlugin);
dayjs.tz.setDefault('Europe/Paris');

export default dayjs;
