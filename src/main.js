/**
 * Login Vue App
 *
 * @category   Application_Frontend
 * @package    login-vue-app
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 */

import Vue from "vue";
import PasswordStrengthMeter from "vue-password-strength-meter";

import App from "./App.vue";

Vue.config.productionTip = false;

// Use the plugin
Vue.use(PasswordStrengthMeter);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
