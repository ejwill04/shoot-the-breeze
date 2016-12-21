import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import Application from '../lib/components/Application';
import UserList from '../lib/components/UserList';

describe('UserList', () => {
  const messages = [{ id: Date.now(), input: 'this is a message' }];
  const userSearch = {};
  const loggedInUser = { displayName: 'noah' };
  it.skip('renders as a <div>', () => {
    const wrapper = shallow(<UserList
                            messages={messages}
                            userSearch={userSearch}
                            loggedInUser={loggedInUser}
                          />);
    assert.equal(wrapper.type(), 'div');
  });

  it.skip("has a user-list class", () => {
    const wrapper = shallow(<UserList
                            messages={messages}
                            userSearch={userSearch}
                            loggedInUser={loggedInUser}
                          />);
    expect(wrapper.find('.user-list')).to.be.length(1);
  });

  // it("should have props", () => {
  // const wrapper = (<UserList
  //                         messages={messages}
  //                         userSearch={userSearch}
  //                         loggedInUser={loggedInUser}
  //                       />);
  //   expect(wrapper.props('.user-list')[0].user.displayName).to.equal("noah");
  // })
});



  // it('renders current input', () => {
  //   const wrapper = shallow(<RenderMessages
  //                               messages={messages}/>)
  //   assert.equal(wrapper.find('.message-input').text(), messages[0].input);
  //   assert.equal(wrapper.find('.message-displayName').text(), messages[0].userName || '');
  // });
