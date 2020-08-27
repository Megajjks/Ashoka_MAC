import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.getCommitment:
      return {
        ...state,
        commitmentLoading: true,
        commitmentError: null,
      };
    case actions.getCommitmentSuccess:
      return {
        ...state,
        commitmentLoading: false,
        commitmentError: null,
        commitment: action.payload,
      };
    case actions.getCommitmentError:
      return {
        ...state,
        commitmentLoading: false,
        commitmentError: action.payload,
        commitment: [],
      };
    case actions.getCollaboratorsList:
      return {
        ...state,
        loadingColaborators: true,
        errorColaborators: null,
      };
    case actions.getCollaboratorsListSuccess:
      return {
        ...state,
        loadingColaborators: false,
        errorColaborators: null,
        listColaborators: action.payload,
      };
    case actions.getCollaboratorsListError:
      return {
        ...state,
        loadingColaborators: false,
        errorColaborators: action.payload,
        listColaborators: [],
      };
    case actions.setColaborator:
      return {
        ...state,
        likelyCollaborator: action.payload,
      };
    case actions.saveColaborators:
      return {
        ...state,
        loadinglikelyCollaborator: false,
        errorlikelyCollaborator: null,
        reload: action.payload,
        likelyCollaborator: [],
        wrapperAddCollaborator: false,
      };
    case actions.errorColaborators:
      return {
        ...state,
        loadinglikelyCollaborator: false,
        errorlikelyCollaborator: action.payload,
        likelyCollaborator: [],
        wrapperAddCollaborator: false,
      };
    case actions.updateStatusCommitment:
      return {
        ...state,
        updateStatus: true,
        errorUpdateStatus: null,
      };
    case actions.updateStatusCommitmentSuccess:
      return {
        ...state,
        updateStatus: false,
        dropdownStatus: null,
        reload: action.payload,
      };
    case actions.updateStatusCommitmentError:
      return {
        ...state,
        updateStatus: false,
        dropdownStatus: null,
        errorUpdateStatus: action.payload,
      };
    case actions.dropDownStatusOpen:
      return {
        ...state,
        dropdownStatus: action.payload,
      };
    case actions.dropDownStatusClose:
      return {
        ...state,
        dropdownStatus: null,
      };
    case actions.wrapperAddCollaboratorOnOff:
      return {
        ...state,
        wrapperAddCollaborator: action.payload,
      };
    default:
      return state;
  }
};
