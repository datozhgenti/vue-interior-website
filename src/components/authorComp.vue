<template>
  <div class="author-container">
    <div class="author-img-container">
      <img src="@/assets/author.png" alt="author" />
    </div>
    <div class="about-author-container">
      <h6 class="name">Arga Danaan</h6>
      <p class="carier">CEO of Dananz</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.author-container {
  width: 276px;
  height: 90px;
  position: absolute;

  background: var(--grayscale-white);
  display: flex;
  align-items: center;
  padding: 17px 52px 17px 20px;
  filter: drop-shadow(10px 10px 40px rgba(0, 0, 0, 0.05));
}

.author-img-container {
  margin-right: 20px;
}
</style>
