# docs-notify-app

## Description

React Native project for iOS and Android

## Setup project

#### 1. Clone and Install

```bash
# Install dependencies
yarn install

# Install native iOS modules
cd ios && pod install
```

#### 2. Run project

Start development server:
```
yarn start
```

Run app on iOS simulator:
```
yarn run:ios
```

Or, if you prefer Android:
```
yarn run:android
```

Connect localhost from Android device:
```
adb reverse tcp:8080 tcp:8080
```

#### 3. Test project

Run test suite once:
```
yarn test
```

Run test suite continually:
```
yarn test:watch
```


Get test coverage results:
```
yarn test:coverage
```


Enjoy!
