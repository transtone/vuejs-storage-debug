import Vue from "vue"
import App from "./App.vue"
import { sync } from "vuex-router-sync"
import "./registerServiceWorker"
import router from "./router"
import store from "./store/"
sync(store, router)

Vue.config.productionTip = false
// router.beforeEach((to, from, next) => {
//   if (to.meta.noAuth || store.getters.checkToken) {
//     next()
//   } else {
//     next({
//       name: "Home",
//       params: { redirect: to.fullPath }
//     })
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App),
  data: {
    eventBus: new Vue()
  }
}).$mount("#app")
