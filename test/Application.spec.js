import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import Application from '../lib/components/Application';
import {RenderMessages} from '../lib/components/RenderMessages';

describe('Application', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'div');
  });

});

describe('RenderMessages', () => {
  let messages = [{id: Date.now(), input: 'this is a message' }];
  let user = {displayName: 'noah'};
  it('renders three <p> elements', () => {
    const wrapper = shallow(<RenderMessages
                                messages={messages}
                                user={user}/>)
    assert.equal(wrapper.find('p').length, 3);
  })

  it('renders current input', () => {
    const wrapper = shallow(<RenderMessages
                                messages={messages}
                                user={user}/>)
    assert.equal(wrapper.find('.message-input').text(), messages[0].input);
  })
})
