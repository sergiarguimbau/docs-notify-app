import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import MainView from './MainView';
import { MainState, fetchDocumentsData, addDocument } from './MainState';
import { DocumentInfoType } from '../../data/types';

export default compose(
  connect(
    (state: {main: MainState}) => ({
      documentsData: state.main.documentsData,
    }),
    (dispatch: ThunkDispatch<MainState, void, Action>) => ({
      fetchDocumentsData: () => dispatch(fetchDocumentsData()),
      addDocument: (documentInfo: DocumentInfoType) => dispatch(addDocument(documentInfo)),
    }),
  ),
)(MainView);
