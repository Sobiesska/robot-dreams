import { DogsBreeds, DogsBreedsAttributes, DogsBreedsRelationships } from '../abstraction/interfaces/dogs-breeds';

export class HomeDog implements DogsBreeds {
    public id: string;
    public type: string;
    public relationships: DogsBreedsRelationships;
    public attributes: DogsBreedsAttributes;

    public constructor(breed: DogsBreeds) {
        this.id = breed.id;
        this.type = breed.type;
        this.relationships = breed.relationships;
        this.attributes = breed.attributes;
    }

    public getMinLifeDifference(): string {
        const averageMinLife = 12.0;
        return `Average min life difference: ${averageMinLife - this.attributes.life.min}`;
    }

    public getMaxLifeDifference(): string {
        const averageMaxLife = 14.8;
        return `Average max life difference: ${averageMaxLife - this.attributes.life.max}`;
    }

    public getMinWeightMaleDifference(): string {
        const averageMinWeightMale = 19.5;
        return `Average min weight male difference: ${averageMinWeightMale - this.attributes.male_weight.min}`;
    }

    public getMaxWeightMaleDifference(): string {
        const averageMaxWeightMale = 29.5;
        return `Average max weight male difference: ${averageMaxWeightMale - this.attributes.male_weight.max}`;
    }

    public getMinWeightFemaleDifference(): string {
        const averageMinWeightFemale = 19.1;
        return `Average min weight female difference: ${averageMinWeightFemale - this.attributes.female_weight.min}`;
    }

    public getMaxWeightFemaleDifference(): string {
        const averageMaxWeightFemale = 27.0;
        return `Average max weight female difference: ${averageMaxWeightFemale - this.attributes.female_weight.max}`;
    }
}
