<template>
  <section class="about-page-hero hero-animation">
    <div class="wrapper">
      <div class="about-hero-top">
        <h1>{{ heroHeader }}</h1>
        <div class="hero-sub-header">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
      <div class="about-hero-bottom">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["heroHeader"],
};
</script>

<style scoped>
.about-hero-top {
  text-align: center;
}

.about-page-hero {
  margin-top: 97px;
}

.hero-sub-header {
  width: 582px;
  margin: 0 auto;
  margin-top: 36px;
}

.about-hero-bottom {
  margin-top: 86px;
}

h1 {
  font-weight: 700;
  font-size: 56px;
}

.about-page-hero {
  transform: translateX(-1000%);
}
</style>
