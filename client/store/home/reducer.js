import { CHANGE_LIST } from './constant';

const defaultState = {
  name: 'test',
  list: []
};

export default (state = defaultState, action) => {
  // 由于这种操作修改oldState的值，并且返回的事旧数据的地址，令react-redux在比较新旧数据时比较一致，不会更新组件
  // return Object.assign(state, action.list ? {
  //   list: action.list
  // } : {});

  return {
    ...state,
    list: action.list || []
  };
};