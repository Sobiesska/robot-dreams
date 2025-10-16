import { IAnimal } from '../abstractions/i-animal';

export class Cat implements IAnimal {
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
        this.type = 'cat';
        this.name = 'Molly';
        this.age = 3;
        this.sound = 'meow';
        this.color = 'white';
        this.weight = 4;
        this.speed = 10;
        this.food = 'fish';
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
        console.log(`${this.name} ${this.type} is hunting mice`);
    }
}
