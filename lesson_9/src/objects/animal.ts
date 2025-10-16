import { IAnimal } from '../abstractions/i-animal';

export class Animal implements IAnimal {
    public type: string;
    public name: string;
    public age: number;
    public sound: string;
    public color: string;
    public weight: number;
    public speed: number;
    public food: string;
    public isHunting: boolean;

    public constructor(animal: {
        type: string;
        name: string;
        age: number;
        sound: string;
        color: string;
        weight: number;
        speed: number;
        food: string;
        isHunting: boolean;
    }) {
        this.type = animal.type;
        this.name = animal.name;
        this.age = animal.age;
        this.sound = animal.sound;
        this.color = animal.color;
        this.weight = animal.weight;
        this.speed = animal.speed;
        this.food = animal.food;
        this.isHunting = animal.isHunting;
    }
    public hunt(): void {
        console.log(`${this.name} ${this.type} is hunting`);
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
}


