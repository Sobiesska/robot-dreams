const day = 'monday';
let dayType = 'weekend' | 'weekday' | 'unknown day';

switch (day) {
  case 'saturday':
  case 'sunday':
    dayType = 'weekend';
    break;
  case 'monday':
  case 'tuesday':
  case 'wednesday':
  case 'thursday':
  case 'friday':
    dayType = 'weekday';
    break;
  default:
    dayType = 'unknown day';
}

console.log(`${day} ->`, dayType);
