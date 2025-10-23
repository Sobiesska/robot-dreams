import { stubConstructor } from 'ts-sinon';
import sinon from 'ts-sinon';
import { expect } from 'chai';
import { AnimalFactory } from '../src/objects/animal-factory';
import { Cat } from '../src/objects/cat';
import { Dog } from '../src/objects/dog';
import { Pig } from '../src/objects/pig';
import { Animal } from '../src/objects/animal';
import { describe, it, beforeEach, afterEach } from 'mocha';


describe('Mocking actions of different animals', () => {
    let cat: Cat;
    let dog: Dog;

    beforeEach(() => {
        cat = new Cat();
        dog = new Dog();

    });

    afterEach(() => {
        sinon.restore();
    });

    it('Should mock the eat action of a cat', () => {
        const eatStub = sinon.stub(cat, 'eat');

        cat.eat();

        expect(eatStub.calledOnce).to.be.true;
    });

    it('Should spy on the makeSound action of a dog', () => {
        const consoleSpy = sinon.spy(console, 'log');

        dog.makeSound();

        expect(consoleSpy.calledOnce).to.be.true;
        expect(
            consoleSpy.calledWith(
                `${dog.name} ${dog.type} is making sound ${dog.sound}`
            )
        ).to.be.true;
        consoleSpy.restore();
    });

    it('Should stub the hunt action of a dog', () => {
        const expected = 'custom hunt result';
        const huntStub = sinon.stub(dog, 'hunt').returns(expected as unknown as void);

        const result = dog.hunt() as unknown as string;

        expect(huntStub.calledOnce).to.be.true;
        expect(result).to.equal(expected);
    });

    it('Should stub the play and eat actions of a pig', () => {
        const pigStub = stubConstructor(Pig);

        pigStub.play();
        pigStub.eat();

        expect(pigStub.play.calledOnce).to.be.true;
        expect(pigStub.eat.calledOnce).to.be.true;
    });

    it('Should stub the creation of a dog in the Animal Factory', () => {
        const dogStub = stubConstructor(Dog);
        const factoryStub = sinon
            .stub(AnimalFactory, 'createDog')
            .returns(dogStub as unknown as Dog);

        const createdDog = AnimalFactory.createDog();
        createdDog.play();

        expect(factoryStub.calledOnce).to.be.true;
        expect(dogStub.play.calledOnce).to.be.true;
    });

    it('Should spy on the hunt output of a wolf', () => {
        const wolf = new Animal({
            type: 'wolf',
            name: 'Ghost',
            age: 5,
            sound: 'howl',
            color: 'white',
            weight: 40,
            speed: 50,
            food: 'meat',
            isHunting: true
        });
        const consoleSpy = sinon.spy(console, 'log');

        wolf.hunt();

        expect(consoleSpy.calledWith('Ghost wolf is hunting')).to.be.true;
        consoleSpy.restore();
    });
});