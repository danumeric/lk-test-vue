<template>
  <div class="line">
    <span class="line__deco-icon"></span>
  </div>
  <footer class="footer-pa">
    <div class="footer-pa__img"></div>
    <div class="footer-pa__contacts">
      <h3 class="footer-pa__capture">Наши контакты</h3>
      <p class="footer-pa__adress">
        191119, Санкт-Петербург, ул. Достоевского, 40-44
      </p>
      <a class="footer-pa__tel" href="tel:88123250305">(812) 325-03-05</a>
      <p class="footer-pa__email">
        Email: <a href="mailto:info@ecosafety.ru">info@ecosafety.ru</a>
      </p>
    </div>
    <div class="footer-pa__copyright">
      © Группа компаний Эко-безопасность 2010-2022
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterPa",
  mounted() {
    let fontAwesome = document.createElement("script");
    fontAwesome.setAttribute(
      "src",
      "https://kit.fontawesome.com/b0943aacbc.js"
    );
    document.head.appendChild(fontAwesome);
  },
};
</script>
<style lang="scss" scoped>
.footer-pa {
  font-family: "Lato", sans-serif;
  color: #fff;
  background: #34495e;

  &__img {
    margin: 0px 0px 0px 0px;
    background: url(@/assets/images/footer-img.svg);
    height: 150px;
    // display: inline-block;
    width: 100%;
  }
  &__contacts {
    margin: 30px 0px 0px 10%;
  }
  &__capture {
    margin: 0px 0px 0px 50px;
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    // text-align: center;
  }
  &__adress {
    margin: 20px 0px 0px 0px;
    display: block;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    &:before {
      padding: 0px 10px 0px 0px;
      font-family: FontAwesome;
      content: "\f015";
    }
  }
  &__tel {
    display: inline-block;
    margin: 15px 0px 0px 0px;
    &:before {
      padding: 0px 10px 0px 0px;
      font-family: FontAwesome;
      content: "\f095";
      color: #fff;
    }
    color: #48cfad;
  }
  &__email {
    margin: 15px 0px 0px 0px;

    a {
      color: #48cfad;
    }

    &:before {
      padding: 0px 10px 0px 0px;
      font-family: FontAwesome;
      content: "\f0e0";
    }
  }
  &__copyright {
    display: flex;
    align-items: center;
    height: 50px;
    margin: 0px 0px 0px 10%;
    font-size: 14px;
  }
}

.line {
  height: 1px;
  width: 30%;
  margin: 30px auto;
  background: #ececec;
  position: relative;
  line-height: 1px;
  &__deco-icon {
    width: 8px;
    height: 9px;
    background-color: #fff;
    border: 1px solid #ececec;
    position: absolute;
    left: 50%;
    top: -4px;
  }
}
</style>

