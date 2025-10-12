import { DogsBreeds } from '../interfaces/dogs-breeds';

export abstract class AbstractDogsBreeds {
    public dogsBreeds: DogsBreeds;

    public constructor(dogsBreeds: DogsBreeds) {
        this.dogsBreeds = dogsBreeds;
    }

    public reportLifeDifferences(): string[] {
        return [
            this.dogsBreeds.getMaxLifeDifference(),
            this.dogsBreeds.getMinLifeDifference()
        ];
    }

    public reportWeightDifferences(): string[] {
        return [
            this.dogsBreeds.getMaxWeightMaleDifference(),
            this.dogsBreeds.getMinWeightMaleDifference(),
            this.dogsBreeds.getMaxWeightFemaleDifference(),
            this.dogsBreeds.getMinWeightFemaleDifference()
        ];
    }
}

export class RefinedDogsBreeds extends AbstractDogsBreeds {
    public fullReport(): string {
        const life = this.reportLifeDifferences();
        const weight = this.reportWeightDifferences();
        return [
            'Life differences:',
            ...life,
            'Weight differences:',
            ...weight
        ].join('\n');
    }
}


