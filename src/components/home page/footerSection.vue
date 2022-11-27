<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer-content">
        <div class="footer-left">
          <div class="footer-logo">
            <img src="@/assets/web-logo.png" alt="logo" />
          </div>
          <div class="logo-below-text">
            <h3>One of the best furniture agency.</h3>
          </div>
        </div>
        <div class="footer-right">
          <div class="form-container">
            <form @submit.prevent>
              <label for="email"
                >Enter your email to get the laterst news</label
              >
              <br />
              <input
                placeholder="Email Address"
                type="email"
                name="email"
                id="email"
              />
              <button type="sumbit">
                <img src="@/assets/input-arrow.png" alt="input-arrow" />
              </button>
            </form>
          </div>
          <hr />

          <div class="social-media-icons">
            <div class="text">
              <p>Follow us On</p>
            </div>
            <div class="icons">
              <a href="https://www.facebook.com/" target="_blank">
                <img src="@/assets/facebook.png" alt="facebook icon" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img src="@/assets/instagram.png" alt="instagram icon" />
              </a>
              <a href="https://www.tiktok.com/" target="_blank">
                <img src="@/assets/tiktok.png" alt="tiktok icon" />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <img src="@/assets/youtube.png" alt="youtube icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.footer-content {
  display: flex;
  justify-content: space-between;
  padding: 80px 0 84px 0;
  gap: 279px;
}

input:focus-visible {
  outline: none;
}
</style>

<style scoped>
/* .footer-left {
  margin-right: 279px;
} */

h3 {
  font-size: 36px;
  font-weight: 600;
}

label {
  font-size: 18px;
  position: relative;
}

label::before {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  background: var(--grayscale-50);
  border-radius: 50%;
  top: 5.5px;
  left: -20px;
}

.form-container {
  width: 440px;
}

input {
  border: none;
  margin-top: 23px;
  width: 394px;
}

input::placeholder {
  color: var(--grayscale-lightGray);
}

.social-media-icons {
  margin-top: 40px;
}

hr {
  margin-top: 15px;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

.icons {
  display: flex;
  gap: 33px;
  margin-top: 15px;
}

a {
  background: var(--grayscale-lightGray);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
