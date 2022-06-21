import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Popover from 'react-native-popover-view/dist/Popover';
import {PopoverPlacement} from 'react-native-popover-view';
const XPopover = ({from, children, isVisible, onVisible}) => {
  return (
    <Popover
      from={from}
      placement={PopoverPlacement.FLOATING}
      popoverStyle={[styles.popoverShadow, {width: 140, height: 60}]}
      arrowStyle={{height: 0}}
      popoverShift={{x: -0.9, y: -0.77}}
      isVisible={isVisible}
      onRequestClose={onVisible}>
      {children}
    </Popover>
  );
};

export default XPopover;

const styles = StyleSheet.create({});
