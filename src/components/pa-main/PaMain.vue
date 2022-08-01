<template>
  <div class="pa-main">
    <div class="header pa-main__header">
      <div class="header__logo">
        <img
          class="header__img-logo"
          src="@/assets/images/logo-eco-safety.png"
          alt="logo-eco-safety"
        />
      </div>
      <span class="header__text"> Ваш логин: {{ getLoginName }} </span>
      <span @click="paExit" class="header__text header__text_exit">Выход</span>
    </div>
    <div v-if="getListDocs.length" class="pa-main__list list-docs">
      <!-- <div class="pa-main__list list-docs"> -->
      <div class="list-docs__list">
        <template v-for="doc in getListDocs" :key="doc.id_document">
          <DocumentCart :doc="doc" />
        </template>
      </div>
    </div>
    <div v-else class="pa-main__no-docs">
      К сожалению, пока у Вас нет готовых документов
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import router from "@/router";
import DocumentCart from "@/components/pa-main/DocumentCart";

export default {
  name: "PaMain",
  components: { DocumentCart },
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


<style lang="scss">
.pa-main {
  margin: 15px 15px 0px 15px;
  font-family: "Lato", sans-serif;
}
.header {
  display: flex;
  &__logo {
    flex: 1 0;
  }
  &__text {
    margin: 15px 0px 0px 0px;
    font-size: 14px;
    color: #444e67;
    &_exit {
      margin: 15px 0px 0px 30px;
      cursor: pointer;
      &:hover {
        color: #040405;
      }
    }
  }
}
.list-docs {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__list {
    width: 800px;
    border-radius: 4px;
    border: 5px solid #f1f1f1;
  }
}
</style>