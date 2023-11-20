<!-- 
 * Login Vue App
 *
 * @category   Application_Frontend
 * @package    login-vue-app
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 -->

<template>
  <div id="app">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";

export default {
  name: "App",
  components: {
    LoginForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
#app > div {
  width: 40%;
  padding: 50px 0px;
  box-shadow: 11px 10px 38px 0 rgb(46 63 99 / 15%);
}
</style>
