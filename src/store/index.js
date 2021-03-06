/**
 * 数据仓库
 * Created by liweiliang 406320591@QQ.com on 2019/5/13 0013 17:04.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import counter from './counter'

Vue.use(Vuex);
export default new Vuex.Store({
  modules:{
    counter,
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => wx.getStorageSync(key),
        setItem: (key, value) => wx.setStorageSync(key, value),
        removeItem: key => {}
      }
    })
  ]
})
