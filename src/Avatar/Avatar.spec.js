/* eslint-env mocha */
import React from 'react';
import { assert } from 'chai';
import Avatar, { styleSheet } from './Avatar';
import { createShallowWithContext } from 'test/utils';

describe('<Avatar>', () => {
	let shallow;
  	let classes;

  	const testChildren = <div className="unique">Hello World</div>;

  	before(() => {
	    shallow = createShallowWithContext();
	    classes = shallow.context.styleManager.render(styleSheet, { group: 'mui' });
  	});
  	
  it('renders children by default', () => {
    const wrapper = shallowWithContext(
      <Avatar>{testChildren}</Avatar>
    );

    assert.ok(wrapper.contains(testChildren), 'should contain the children');
  });

  it('renders children and an icon if passed in', () => {
    const icon = <div className="testIcon" />;
    const wrapper = shallowWithContext(
      <Avatar icon={icon}>{testChildren}</Avatar>
    );

    assert.ok(wrapper.contains(testChildren), 'should contain the children');
    // Finding by class as avatar clones element and changes the props
    assert.ok(wrapper.find('.testIcon').length, 'should contain the icon');
  });

  it('only renders an image when the src prop is set', () => {
    const wrapper = shallowWithContext(
      <Avatar src="face.jpg">{testChildren}</Avatar>
    );

    assert.notOk(!wrapper.contains(testChildren), 'should not contain the children');
    assert.ok(wrapper.is('div'), 'should be a div');
    assert.ok(wrapper.is({style: {background: 'url(face.jpg)'}}), 'should set background url');

    wrapper.setProps({src: 'meow.jpg'});
    assert.ok(wrapper.is({style: {background: 'url(meow.jpg)'}}), 'should have changed the background url');
  });
});