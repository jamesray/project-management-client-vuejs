import Vue from 'vue';
import Vuex from 'vuex';
import feathersVuex from 'feathers-vuex'
import feathersClient from '../api/feathers-client'

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const { service, auth } = feathersVuex(feathersClient, { idField: '_id' })

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  getters,
  mutations,
  actions,
  plugins: [
    
  ]
});
