<template>
  <div id="app">
    <div class="jumbotron">
      <h1 class="display-4"><span style="color: #E97B22">Check</span>Prime<span style="color: #E97B22">CC</span></h1>
      <p
        class="lead"
      >This is a simple application for checking if a number is a prime number or not built using AWS Lambda.</p>
      <hr class="my-4" />
      <p>The application allows you to check if a number is a prime number or not. If it is, you will get a notification. If it is not, you will get one of the numbers by which it is divisible.</p>
      <p>This functionality is achieved via two Lambda functions, one which attempts to check is a number is a prime number, and the other (called by the first one) which checks if the number is divisible by a given number.</p>
    </div>
    <PrimeNumberCheck msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import PrimeNumberCheck from "./components/PrimeNumberCheck.vue";

export default {
  name: "app",
  components: {
    PrimeNumberCheck
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
