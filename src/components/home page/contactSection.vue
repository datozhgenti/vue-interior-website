<template>
  <section class="contact-section">
    <div class="wrapper">
      <div class="contact-section-content">
        <div class="contact-section-left">
          <h3>let's discuss making your interior like a dream place!</h3>
        </div>
        <div class="contact-section-right">
          <p>
            Contact us below to work together to build your amazing interior
          </p>
          <router-link to="/contact-us" class="btn white"
            >Contact Us</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.contact-section {
  background: var(--blue-primary-100);
}

.contact-section-content {
  display: flex;
  padding: 38px 0;
  align-items: center;
}

.contact-section-left {
  width: 613px;
}

.contact-section-right {
  margin-left: 155px;
  width: 432px;
}

@media (max-width: 1440px) {
  .contact-section {
    display: inline-block;
  }
}
</style>

<style scoped>
h3 {
  color: var(--grayscale-white);
  font-size: 36px;
  font-weight: 600;
}

p {
  color: var(--grayscale-lightGray);
  font-size: 18px;
  font-weight: 400;
}

a {
  margin-top: 20px;
}
</style>
