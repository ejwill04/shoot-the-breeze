import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import {Login} from '../lib/components/Login';

describe('Login', () => {
  const obj = { user: { displayName: 'noah' }, setUser: 'set', text: 'text', authorizer: 'authorize' }
  const wrapper = shallow(<Login
    user={obj.user}
    setUser={obj.setUser}
    text={obj.text}
    authorize={obj.authorize}/>)

  it('returns a div with className of loggedInAs if given a user', () => {
    assert.equal(wrapper.find('.loggedInAs').length, 1);
  });

  it('returns a span with className of usersName if given a user', () => {
    assert.equal(wrapper.find('.usersName').length, 1);
  });

  it('renders the users email if given a user', () => {
    assert.equal(wrapper.find('.usersName').text(), 'noah' );
  });

});
