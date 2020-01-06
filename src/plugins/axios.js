"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//表单格式
axios.defaults.headers.post['Content-Type'] = 'application/json';//json格式
// axios.defaults.headers.post['mer-auth'] = 'eyJleHBpcmVzIjoxNTc0OTEyMjI3LCJyb2xlX2lkIjo2Nywic2lnbiI6ImY4ZjFlNzBmOGNkYjIwN2ExMDVmZWM3YWZlNDdhMjQ3ZGE0YmU2NjViMDg4MmVkYmJmMjA0Y2NmZDE3NzI4YTUiLCJ1c2VyX2lkIjo1fQ==';

let config = {
  // baseURL: '/qq',
  baseURL: process.env.NODE_ENV === 'production' ? 'https://www.reminisce.cn/myLearn/api': '/qq', // api 的 base_url
  timeout: 5000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
