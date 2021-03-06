// @flow weak
/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { createShallowWithContext } from 'test/utils';
import ListItemSecondaryAction, { styleSheet } from './ListItemSecondaryAction';

describe('<ListItemSecondaryAction>', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallowWithContext();
    classes = shallow.context.styleManager.render(styleSheet);
  });

  it('should render a div', () => {
    const wrapper = shallow(
      <ListItemSecondaryAction />
    );
    assert.strictEqual(wrapper.is('div'), true, 'should be a div');
    assert.strictEqual(wrapper.hasClass(classes.secondaryAction), true, 'should have the secondaryAction class');
  });

  it('should render with the user and secondaryAction classes', () => {
    const wrapper = shallow(<ListItemSecondaryAction className="woof" />);
    assert.strictEqual(wrapper.hasClass('woof'), true, 'should have the "woof" class');
    assert.strictEqual(wrapper.hasClass(classes.secondaryAction), true, 'should have the secondaryAction class');
  });
});
