// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'api/tasks'

import { Meteor } from 'meteor/meteor'

Vue.config.productionTip = false

/* eslint-disable no-new */
Meteor.startup(() => {
  new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
  })
})
