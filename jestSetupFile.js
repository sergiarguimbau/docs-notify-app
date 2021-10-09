// Integrate AsyncStorage with Jest
// @see https://react-native-async-storage.github.io/async-storage/docs/advanced/jest/
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// Ignore Redux persist while testing
// @see https://github.com/rt2zz/redux-persist/issues/1243 
jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});
