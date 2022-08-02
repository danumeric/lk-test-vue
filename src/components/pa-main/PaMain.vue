<template>
  <div class="pa-main">
    <PaHeader />
    <div v-if="getListDocs.length" class="pa-main__list list-docs">
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
import { mapGetters } from "vuex";
import DocumentCart from "@/components/pa-main/DocumentCart";
import PaHeader from "@/components/pa-main/PaHeader";

export default {
  name: "PaMain",
  components: { DocumentCart, PaHeader },
  computed: {
    ...mapGetters(["getListDocs"]),
  },
};
</script>


<style lang="scss">
.pa-main {
  position: relative;
  margin: 15px 15px 0px 15px;
  font-family: "Lato", sans-serif;
  @media (max-width: 767.98px) {
    margin: 10px 10px 0px 10px;
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
    @media (max-width: 767.98px) {
      width: 100%;
      margin: 20px 0px 0px 0px;
    }
  }
}
</style>