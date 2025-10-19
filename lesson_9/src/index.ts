import { AnimalFactory } from './objects/animal-factory';
import { AnimalActions } from './objects/animal-actions';
import { IAnimal } from './abstractions/i-animal';
import { PetPig } from './objects/pet-pig';
import { IPlayable } from './abstractions/i-playable';

const cat = AnimalFactory.createCat();
const dog = AnimalFactory.createDog();
const pig = AnimalFactory.createPig();
const petPig = new PetPig();
const actions = new AnimalActions();
const animals: IAnimal[] = [cat, dog, pig, petPig];

dog.hunt();
dog.eat();
dog.sleep();
dog.play();
dog.makeSound();

// SRP - Single Responsibility Principle
actions.makeSound(cat);
actions.eat(cat);
actions.sleep(dog);
actions.play(pig);

// Polymorphism
animals.forEach(animal => {
    animal.hunt();
    animal.eat();
    animal.sleep();
    animal.play();
    animal.makeSound();
});

// OCP - Open/Closed Principle
petPig.walk();


// LSP - Liskov Substitution Principle
for (const animal of animals) {
    actions.makeSound(animal);
    actions.eat(animal);
    actions.sleep(animal);
    actions.play(animal);
    animal.hunt();
}

// ISP - Interface Segregation Principle
interface ISleeper extends IAnimal { sleep(): void; }

const sleepers: ISleeper[] = [cat, dog, pig];
for (const sleeper of sleepers) {
    sleeper.sleep();
}

const players: IPlayable[] = [cat, dog, petPig];
for (const player of players) {
    player.play();
}

// DIP - Dependency Inversion Principle
interface IAnimalProvider { getAnimals(): IAnimal[]; }
interface IAnimalActionRunner { runAll(animal: IAnimal): void; }

class AnimalProvider implements IAnimalProvider {
    public getAnimals(): IAnimal[] {
        return [cat, dog, pig, petPig];
    }
}

class ActionRunner implements IAnimalActionRunner {
    private readonly action: AnimalActions;
    public constructor(action: AnimalActions) {
        this.action = action;
    }
    public runAll(animal: IAnimal): void {
        this.action.makeSound(animal);
        this.action.eat(animal);
        this.action.sleep(animal);
        this.action.play(animal);
        this.action.hunt(animal);
    }
}

const animalsProvider: IAnimalProvider = new AnimalProvider();
const actionRunner: IAnimalActionRunner = new ActionRunner(new AnimalActions());

for (const animal of animalsProvider.getAnimals()) {
    actionRunner.runAll(animal);
}
