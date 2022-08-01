<template>
  <div class="wrapper">
    <FormLogin />
    <FooterPa />
  </div>
</template>

<script>
import FormLogin from "@/components/form-login/FormLogin";
import FooterPa from "@/components/footer/FooterPa";

export default {
  name: "AuthView",
  data() {
    return {};
  },
  components: { FormLogin, FooterPa },
  methods: {},
};
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100vh;
}
</style>
