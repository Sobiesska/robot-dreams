export interface IAnimal {
    type: string;
    name: string;
    age: number;
    sound: string;
    color: string;
    weight: number;
    speed: number;
    food: string;
    isHunting: boolean;

    eat(): string;
    sleep(): string;
    play(): string;
    makeSound(): string;
    hunt(): string;
}
