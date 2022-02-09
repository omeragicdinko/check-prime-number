<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-12 col-md-8">
        <div class="input-group">
          <div class="custom-file">
          <input class="number-input-field" type="text" placeholder="Enter number to check" name="inputNumber" v-model="inputNumber" style="width: 100%;">
          </div>
        </div>
      </div>
      <div class="col-12 col-md-1">
        <button class="btn btn-primary" v-bind:disabled="disabled" v-on:click="checkPrimeNumber()">
            <span v-if="disabled">
                <span style="width: 20px; height: 20px;" class="spinner-border" role="status">
                </span>
            </span>
            <span v-else>Check</span>
        </button>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div v-if="numberNotPrime" class="col-12 col-md-9">Number {{this.previousInputNumber}} is not a prime number because it is divisible by {{this.previousInputNumberDivisibleBy}}
      </div>
      <div v-if="numberIsPrime" class="col-12 col-md-9">Number {{this.previousInputNumber}} is a prime number
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/index.css";
import Vue from "vue";

Vue.use(VueToast);

export default {
  name: 'inputNumber',
  props: {
    msg: String
  },
  data() {
    return {
      inputNumber: "",
      numberNotPrime: false,
      numberIsPrime: false,
      previousInputNumber: "",
      previousInputNumberDivisibleBy: "",
      disabled: false
    };
  },
  mounted() {
  },
  methods: {
    checkPrimeNumber() {
      let self = this;
      self.numberNotPrime = false;
      self.numberIsPrime = false;
      self.previousInputNumber = "";
      self.previousInputNumberDivisibleBy = "";
      if (self.inputNumber === "") {
        Vue.$toast.error("You did not specify a number.", {
          position: "top-right"
        });
        return;
      }
      self.disabled = true;

      let data = JSON.stringify({
        'number': this.inputNumber
      });

      axios
        .post("/check", data, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          self.previousInputNumber = self.inputNumber;
          self.inputNumber = "";
          if (response.data.number_is_prime && !response.data.invalid_format) {
              self.numberNotPrime = false;
              self.numberIsPrime = true;
              Vue.$toast.success("It is a prime number.", {
              position: "top-right"
            });
          } else {
            self.numberNotPrime = true;
            self.numberIsPrime = false;
            self.previousInputNumberDivisibleBy = response.data.divisible_by;
            Vue.$toast.info("It is not a prime number", {
              position: "top-right"
            });

          }
          self.disabled = false;
        })
        .catch(error => {
          self.numberNotPrime = false;
          self.numberIsPrime = false;
          console.log("Error: ", error);
          Vue.$toast.error("Check if number is a prime number failed.", {
            position: "top-right"
          });
          self.disabled = false;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
