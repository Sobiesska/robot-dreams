import { expect } from 'chai';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { Dog } from '../src/dog';

describe('Incredible Dog\'s life', () => {
    let logs: string[];
    let originalLog: typeof console.log;
    let dog: Dog;

    beforeEach(() => {
        logs = [];
        originalLog = console.log;
        console.log = (...args: string[]) => {
            logs.push(...args);
        };
        dog = new Dog('Chappy', 'dog', 'meat', 'woof');
    });

    afterEach(() => {
        console.log = originalLog;
    });

    it('Check eat logs contains correct message', () => {
        dog.eat();
        expect(logs).to.deep.equal(['Chappy dog is eating meat']);
    });

    it('Check sleep logs contains correct message', () => {
        dog.sleep();
        expect(logs[0]).to.not.include('is eating');
    });

    it('Check play logs contains correct message', () => {
        dog.play();
        expect(logs[0]).to.not.include('is sleeping').and.to.be.a('number');
    });

    it('Check makeSound logs contains correct message', () => {
        dog.makeSound();
        expect(logs).to.deep.equal(['Chappy dog is making sound woof']);
    });

    it('Check hunt logs length is 1 and includes correct message', () => {
        dog.hunt();
        expect(logs[0].length).to.equal(25).and.to.be.a('number');
        expect(logs[0]).to.include('is hunting cat');
    });
});
