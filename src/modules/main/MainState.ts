import { AnyAction, Dispatch } from 'redux';
import { DocumentType, DocumentInfoType } from '../../data/types';
import { initialDocumentsData } from '../../data/initialData';
import { backendServer } from '../../data/global';

// Initial state
export type MainState = {
  readonly documentsData: DocumentType[];
};

const initialState: MainState = {
  documentsData: initialDocumentsData,
};

// Actions
const FETCH_DOCUMENTS_DATA_START = 'MainState/FETCH_DOCUMENTS_DATA_START';
const FETCH_DOCUMENTS_DATA_SUCCESS = 'MainState/FETCH_DOCUMENTS_DATA_SUCCESS';
const FETCH_DOCUMENTS_DATA_FAILED = 'MainState/FETCH_DOCUMENTS_DATA_FAILED';
const NEW_DOCUMENT_ADDED = 'MainState/NEW_DOCUMENT_ADDED';

// Action creators
export function fetchDocumentsDataStart(): AnyAction {
  return {
    type: FETCH_DOCUMENTS_DATA_START,
  };
}

export function fetchDocumentsDataSuccess(documentsData: DocumentType[]): AnyAction {
  return {
    type: FETCH_DOCUMENTS_DATA_SUCCESS,
    payload: { documentsData },
  };
}

export function fetchDocumentsDataFailed(): AnyAction {
  return {
    type: FETCH_DOCUMENTS_DATA_FAILED,
  };
}

export function newDocumentAdded(document: DocumentType): AnyAction {
  return {
    type: NEW_DOCUMENT_ADDED,
    payload: { document },
  };
}

// Dispatch functions
export function fetchDocumentsData() {
  return async (dispatch: Dispatch) => {

    dispatch(fetchDocumentsDataStart());

    // Make a call to Documents API
    const jsonResponse = await getResponseDocumentsAPI();

    if (jsonResponse) {
      dispatch(fetchDocumentsDataSuccess(jsonResponse));
    } else {
      dispatch(fetchDocumentsDataFailed());
    }
  }
}

export function addDocument(documentInfo: DocumentInfoType) {
  return (dispatch: Dispatch) => {
    // Info is separated by commas
    const attachments = documentInfo.documentAttachments.split(',').map(s => s.trim());
    const contributors = documentInfo.documentContributors.split(',').map(s => {
      return {ID: generateID(), Name: s.trim()};
    });
    const currentDate = new Date().toISOString();
    
    // Create document
    const document: DocumentType = {
      ID: generateID(),
      Title: documentInfo.documentTitle,
      Version: documentInfo.documentVersion,
      Attachments: attachments,
      Contributors: contributors,
      CreatedAt: currentDate,
      UpdatedAt: currentDate,
    }

    dispatch(newDocumentAdded(document));
  }
}

// Helper functions
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const getResponseDocumentsAPI = async () => {
  try {
    // Insecure HTTP server running on local dev machine
    // Android -> @see https://reactnative.dev/docs/integration-with-existing-apps#cleartext-traffic-api-level-28
    // iOS -> @see https://reactnative.dev/docs/integration-with-existing-apps#1-add-app-transport-security-exception
    await delay(randomNumber(200, 2000)); // Simulate network delay
    const response = await fetch(`http://${backendServer}/documents`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.warn(error);
  }
};

const generateID = (): string => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'; // alphanumeric characters
  const blocks = [8, 4, 4, 4, 12]; // separated by dashes
  let autoId = '';
  blocks.forEach((block, index) => {
    for (let i = 0; i < block; i++) {
      autoId += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    if (index < blocks.length - 1) autoId += '-';
  });
  return autoId;
}


// Reducer
export default function MainReducer(state: MainState = initialState, action: AnyAction) {
  switch (action.type) {
    case FETCH_DOCUMENTS_DATA_SUCCESS:
      return Object.assign({}, state, {
        documentsData: action.payload.documentsData,
      });
    case NEW_DOCUMENT_ADDED:
      return Object.assign({}, state, {
        documentsData: [action.payload.document, ...state.documentsData],
      });
    default:
      return state;
  }
}