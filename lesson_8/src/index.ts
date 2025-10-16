import { DogBreed } from './abstraction/interfaces/dog-breed';
import { HomeDog } from './implementation/home-dog';

async function getDogBreedData(): Promise<HomeDog[]> {
    const response = await fetch('https://dogapi.dog/api/v2/breeds');
    if (!response.ok) {
        throw new Error(`Failed to fetch dog breeds: ${response.statusText}`);
    }
    const breedsData = await response.json();
    return breedsData.data.map((row: DogBreed) => new HomeDog(row));
}

function getMaxLifeDifference(data: DogBreed[]): string {
    const averageMaxLife = data.reduce(
        (acc: number, breed: DogBreed) => acc + breed.attributes.life.max,
        0
    ) / data.length;
    return `Average max life: ${averageMaxLife}`;
}

function getMinLifeDifference(data: DogBreed[]): string {
    const averageMinLife = (
        data.reduce(
            (acc: number, breed: DogBreed) => acc + breed.attributes.life.min,
            0
        ) / data.length
    );
    return `Average min life: ${averageMinLife}`;
}

const akitaDogData = {
    id: 'e7e99424-d514-4b56-9f0c-05736f6dd22d',
    type: 'breed',
    relationships: {
        group: {
            data: {
                id: '56081cf0-fdf2-4114-9bf7-23a3f5b6af91',
                type: 'group'
            }
        }
    },
    attributes: {
        name: 'Akita',
        description:
            'The Akita is a large, muscular dog breed that originated in Japan. They are known for their loyalty and courage.',
        life: { max: 12, min: 10 },
        male_weight: { max: 60, min: 35 },
        female_weight: { max: 50, min: 35 },
        hypoallergenic: false
    }
} as DogBreed;

const akitaDog = new HomeDog(akitaDogData);

console.log(akitaDog.getMaxLifeDifference());
console.log(akitaDog.getMinLifeDifference());

getDogBreedData().then(data => {
    console.log(JSON.stringify(data, null, 2));
});

getDogBreedData().then(data => {
    console.log(getMaxLifeDifference(data));
    console.log(getMinLifeDifference(data));
});
