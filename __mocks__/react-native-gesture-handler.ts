import React from 'react';
import { View } from 'react-native';

const makePanGesture = () => {
  const gesture = {
    onUpdate: () => gesture,
    onEnd: () => gesture,
    onStart: () => gesture,
    onBegin: () => gesture,
    onFinalize: () => gesture,
    enabled: () => gesture,
    minDistance: () => gesture,
    activeOffsetX: () => gesture,
    activeOffsetY: () => gesture,
  };
  return gesture;
};

const Gesture = {
  Pan: makePanGesture,
};

const GestureDetector = ({ children }: { children: React.ReactNode }) =>
  React.createElement(View, null, children);

module.exports = {
  Gesture,
  GestureDetector,
};
