// import React from 'react';
//
// import { shallow, mount, render } from 'enzyme';
// import { assert } from 'chai';
// import moment from 'moment';
//
// import Application from '../lib/components/Application';
// import {RenderMessages} from '../lib/components/RenderMessages';
//
// describe('RenderMessages', () => {
//   let messages = [{id: Date.now(), input: 'this is a message' }];
//   let user = {displayName: 'noah'};
//   it('renders three <p> elements', () => {
//     const wrapper = shallow(<RenderMessages
//                                 messages={messages}
//                                 user={user}/>)
//     assert.equal(wrapper.find('p').length, 3);
//   });
//
//   it('renders current input', () => {
//     const wrapper = shallow(<RenderMessages
//                                 messages={messages}/>)
//     assert.equal(wrapper.find('.message-input').text(), messages[0].input);
//     assert.equal(wrapper.find('.message-displayName').text(), messages[0].userName || '');
//   });
//
//
// });
