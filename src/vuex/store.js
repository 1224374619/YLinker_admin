import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
    count: 10,
    token: window.sessionStorage.getItem('token'),
}

// 定义所需的 mutations
const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    },
    SET_TOKEN: (state, data) => {
        state.token = data
        window.sessionStorage.setItem('token', data)
    },
    //登出
    LOGOUT: (state) => {
        // 登出的时候要清除token
        window.sessionStorage.removeItem('token')
        window.sessionStorage.removeItem('user')
      }
}

// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})