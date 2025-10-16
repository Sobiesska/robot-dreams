import { DogBreed } from '../interfaces/dog-breed';

export abstract class AbstractDogBreed {
    public dogBreed: DogBreed;

    public constructor(dogBreed: DogBreed) {
        this.dogBreed = dogBreed;
    }

    public reportLifeDifferences(): string[] {
        return [
            this.dogBreed.getMaxLifeDifference(),
            this.dogBreed.getMinLifeDifference()
        ];
    }

    public reportWeightDifferences(): string[] {
        return [
            this.dogBreed.getMaxWeightMaleDifference(),
            this.dogBreed.getMinWeightMaleDifference(),
            this.dogBreed.getMaxWeightFemaleDifference(),
            this.dogBreed.getMinWeightFemaleDifference()
        ];
    }
}

export class RefinedDogBreed extends AbstractDogBreed {
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


