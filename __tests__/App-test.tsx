import 'react-native';
import React from 'react';
import App from '../App';
import MainView from '../src/modules/main/MainView';
import { Toolbar } from '../src/components';

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