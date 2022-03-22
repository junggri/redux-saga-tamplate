import {createAction, handleActions} from 'redux-actions';

import reducerMap from "../core/reducerMap";
import produce from "immer";
import {fetcher} from "../core/fetcher";


enum TestAction {
  GET_TEST = '@test/test'
}

interface InitialState {
  data: null
  error: null | Error
  loading: boolean
}

const initialState: InitialState = {
  data: null,
  error: null,
  loading: false
}

export const PlaceActions = {
  getPlace: createAction(TestAction.GET_TEST, () => {
    return fetcher.fetch().query("");
  })
}

export const test = handleActions({
  ...reducerMap(TestAction.GET_TEST, {
    onRequest: (state, action) => {
      return produce(state, draft => {
      })
    },
    onSuccess: (state, action) => {
      return produce(state, draft => {
      })
    },
    onFailure: (state, action) => {
      return produce(state, draft => {
      })
    }
  })
}, initialState)
