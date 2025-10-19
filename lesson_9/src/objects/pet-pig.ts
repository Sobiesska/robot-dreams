import { Pig } from './pig';
import { IPlayable } from '../abstractions/i-playable';

export class PetPig extends Pig implements IPlayable {
    public constructor() {
        super();
        this.name = 'Peppa';
        this.isHunting = false;
    }

    public walk(): void {
        console.log(`${this.name} ${this.type} is walking on a leash`);
    }
}


