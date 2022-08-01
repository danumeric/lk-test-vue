<template>
  <div class="wrapper-pa">
    <PaMain />
    <FooterPa />
  </div>
</template>

<script>
import FooterPa from "@/components/footer/FooterPa";
import PaMain from "@/components/pa-main/PaMain";
import { mapActions } from "vuex";

export default {
  name: "HomeView",
  components: {
    FooterPa,
    PaMain,
  },
  methods: {
    ...mapActions(["reqDocsUser"]),
  },
  created() {
    this.reqDocsUser();
  },
};
</script>
