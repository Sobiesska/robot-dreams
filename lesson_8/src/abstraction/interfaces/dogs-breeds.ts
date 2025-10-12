export interface DogsBreeds {
    id: string;
    type: string;
    relationships: DogsBreedsRelationships;
    attributes: DogsBreedsAttributes;

    getMinLifeDifference(): string;
    getMaxLifeDifference(): string;
    getMinWeightMaleDifference(): string;
    getMaxWeightMaleDifference(): string;
    getMinWeightFemaleDifference(): string;
    getMaxWeightFemaleDifference(): string;
}

export interface DogsBreedsAttributes {
    name: string;
    description: string;
    life: DogsBreedsLife;
    male_weight: DogsBreedsMaleWeight;
    female_weight: DogsBreedsFemaleWeight;
    hypoallergenic: boolean;
}

interface DogsBreedsLife {
    max: number;
    min: number;
}

interface DogsBreedsMaleWeight {
    max: number;
    min: number;
}

interface DogsBreedsFemaleWeight {
    max: number;
    min: number;
}

export interface DogsBreedsRelationships {
    group: {
        data: {
            id: string;
            type: string;
        };
    };
}
