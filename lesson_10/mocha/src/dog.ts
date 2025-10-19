export class Dog {
    public name: string;
    public type: string;
    public food: string;
    public sound: string;

    public constructor(name: string, type: string, food: string, sound: string) {
        this.name = name;
        this.type = type;
        this.food = food;
        this.sound = sound;
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

export default Dog;


