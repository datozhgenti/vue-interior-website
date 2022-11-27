<template>
  <section class="hero-section hero-animation">
    <div class="wrapper">
      <div class="hero-top">
        <div class="hero-header-container">
          <h1>
            <p>Design your</p>
            <p>interor with high</p>
            <p>quality.</p>
          </h1>
        </div>
        <div class="rights-reserve-container">
          <div>
            <p>2022</p>
            <p>ALL RIGHT RESERVED</p>
          </div>
        </div>
      </div>
      <div class="hero-bottom">
        <img src="@/assets/kitchen.png" alt="kitchen" />
        <statistic class="statCont"></statistic>
      </div>
    </div>
  </section>
</template>

<script>
import statistic from "@/components/statisticsComp.vue";

export default {
  components: {
    statistic,
  },
};
</script>

<style>
section.hero-section {
  margin-top: 97px;
  transform: translateX(-1000%);
}

.hero-top {
  display: flex;
  justify-content: space-between;
}

.hero-header-container h1 {
  font-size: 72px;
  font-weight: 700;
  position: relative;
}

.hero-header-container h1::after {
  content: "";
  width: 683px;
  height: 2px;
  position: absolute;
  top: 50px;
  left: 517px;
  background-color: var(--grayscale-black);
}

.rights-reserve-container {
  position: relative;
}

.rights-reserve-container div {
  position: absolute;
  transform: rotate(-90deg);
  right: -60px;
  bottom: 70px;
  width: 178px;
}

.rights-reserve-container p {
  font-size: 18px;
  font-weight: 500;
}

.hero-bottom {
  margin-top: 46px;
  position: relative;
}

img {
  object-fit: cover;
  display: block;
}

.statCont {
  position: absolute;
  bottom: 197px;
  right: 142px;
}

.hero-animation {
  animation-name: heroAnimate;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes heroAnimate {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
