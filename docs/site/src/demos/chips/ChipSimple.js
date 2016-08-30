// @flow weak

import Avatar from 'material-ui/Avatar';
import React, { PropTypes, Component } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import Chip from 'material-ui/Chip';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';

const styleSheet = createStyleSheet('ChipSimple', () => ({
	  chip: {
	    margin: 4,
	  },
	  wrapper: {
	    display: 'flex',
	    flexWrap: 'wrap',
	  },
}));
 
function handleRequestDelete() {
  alert('You clicked the delete button.');
}

function handleTouchTap() {
  alert('You clicked the Chip.');
}

/**
 * Examples of Chips, using an image [Avatar](/#/components/font-icon), [Font Icon](/#/components/font-icon) Avatar,
 * [SVG Icon](/#/components/svg-icon) Avatar, "Letter" (string) Avatar, and with custom colors.
 *
 * Chips with the `onRequestDelete` property defined will display a delete icon.
 */
export default function ChipSimple(props, context) {
    const styles = context.styleManager.render(styleSheet);
    //console.log(styles);
    return (
      <div className={styles.wrapper}>

        <Chip
          className={styles.chip}
        >
          Text Chip
        </Chip>

        <Chip
          className={styles.chip}
        >
          Deletable Text Chip
        </Chip>

        <Chip
          className={styles.chip}
        >
          <Avatar src="images/uxceo-128.jpg" />
          Image Avatar Chip
        </Chip>

        <Chip
          className={styles.chip}
        >
          <Avatar src="images/ok-128.jpg" />
          Deletable Avatar Chip
        </Chip>

        <Chip
          className={styles.chip}
        >
          SvgIcon Avatar Chip
        </Chip>

        <Chip className={styles.chip}>
          <Avatar size={32}>A</Avatar>
          Text Avatar Chip
        </Chip>

        <Chip
          className={styles.chip}
        >
          <Avatar size={32} color={blue300} >
            MB
          </Avatar>
          Colored Chip
        </Chip>
      </div>
    );
}

ChipSimple.contextTypes = {
    styleManager: PropTypes.object.isRequired,
};
