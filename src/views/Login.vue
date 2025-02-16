<template>
  <div class="login-container">
    <h2>登入系統</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">使用者名稱</label>
        <input type="text" id="username" v-model="username" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="password">密碼</label>
        <input type="password" id="password" v-model="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">登入</button>
      <div v-if="errorMessage" class="alert alert-danger mt-2">{{ errorMessage }}</div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin() {
      try {
        await this.login({ username: this.username, password: this.password });
        this.$router.push({ name: 'Reservation' });
      } catch (error) {
        this.errorMessage = '登入失敗，請檢查您的帳號和密碼。';
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
}
</style>