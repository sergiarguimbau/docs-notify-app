import { compose } from 'recompose';
import { connect } from 'react-redux';

import MainView from './MainView';
import { MainState, incrementAppCounter } from './MainState'

export default compose(
  connect(
    (state: {main: MainState}) => ({
      appCounter: state.main.appCounter,
      documentsData: state.main.documentsData,
    }),
    dispatch => ({
      incrementAppCounter: () => dispatch(incrementAppCounter()),
    }),
  ),
)(MainView);
