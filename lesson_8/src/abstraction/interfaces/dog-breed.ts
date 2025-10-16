export interface DogBreed {
    id: string;
    type: string;
    relationships: DogBreedRelationship;
    attributes: DogBreedAttribute;

    getMinLifeDifference(): string;
    getMaxLifeDifference(): string;
    getMinWeightMaleDifference(): string;
    getMaxWeightMaleDifference(): string;
    getMinWeightFemaleDifference(): string;
    getMaxWeightFemaleDifference(): string;
}

export interface DogBreedAttribute {
    name: string;
    description: string;
    life: DogBreedLife;
    male_weight: DogBreedMaleWeight;
    female_weight: DogBreedFemaleWeight;
    hypoallergenic: boolean;
}

interface DogBreedLife {
    max: number;
    min: number;
}

interface DogBreedMaleWeight {
    max: number;
    min: number;
}

interface DogBreedFemaleWeight {
    max: number;
    min: number;
}

export interface DogBreedRelationship {
    group: {
        data: {
            id: string;
            type: string;
        };
    };
}
