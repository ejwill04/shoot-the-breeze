import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import Application from '../lib/components/Application';
import UserList from '../lib/components/UserList';

describe('UserList', () => {
  const messages = [{ id: Date.now(), input: 'this is a message' }];
  const userSearch = {};
  const loggedInUser = { userName: 'noah', email: 'noahpeden@gmail.com', id: Date.now() };
  it('renders as a <div>', () => {
    const wrapper = shallow(<UserList
                            messages={[]}
                          />);
    assert.equal(wrapper.type(), 'div');
  });

  it("has a user-list class", () => {
    const wrapper = shallow(<UserList
                            messages={[]}
                          />);
    expect(wrapper.find('.user-list')).to.be.length(1);
  });
});
