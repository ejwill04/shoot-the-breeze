import React from 'react';
import sinon from 'sinon';

import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import {Login} from '../lib/components/Login';

describe('Login', () => {
  const obj = {
    user: { displayName: 'noah' },
    setUser: 'set',
    text: 'text',
    authorizer: 'authorize' };

  const wrapper = shallow(<Login
    user={obj.user}
    setUser={obj.setUser}
    text={obj.text}
    authorize={obj.authorize}/>);

  it('returns a div with className of loggedInAs if given a user', () => {
    assert.equal(wrapper.find('.loggedInAs').length, 1);
  });

  it('returns a span with className of usersName if given a user', () => {
    assert.equal(wrapper.find('.usersName').length, 1);
  });

  it('renders the users email if given a user', () => {
    assert.equal(wrapper.find('.usersName').text(), ' noah ');
  });

  it('should not have className of loggedInAs if no user', () => {
    const wrapper = shallow(<Login
      setUser={obj.setUser}
      text={obj.text}
      authorize={obj.authorize}/>);
    assert.equal(wrapper.find('.loggedInAs').length, 0);
  });

  it('should have className of logInBar if no user', () => {
    const wrapper = shallow(<Login
      setUser={obj.setUser}
      text={obj.text}
      authorize={obj.authorize}/>);
    assert.equal(wrapper.find('.logInBar').length, 1);
  });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(
  //     <Login onButtonClick={onButtonClick} />
  //   );
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });

});
