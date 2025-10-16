import { IAnimal } from '../abstractions/i-animal';

export class Pig implements IAnimal {
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
        this.type = 'pig';
        this.name = 'Mirabella';
        this.age = 3;
        this.sound = 'oink';
        this.color = 'pink';
        this.weight = 105;
        this.speed = 5;
        this.food = 'slop';
        this.isHunting = false;
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
        console.log(`${this.name} ${this.type} is not hunting animals`);
    }
}
