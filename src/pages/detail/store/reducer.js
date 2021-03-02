import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  title: '',
  content: '',
});

export default (state = defaultState, action) => {
  // immutable 对象的set方法。会结合之前immutable对象的值
  // 和设置的值，返回一个全新的对象
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content,
      });
    default:
      return state;
  }
};
