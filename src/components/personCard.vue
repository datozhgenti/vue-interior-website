<template>
  <router-link to="/portfolio">
    <div class="card" v-bind="$attrs">
      <div class="card-content">
        <h6>Shoo Phar Dhie</h6>
        <p>CEO</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  width: 282px;
  height: 400px;
  background-color: var(--blue-primary-100);
  /* background-image: url("@/assets/person1.png"); */
  background-position: bottom;
  background-repeat: no-repeat;
  padding: 0 12px 12px 12px;
  display: flex;
  align-items: flex-end;
}

.card-content {
  background: var(--grayscale-white);
  padding: 18px 58px 18px 16px;
}

h6 {
  font-size: 24px;
  font-weight: 600;
}

p {
  color: var(--grayscale-10);
}

a {
  color: var(--grayscale-50);
}
</style>
