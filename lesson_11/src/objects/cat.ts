import { Animal } from './animal';

export class Cat extends Animal {
    public constructor() {
        super({
            type: 'cat',
            name: 'Molly',
            age: 3,
            sound: 'meow',
            color: 'white',
            weight: 4,
            speed: 10,
            food: 'fish',
            isHunting: true
        });
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
