const day = 'monday';
let dayType = 'weekend' | 'weekday' | 'unknown day';

switch (day) {
    case 'saturday':
        dayType = 'weekend';
        console.log(`${day} ->`, dayType);
        break;
    case 'sunday':
        dayType = 'weekend';
        console.log(`${day} ->`, dayType);
        break;
    case 'monday':
        dayType = 'weekday';
        console.log(`${day} ->`, dayType);
        break;
    case 'tuesday':
        dayType = 'weekday';
        console.log(`${day} ->`, dayType);
        break;
    case 'wednesday':
        dayType = 'weekday';
        console.log(`${day} ->`, dayType);
        break;
    case 'thursday':
        dayType = 'weekday';
        console.log(`${day} ->`, dayType);
        break;
    case 'friday':
        dayType = 'weekday';
        console.log(`${day} ->`, dayType);
        break;
    default:
        dayType = 'unknown day';
}
