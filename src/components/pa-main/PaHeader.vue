  <template>
  <div class="header pa-main__header">
    <div class="header__logo">
      <img
        class="header__img-logo"
        src="@/assets/images/logo-eco-safety.png"
        alt="logo-eco-safety"
      />
    </div>
    <Slide noOverlay width="200" isOpen right>
      <a id="home" href="#">
        <span class="header__text"> Ваш логин: {{ getLoginName }} </span>
        <span @click="paExit" class="header__text header__text_exit"
          >Выход</span
        >
      </a>
    </Slide>
    <div class="header__menu">
      <span class="header__text"> Ваш логин: {{ getLoginName }} </span>
      <span @click="paExit" class="header__text header__text_exit">Выход</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import router from "@/router";
import { Slide } from "vue3-burger-menu";
export default {
  name: "PaHeader",
  components: {
    Slide,
  },
  computed: {
    ...mapGetters(["getLoginName", "getListDocs"]),
  },
  methods: {
    ...mapMutations(["clearDataUser", "clearDocsUser"]),

    paExit() {
      this.clearDataUser();
      this.clearDocsUser();
      router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;

  &__menu {
    @media (max-width: 767.98px) {
      display: none;
    }
  }
  &__logo {
    flex: 1 0;
  }
  &__text {
    margin: 15px 0px 0px 0px;
    font-size: 14px;
    color: #444e67;
    &_exit {
      margin: 15px 0px 0px 30px;
      @media (max-width: 767.98px) {
        margin: 15px 0px 0px 0px;
      }
      cursor: pointer;
      &:hover {
        color: #040405;
      }
    }
  }
}
</style>
<style lang="scss">
.bm-burger-button {
  top: 20px;
  left: calc(100vw - 58px);
  display: none;
  @media (max-width: 767.98px) {
    display: block;
  }
}
.bm-burger-bars {
  background-color: #979797;
}
.bm-menu {
  background-color: #f1f1f1; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}
.bm-item-list > * {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: 0;
}
</style>