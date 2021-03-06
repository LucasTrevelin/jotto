import React from 'react';
import {shallow} from 'enzyme';

import Congrats from './Congrats';
import {findByTestAttr, checkProps} from '../test/testUtils.js'




const defaultProps = {success: false};

/** 
 * FActory function to create a ShallowWraper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowRapper}
*/

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setupProps}/>)
};

test('renders without error', () => {
const wrapper = setup({success: false});
const component = findByTestAttr(wrapper, 'component-congrats');
expect(component.length).toBe(1);
});

test('renders no text when `success` props is false', () => {
const wrapper = setup({succes: false});
const component = findByTestAttr(wrapper, 'component-congrats');
expect(component.text()).toBe('');
});

test('renders no empty congrats message when `success` props is true ', () => {
    const wrapper = setup({success: true});
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
})

test('does not throw warning with expected props', () => {
    const expectedrProps = {success: false};
    checkProps(Congrats, expectedrProps);
})

