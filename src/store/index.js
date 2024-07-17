import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters.js'

Vue.use(Vuex)

/** 状态定义 */
export const state = {
  loading: false,
  themeObj: {
    theme: 'default',
    themeColor: '#3eaf7c',
    autograph:"用代码表达言语的魅力，用代码书写山河的壮丽。"
  },//主题
  keywords:'',//关键词
  errorImg: 'this.onerror=null;this.src="' + require('../../static/img/tou.jpg') + '"',
  baseURL:'https://lovewx.cc/front',
  // baseURL:'http://127.0.0.1:8083/'
  //  baseURL:'http://1.92.101.29:8082/'
  // baseUrl:'http://127.0.0.1:7777/'
}

export default new Vuex.Store({
    state,
})
