import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth'
import router from '../router/index.js'
import axiosRefresh from '../axios-refresh'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null
  },
  getters: {
    idToken: state => state.idToken
  },
  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken
    }
  },
  actions: {
    autoLogin({ commit, dispatch }) {
      const idToken = localStorage.getItem('idToken');
      if (!idToken) return;
      const expiryTimeMs = localStorage.getItem('expiryTimeMs')
      const now = new Date();
      const isExpired = now.getTime() >= expiryTimeMs;
      const refreshToken = localStorage.getItem('refreshToken');
      if (isExpired) {
        dispatch('refreshIdToken', refreshToken);
      } else {
        const expiresInMs = expiryTimeMs - now.getTime();
        setTimeout(() => {
          dispatch('refreshIdToken', refreshToken);
        }, expiresInMs)
        commit('updateIdToken', idToken);
      }
    },
    login({ dispatch }, authData) {
      axios.post(
        '/accounts:signInWithPassword?key=AIzaSyByi2S7YoNDIQJW_qeTG3xcX-w_7ln4O9k',
        {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
        }
      ).then(response => {
         dispatch('setAuthData', {
           idToken: response.data.idToken,
           expiresIn: response.data.expiresIn,
           refreshToken: response.data.refreshToken,
         });
        router.push('/memoHome');
      });
    },
    logout({ commit }) {
      commit('updateIdToken', null);
      localStorage.removeItem('idToken');
      localStorage.removeItem('expiryTimeMs');
      localStorage.removeItem('refreshToken');
      router.replace('/memoLogin')
    },
    refreshIdToken({ dispatch }, refreshToken) {
      axiosRefresh.post('/token?key=AIzaSyCRE7YyeXLAwl13Eg58jaZWp507udRp4oI',
          {
            grant_type: 'refresh_token',
            refresh_token: refreshToken
          }).then(response => {
            dispatch('setAuthData', {
              idToken: response.data.idToken,
              expiresIn: response.data.expires_in,
              refreshToken: response.data.refresh_token,
            });
          })
    },
    register({ dispatch }, authData) {
      axios.post(
        '/accounts:signUp?key=AIzaSyByi2S7YoNDIQJW_qeTG3xcX-w_7ln4O9k',
        {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
        }
    ).then(response => {
        dispatch('setAuthData', {
        idToken: response.data.idToken,
        expiresIn: response.data.expiresIn,
        refreshToken: response.data.refreshToken,
      });
      router.push('/');
    });
    },
    setAuthData({ commit, dispatch }, authData) {
      const now = new Date();
      const expiryTimeMs = now.getTime() + authData.expiresIn * 1000;
      commit('updateIdToken', authData.idToken);
      localStorage.setItem('idToken', authData.idToken);
      localStorage.setItem('expiryTimeMs', expiryTimeMs);
      localStorage.setItem('refreshToken', authData.refreshToken);
      setTimeout(() => {
        dispatch('refreshIdToken', authData.refreshToken)
      }, authData.expiresIn * 1000)
    }
  },
 })