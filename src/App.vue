<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* all poppins fonts */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

:root {
  /* all primary blue colors */
  --blue-primary-100: #2c3878;
  --blue-primary-90: #566093;
  --blue-primary-75: #8088ae;
  --blue-primary-50: #abafc9;
  --blue-primary-25: #d5d7e4;
  --blue-primary-10: #eaebf2;

  /* all grayscale colors */

  --grayscale-black: #000000;
  --grayscale-70: #141414;
  --grayscale-50: #333333;
  --grayscale-30: #3c3c3c;
  --grayscale-10: #9c9c9c;
  --grayscale-lightGray: #d9d9d9;
  --grayscale-white: #ffffff;
}

/* default styles delete */

body {
  font-family: "Poppins", sans-serif;
  color: var(--grayscale-50);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
