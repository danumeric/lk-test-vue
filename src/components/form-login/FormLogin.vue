<template>
  <div class="auth">
    <div class="auth__header">
      <img
        class="auth__logo"
        src="@/assets/images/logo-eco-safety.png"
        alt="logo-eco-safety"
      />
    </div>
    <div class="auth__container">
      <h1 class="auth__capture">Вход в личный кабинет</h1>
      <p class="auth__descr">Используйте логин и пароль из памятки</p>
      <form
        @submit.prevent="
          reqDataUser({ username: username, password: password })
        "
        name="auth"
        class="auth__form"
      >
        <input
          v-model="username"
          class="auth__fields"
          name="username"
          placeholder="Логин"
        />
        <input
          v-model="password"
          class="auth__fields"
          name="password"
          type="password"
          placeholder="Пароль"
        />
        <input
          type="submit"
          value="Войти"
          class="auth__fields auth__fields_submit"
        />
        <span v-if="getErrorMsg" class="auth__error"> {{ getErrorMsg }}</span>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AuthView",
  data() {
    return {
      username: "803286",
      password: "NH2Pepn",
    };
  },
  methods: {
    ...mapActions(["reqDataUser"]),
  },
  computed: {
    ...mapGetters(["getErrorMsg"]),
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  // height: 100vh;
  padding: 15px 15px;
}
.auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  &__logo {
    @media (max-width: 767.98px) {
      width: 100px;
    }
  }
  &__header {
    align-self: flex-start;
  }
  &__container {
    max-width: 280px;
    @media (max-width: 767.98px) {
      max-width: 80%;
    }
  }
  &__capture {
    text-align: center;
    font-family: "Lato", sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.1;
    color: #797979;
  }
  &__descr {
    margin: 10px 0px 0px 0px;
    text-align: center;
    font-family: "Lato", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
    color: #797979;
  }
  &__form {
  }
  &__fields {
    display: inline-block;
    width: 100%;
    margin: 10px 0px 0px 0px;
    padding: 6px 12px;
    color: #c2c2c2;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    &_submit {
      display: block;
      max-width: 130px;
      margin: 20px auto 0px auto;
      padding: 20px 40px;
      border-radius: 4px;
      background: #475168;
      color: #fff;
      text-transform: uppercase;
      transition: all 0.3s ease;
      cursor: pointer;
      &:hover {
        background: #48cfad;
        color: #fff;
      }
    }
  }
  &__error {
    display: block;
    margin: 20px 0px 0px 0px;
    text-align: center;
    color: red;
  }
}
</style>
