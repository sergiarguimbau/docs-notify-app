import 'react-native';
import React from 'react';
import App from '../App';
import MainView from '../src/modules/main/MainView';
import { Toolbar, Card, TextList, FooterButton } from '../src/components';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('App renders correctly', () => {
  renderer.create(<App />);
});

it('MainView renders correctly', () => {
  renderer.create(<MainView />);
});

it('Toolbar component renders correctly', () => {
  renderer.create(<Toolbar title={'Test'}/>);
});

it('Card component renders correctly', () => {
  renderer.create(<Card />);
});

it('TextList component renders correctly', () => {
  renderer.create(<TextList />);
});

it('FooterButton component renders correctly', () => {
  renderer.create(<FooterButton title={'Test'}/>);
});