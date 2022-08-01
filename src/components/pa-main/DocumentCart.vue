<template>
  <div class="cart">
    <img
      @click="
        downloadDoc({
          idDoc: doc.id_document,
          docType: doc.doc_type,
          nameDoc: doc_name,
          dateDoc: doc.date_doc,
        })
      "
      class="cart__ico"
      :src="getIcoOfFormat(doc.file_ext)"
      alt=""
    />
    <div class="cart-capture">{{ doc.doc_name }} от {{ doc.date_doc }}</div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "DocumentCart",
  props: {
    doc: Object,
  },
  methods: {
    ...mapActions(["downloadDoc"]),

    getIcoOfFormat(format) {
      if (format === "pdf") {
        return require("@/assets/images/icons/ico-pdf.svg");
      } else {
        return require("@/assets/images/icons/ico-another.svg");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  align-items: center;
  font-family: Roboto, sans-serif;
  color: #797979;
  padding: 10px 0px 10px 0px;
  margin: 0px 15px 0px 15px;
  &:not(:first-child) {
    border-top: 1px solid #cfcfcf;
  }

  &__ico {
    width: 48px;
    height: 48px;
    cursor: pointer;
  }
}
</style>