import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import MainView from './MainView';
import { MainState, incrementAppCounter, fetchDocumentsData } from './MainState';

export default compose(
  connect(
    (state: {main: MainState}) => ({
      appCounter: state.main.appCounter,
      documentsData: state.main.documentsData,
    }),
    (dispatch: ThunkDispatch<MainState, void, Action>) => ({
      incrementAppCounter: () => dispatch(incrementAppCounter()),
      fetchDocumentsData: () => dispatch(fetchDocumentsData()),
    }),
  ),
)(MainView);
