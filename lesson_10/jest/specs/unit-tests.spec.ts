import { Dog } from '../src/objects/dog';

describe('Incredible Dog\'s life unit tests', () => {
    let dog: Dog;

    beforeEach(() => {
        dog = new Dog();
    });

    it('Check makeSound contains correct message', () => {
        expect(dog.makeSound()).toBe('Mia dog is making sound woof-woof');
    });

    it('Check eat contains correct message', () => {
        expect(dog.eat()).toBe('Mia dog is eating bones');
    });

    it('Check sleep contains correct message', () => {
        expect(dog.sleep()).toBe('Mia dog is sleeping');
    });

    it('Check play contains correct message', () => {
        expect(dog.play()).toBe('Mia dog is playing');
    });

    it('Check hunt contains correct message', () => {
        expect(dog.hunt()).toBe('Mia dog is hunting cat');
    });
});
