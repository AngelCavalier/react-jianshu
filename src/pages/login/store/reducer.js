import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  login: false,
});

export default (state = defaultState, action) => {
  // immutable 对象的set方法。会结合之前immutable对象的值
  // 和设置的值，返回一个全新的对象
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('login', action.value);
    case actionTypes.LOGOUT:
      return state.set('login', action.value);
    default:
      return state;
  }
};
