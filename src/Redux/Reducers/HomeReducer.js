import {
  UPDATE_HOME_PROPS,
  MERGE_HOME_PROPS,
  DELETE_HOME_PROPS,
  CLEAR_HOME_STATE,
} from "../Actions/types";
import * as general from "./methods";

const INITIAL_STATE = {
  repositoryObj: {
    isLoading: false,
    repositoryArray: [],
    totalItems: 0,
    hasMore: true,
    page: 1,
  },
  queryItem: { order: "desc", sort: "stars", q: "created:>2019-10-22" },
  repo_details: null,
};

const HomeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_HOME_PROPS: {
      return general.updateProps(state, action);
    }
    case MERGE_HOME_PROPS: {
      return general.mergeProps(state, action);
    }
    case DELETE_HOME_PROPS: {
      return general.deleteProps(state, action);
    }
    case CLEAR_HOME_STATE: {
      let newState = state;
      newState = INITIAL_STATE;
      return newState;
    }

    default:
      return state;
  }
};

export default HomeReducer;
