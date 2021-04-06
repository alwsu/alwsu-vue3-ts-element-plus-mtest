import axios from '../http';
const bastApi='/api';

export const getinfo=()=>{
  return axios({
    url: `${bastApi}/fund/getInfo`,
        method: "post",
  })
}

export const queryVideoInfo=(data)=>{
  return axios({
    url: `${bastApi}/fund/queryVideoInfo`,
    method: "post",
    data
  })
}


