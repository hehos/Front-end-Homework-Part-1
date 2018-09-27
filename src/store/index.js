import Vue from 'vue';
import Vuex from 'vuex';

// store模块化
import app from './src/app';
import agent from './src/agent';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    agent,
  }
});
