import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const useSharedValue = (init: unknown) => ({ value: init });
const useAnimatedStyle = (fn: () => object) => fn();
const withTiming = (value: unknown) => value;
const withSpring = (value: unknown) => value;
const interpolate = (_value: unknown, _input: unknown, output: number[]) =>
  output[0];
const interpolateColor = (_value: unknown, _range: unknown, colors: string[]) =>
  colors[0];
const runOnJS = (fn: (...args: unknown[]) => unknown) => fn;
const runOnUI = (fn: (...args: unknown[]) => unknown) => fn;
const useAnimatedRef = () => ({ current: null });
const useAnimatedScrollHandler = () => () => {};
const useAnimatedGestureHandler = () => () => {};
const useAnimatedProps = (fn: () => object) => fn();
const useDerivedValue = (fn: () => unknown) => ({ value: fn() });
const useAnimatedReaction = () => {};
const createAnimatedComponent = (component: React.ComponentType) => component;
const FadeIn = { duration: () => FadeIn };
const FadeOut = { duration: () => FadeOut };
const FadeOutRight = { duration: () => FadeOutRight };
const LinearTransition = {};

const Animated = {
  View,
  Text,
  Image,
  ScrollView,
  createAnimatedComponent,
};

module.exports = {
  default: Animated,
  ...Animated,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedProps,
  useDerivedValue,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedGestureHandler,
  withTiming,
  withSpring,
  interpolate,
  interpolateColor,
  runOnJS,
  runOnUI,
  createAnimatedComponent,
  FadeIn,
  FadeOut,
  FadeOutRight,
  LinearTransition,
};
