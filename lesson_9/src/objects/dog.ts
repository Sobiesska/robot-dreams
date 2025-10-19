import { IAnimal} from '../abstractions/i-animal';
import { IPlayable } from '../abstractions/i-playable';

export class Dog implements IAnimal, IPlayable {
    public type: string;
    public name: string;
    public age: number;
    public sound: string;
    public color: string;
    public weight: number;
    public speed: number;
    public food: string;
    public isHunting: boolean;

    public constructor() {
        this.type = 'dog';
        this.name = 'Mia';
        this.age = 1;
        this.sound = 'woof-woof';
        this.color = 'brown';
        this.weight = 10.5;
        this.speed = 10;
        this.food = 'bones';
        this.isHunting = true;
    }

    public eat(): void {
        console.log(`${this.name} ${this.type} is eating ${this.food}`);
    }

    public sleep(): void {
        console.log(`${this.name} ${this.type} is sleeping`);
    }

    public play(): void {
        console.log(`${this.name} ${this.type} is playing`);
    }

    public makeSound(): void {
        console.log(`${this.name} ${this.type} is making sound ${this.sound}`);
    }

    public hunt(): void {
        console.log(`${this.name} ${this.type} is hunting cat`);
    }
}
