import Vue from 'vue'
import App from './App.vue'

import VueLodash from 'vue-lodash'
import lodash from 'lodash'

// name is optional
Vue.use(VueLodash, { name: 'custom', lodash: lodash })

Vue.config.productionTip = false


new Vue({
    render: h => h(App),
}).$mount('#app')