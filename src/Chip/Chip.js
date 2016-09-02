// next branch version Chip.js

import React, { Component, PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import classNames from 'classnames';
import Button from '../Button';
import keycode from 'keycode';
import {fade, emphasize} from '../utils/colorManipulator';
import DeleteIcon from '../svg-icons/navigation/cancel';

export const styleSheet = createStyleSheet('Chip', () => { //31-08-2016

	const backgroundColor = 'rgb(224, 224, 224)';
	const focusColor = emphasize(backgroundColor, 0.08);
	const pressedColor = emphasize(backgroundColor, 0.12);

	return {
	    avatar: {
		    marginRight: '-4px',
	    },
	    deleteIcon: {
		    color: fade("rgba(0,0,0,0.26)", 0.4),
		    cursor: 'pointer',
		    margin: '4px 4px 0px -8px',
	    },
	    label: {
		    color: "rgba(0,0,0,0.87)",
		    fontSize: '14px',
		    fontWeight: 4,
		    lineHeight: '32px',
		    paddingLeft: '12px',
		    paddingRight: '12px',
		    userSelect: 'none',
		    whiteSpace: 'nowrap',
	    },
	    root: {
		    backgroundColor: pressedColor,
		    borderRadius: '16px',
		    boxShadow: "0px 1px 6px rgba(0,0,0,0.12), 0px 1px 4px rgba(0,0,0,0.12)",
		    cursor: 'pointer',
		    display: 'flex',
		    whiteSpace: 'nowrap',
		    width: 'fit-content',
	    },
  	};
});

export default class Chip extends Component { //30-08-2016
  static propTypes = {
    /**
     * Override the background color of the chip.
     */
    backgroundColor: PropTypes.string,
    /**
     * Used to render elements inside the Chip.
     */
    children: PropTypes.node,
    /**
     * CSS `className` of the root element.
     */
    className: PropTypes.node,
    /**
     * Override the label color.
     */
    labelColor: PropTypes.string,
    /**
     * Override the inline-styles of the label.
     */
    labelStyle: PropTypes.object,
    /** @ignore */
    onBlur: PropTypes.func,
    /** @ignore */
    onFocus: PropTypes.func,
    /** @ignore */
    onKeyDown: PropTypes.func,
    /** @ignore */
    //onKeyboardFocus: PropTypes.func, //30-08-2016
    /** @ignore */
    onMouseDown: PropTypes.func,
    /** @ignore */
    onMouseEnter: PropTypes.func,
    /** @ignore */
    onMouseLeave: PropTypes.func,
    /** @ignore */
    onMouseUp: PropTypes.func,
    /**
     * Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
     * @param {object} event `touchTap` event targeting the element.
     */
    onRequestDelete: PropTypes.func, //30-08-2016
    /** @ignore */
    onTouchEnd: PropTypes.func,
    /** @ignore */
    onTouchStart: PropTypes.func,
    /**
     * Callback function fired when the `Chip` element is touch-tapped.
     *
     * @param {object} event TouchTap event targeting the element.
     */
    onClick: PropTypes.func,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

  static defaultProps = {
    onBlur: () => {},
    onFocus: () => {},
    onKeyDown: () => {},
    onKeyboardFocus: () => {},
    onMouseDown: () => {},
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    onMouseUp: () => {},
    onTouchEnd: () => {},
    onTouchStart: () => {},
  };

  state = {
    clicked: false,
    deleteHovered: false,
    focused: false,
    hovered: false,
  };

  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };


  handleBlur = (event) => {
    this.setState({clicked: false, focused: false});
    this.props.onBlur(event);
  };

  handleFocus = (event) => {
    if (this.props.onClick || this.props.onRequestDelete) {
      this.setState({focused: true});
    }
    this.props.onFocus(event);
  };

  handleKeyDown = (event) => {
    if (keycode(event) === 'backspace') {
      event.preventDefault(); 
      if (this.props.onRequestDelete) { //30-08-2016
        this.props.onRequestDelete(event);
      }
    }
    this.props.onKeyDown(event);
  };

  handleMouseDown = (event) => {
    // Only listen to left clicks
    if (event.button === 0) {
      event.stopPropagation();
      if (this.props.onClick) {
	this.props.onClick();
        this.setState({clicked: true});
      }
    }
    this.props.onMouseDown(event);
  };

  handleMouseEnter = (event) => {
    if (this.props.onClick) {
      this.setState({hovered: true});
    }
    this.props.onMouseEnter(event);
  };

  handleMouseEnterDeleteIcon = () => {
    this.setState({deleteHovered: true});
  };

  handleMouseLeave = (event) => {
    this.setState({
      clicked: false,
      hovered: false,
    });
    this.props.onMouseLeave(event);
  };

  handleMouseLeaveDeleteIcon = () => {
    this.setState({deleteHovered: false});
  };

  handleMouseUp = (event) => {
    this.setState({clicked: false});
    this.props.onMouseUp(event);
  };

  handleTouchTapDeleteIcon = (event) => {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();
    this.props.onRequestDelete(event); //30-08-2016
  };

  handleTouchEnd = (event) => {
    this.setState({clicked: false});
    this.props.onTouchEnd(event);
  };

  handleTouchStart = (event) => {
    event.stopPropagation();
    if (this.props.onClick) {
      this.setState({clicked: true});
    }
    this.props.onTouchStart(event);
  };

  render() {

    const buttonEventHandlers = { 
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onKeyDown: this.handleKeyDown,
      onMouseDown: this.handleMouseDown,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onMouseUp: this.handleMouseUp,
      onTouchEnd: this.handleTouchEnd,
      onTouchStart: this.handleTouchStart,
      //onKeyboardFocus: this.handleKeyboardFocus,
    };

    

    //const {prepareStyles} = this.context.styleManager;
    const classes = this.context.styleManager.render(styleSheet); //New change

    let {children, style, className, labelStyle, ...other} = this.props; //31-08-2016

    const deletable = this.props.onRequestDelete;
    let avatar = null;
    console.log(classes, "******************************");
    /*if(className == undefined){
	className = className(classes.root, className);
    }*/
    //console.log(style, "*******************************************");
    //style = Object.assign({}, style);
    //console.log(style);
    labelStyle = this.context.styleManager.prepareInline(Object.assign(classes.label, labelStyle)); //************************
/* 30-08-2016
    const className = classNames(styles.root, {
      [styles.clicked]: disabled,
      [styles.deleteHovered]: checked,
      [styles.focused]: checked,
      [styles.hovered]: checked,
    }, classNameProp);
*/  
    const deleteIcon = deletable ?
      <DeleteIcon
        color={classes.deleteIcon.color}
        className={classes.deleteIcon}
        onClick={this.handleTouchTapDeleteIcon}
        onMouseEnter={this.handleMouseEnterDeleteIcon}
        onMouseLeave={this.handleMouseLeaveDeleteIcon}
      /> :
      null;

    const childCount = React.Children.count(children);

    // If the first child is an avatar, extract it and style it
    if (childCount > 1) {
      children = React.Children.toArray(children);
      console.log(children[0]);
      if (React.isValidElement(children[0]) && children[0].type.name === 'Avatar') {
        avatar = children.shift();
        avatar = React.cloneElement(avatar, {
          className: classes.avatar,
          size: 32,
        });
      }
    }

    return (
      <Button
        {...other}
        {...buttonEventHandlers}
        className={classes.root}
        ripple={false}
        focusRipple={false}
        style={style}
      >
        {avatar}
        <span className={classes.label}>{children}</span>
        {deleteIcon}
      </Button>
    );
  }
}

//export default Chip;
