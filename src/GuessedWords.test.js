import React from 'react'

import {shallow} from 'enzyme'
import {findByTestAttr, checkProps} from '../test/testUtils.js'
import GuessedWords from './GuessedWords.js'

const defaultProps = {
   guessedWords: [{ guessedWord:'any', letterMatchCount: 0 }],
};

const setup = (props={}) => {
        const setupProps = {...defaultProps, ...props}
        return shallow(<GuessedWords {...setupProps}/>)
};


test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps)
});

describe('if there are no words guessed', () => {
    let wrapper
    beforeEach( () => {
        wrapper = setup({guessedWords: [] });
    })
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-word');
        expect(component.length).toBe(1);
    });
    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });

});

describe('if there are words guessed', () => {
    let wrapper
    let guessedWords = [
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'agile', letterMatchCount: 1},
        {guessedWord: 'party', letterMatchCount: 5},
    ];
    beforeEach( () => {
        wrapper = setup({guessedWords});
    })
    test('renders without errors', () =>{
        const component = findByTestAttr(wrapper, 'component-guessed-word')
        expect(component.length).toBe(1);
    });

    test('renders "guessed words" section', () => {
        const instructions = findByTestAttr(wrapper, 'guessed-words');
        expect(instructions.length).toBe(1);
    });

    test('correct number of guessed words', () => {
        const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsNodes.length).toBe(guessedWords.length);
    })
});