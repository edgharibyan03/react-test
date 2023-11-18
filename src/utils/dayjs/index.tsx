import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);


export function CalculateMovieDuration(duration: number) {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);

  console.log(hours, duration);
  const formattedDuration = dayjs.duration({
    hours,
    minutes
  }).format('m[min]');

  console.log(formattedDuration);

  return formattedDuration
}