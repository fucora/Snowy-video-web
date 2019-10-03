import Vue from 'vue'
import App from './App'

import cuCustom from './components/cu-custom/cu-custom.vue'
import yoDialog from './components/yo-dialog/yo-dialog.vue'

Vue.component('cu-custom', cuCustom)
Vue.component('yo-dialog', yoDialog)

Vue.config.productionTip = false

Vue.mixin({
    methods:{
        setTabBarIndex(index){
            if (typeof this.$mp.page.getTabBar === 'function' &&
                this.$mp.page.getTabBar()) {
                this.$mp.page.getTabBar().setData({
                    selected:index
                })
            }
        }
    }
})

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
