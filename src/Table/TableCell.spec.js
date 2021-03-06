// @flow weak
/* eslint-env mocha */

import React from 'react';
import { assert } from 'chai';
import { createShallowWithContext } from 'test/utils';
import TableCell, { styleSheet } from './TableCell';

describe('<TableCell>', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallowWithContext();
    classes = shallow.context.styleManager.render(styleSheet);
  });

  it('should render a td', () => {
    const wrapper = shallow(<TableCell />);
    assert.strictEqual(wrapper.is('td'), true, 'should be a td');
  });

  it('should spread custom props on the root node', () => {
    const wrapper = shallow(<TableCell data-my-prop="woof" />);
    assert.strictEqual(wrapper.prop('data-my-prop'), 'woof', 'custom prop should be woof');
  });

  it('should render with the user and root classes', () => {
    const wrapper = shallow(<TableCell className="woof" />);
    assert.strictEqual(wrapper.hasClass('woof'), true, 'should have the "woof" class');
    assert.strictEqual(wrapper.hasClass(classes.root), true, 'should have the root class');
  });

  it('should render children', () => {
    const children = <p className="test">Hello</p>;
    const wrapper = shallow(<TableCell>{children}</TableCell>);
    assert.strictEqual(wrapper.childAt(0).equals(children), true);
  });

  it('should render a th with the head class when in the context of a table head', () => {
    const wrapper = shallow(
      <TableCell />
    );
    wrapper.setContext({ ...wrapper.options.context, table: { head: true } });
    assert.strictEqual(wrapper.is('th'), true, 'should be a th');
    assert.strictEqual(wrapper.hasClass(classes.root), true, 'should have the root class');
    assert.strictEqual(wrapper.hasClass(classes.head), true, 'should have the head class');
  });

  it('should render with the footer class when in the context of a table footer', () => {
    const wrapper = shallow(
      <TableCell />
    );
    wrapper.setContext({ ...wrapper.options.context, table: { footer: true } });
    assert.strictEqual(wrapper.hasClass(classes.root), true, 'should have the root class');
    assert.strictEqual(wrapper.hasClass(classes.footer), true, 'should have the footer class');
  });

  it('should render with the numeric class', () => {
    const wrapper = shallow(
      <TableCell numeric />
    );
    assert.strictEqual(wrapper.hasClass(classes.root), true, 'should have the root class');
    assert.strictEqual(wrapper.hasClass(classes.numeric), true, 'should have the numeric class');
  });
});
