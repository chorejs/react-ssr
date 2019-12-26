import axios from 'axios';
import { CHANGE_LIST } from './constant';

const changeList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = () => {
  return (dispatch) => {
    return Promise.resolve({data: {data: [1,2,3]}})
      .then(res => {
        const list = res.data.data;
        dispatch(changeList(list));
      })
  }
}