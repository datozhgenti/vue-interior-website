<template>
  <div class="statistics-container">
    <div class="statistic">
      <h3>350+</h3>
      <p>Project Completed</p>
    </div>
    <div class="statistic">
      <h3>23+</h3>
      <p>Professional Teams</p>
    </div>
    <div class="statistic">
      <h3>15+</h3>
      <p>Years Experience</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.statistics-container {
  width: 252px;
  height: 525px;

  background: var(--blue-primary-100);
  padding: 40px 48px 44px 48px;
  color: var(--grayscale-white);
  text-align: center;
}

.statistic h3 {
  font-weight: 400;
  font-size: 52px;
}

.statistic + .statistic {
  margin-top: 57px;
}
</style>
