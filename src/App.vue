<template>
  <router-view />
</template>
<script>
export default {};
</script>
<style lang="scss">
@font-face {
  font-family: "Lato";
  src: local("Lato"), url("~@/assets/fonts/Lato-Medium.woff2") format("woff2"),
    url("~@/assets/fonts/Lato-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "Lato";
  src: local("Lato"), url("~@/assets/fonts/Lato-Bold.woff2") format("woff2"),
    url("~@/assets/fonts/Lato-Bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
}
//null styles
sup {
  font-size: 0.5em;
}
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}
aside,
nav,
footer,
header,
section {
  display: block;
}

html,
body {
}
body {
  line-height: 1;
  font-family: "Vela Sans", sans-serif;
  text-rendering: optimizeLegibility;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
  font-size: inherit;
}
input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
  background-color: inherit;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}
</style>
