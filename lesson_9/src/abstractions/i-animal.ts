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

    eat(): void;
    sleep(): void;
    play(): void;
    makeSound(): void;
    hunt(): void;
}
