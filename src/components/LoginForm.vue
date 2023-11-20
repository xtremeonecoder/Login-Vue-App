<!-- 
 * Login Vue App
 *
 * @category   Application_Frontend
 * @package    login-vue-app
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 -->

<template>
  <div>
    <h2>Login Form</h2>
    <p v-if="successMessage" class="success">Success: {{ successMessage }}</p>
    <p v-if="failedMessage" class="error">Error: {{ failedMessage }}</p>
    <form @submit.prevent="submitForm">
      <div>
        <label>Email: </label>
        <input
          v-model="email"
          type="email"
          @input="checkEmailValidity"
          required
        />
        <p v-if="!isEmailValid" class="input-error">
          Please enter a valid email address.
        </p>
      </div>
      <div>
        <label>Password: </label>
        <input
          v-model="password"
          type="password"
          @input="checkPasswordStrength"
          required
        />
        <password-strength-meter
          v-model="password"
          :strength-meter-only="true"
        />
        <p v-if="!isPasswordValid" class="input-error">
          Password should be at least 8 characters. {{ isPasswordValid }}
        </p>
      </div>
      <div>
        <button type="submit" :disabled="!isFormValid">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import PasswordStrengthMeter from "vue-password-strength-meter";

export default {
  components: {
    PasswordStrengthMeter,
  },
  data() {
    return {
      email: "",
      password: "",
      isFormValid: false,
      isEmailValid: true,
      isPasswordValid: true,
      successMessage: false,
      failedMessage: false,
    };
  },
  methods: {
    checkEmailValidity() {
      // Email validation check
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      this.isEmailValid = emailRegex.test(this.email);
      this.checkFormValidity();
    },
    checkPasswordStrength() {
      // Password strength check
      this.isPasswordValid = this.password.length >= 8;
      this.checkFormValidity();
    },
    checkFormValidity() {
      // Check overall form validity
      this.isFormValid = this.isEmailValid && this.isPasswordValid;
    },
    submitForm() {
      // Check form validation
      this.checkFormValidity();

      // Do not proceed with form submission if form is invalid
      if (!this.isFormValid) return;

      // Send login request to the server
      axios
        .post("https://api.forgingblock.io/v2/signin", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          this.successMessage = response.data.success;
        })
        .catch((error) => {
          this.failedMessage = error.message;
        });
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0px 0px 20px 0px;
}
button {
  padding: 6px 25px;
  font-weight: bold;
}
form > div:first-child {
  margin-bottom: 20px;
}
.success {
  color: green;
  font-weight: bold;
}
.error {
  color: red;
  font-weight: bold;
}
.input-error {
  color: red;
  margin-top: 5px;
}
.Password {
  max-width: 245px;
}
</style>
