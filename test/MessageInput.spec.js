import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import moment from 'moment';
const sinon = require('sinon');

import MessageInput from '../lib/components/MessageInput';

describe('Application', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<MessageInput />)
    assert.equal(wrapper.type(), 'div');
  });

  it('should change the state the messages being drafted', () => {
    const wrapper = mount(<MessageInput />);
    const input = wrapper.find('.messageInputBar');
    console.log(wrapper.debug(input))
    input.simulate('change', {target: {value: 'hello world'}});

    expect(wrapper.state('input')).to.equal('hello world');
  });

  // it('renders a message on the page on click of submit button',() =>{
  //   const wrapper = mount(<Application />);
  //   const input = wrapper.find('#message-input');
  //   const submit = wrapper.find('.submit-btn');
  //
  //   input.simulate('change', {target: {value: 'hello world'}});
  //   submit.simulate('click');
  //   setTimeout(() => {
  //     expect(wrapper.text()).to.equal('hello world');
  //   }, 1000);
  // });
  //
  // it('should clear the input field is clear is clicked', () => {
  //   const wrapper = mount(<Application />);
  //   const input = wrapper.find('#message-input');
  //   const clear = wrapper.find('.clear-btn');
  //
  //   input.simulate('change', {target: {value: 'hello world'}});
  //   expect(wrapper.state('draftMessage')).to.equal('hello world');
  //
  //   clear.simulate('click');
  //   expect(wrapper.state('draftMessage')).to.equal('');
  // });
  //
  // it('should count the characters in the input field', () => {
  //   const wrapper = mount(<Application />);
  //   const input = wrapper.find('#message-input');
  //   const characterCount = wrapper.find('.character-count');
  //
  //   input.simulate('change', {target: {value: 'h'}});
  //   expect(characterCount.text()).to.equal('139');
  // });
  //
  // it('renders message to page with the correct date and time', () =>{
  //   const wrapper = mount(<Application />);
  //   const input = wrapper.find('#message-input');
  //   const submit = wrapper.find('.submit-btn');
  //   const createdAt = moment().format('MMMM Do, h:mm a');
  //
  //   input.simulate('change', {target: {value: 'hello world'}});
  //   submit.simulate('click');
  //
  //   setTimeout(() => {
  //     expect(wrapper.text()).to.equal('createdAt');
  //   }, 1000);
  // });
  //
  // it('should post messages with the username', () => {
  //   const wrapper = mount(<Application />);
  //   const input = wrapper.find('#message-input');
  //   const username = wrapper.find('.username');
  //   const submit = wrapper.find('.submit-btn');
  //
  //   input.simulate('change', {target: {value: 'hello world'}});
  //   submit.simulate('click');
  //
  //   setTimeout(() => {
  //     expect(wrapper.text()).to.equal('username');
  //   });
  // });
});
