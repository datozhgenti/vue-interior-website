<template>
  <div class="wrapper">
    <nav class="nav-animation">
      <div class="logo-container">
        <router-link to="/"
          ><img src="@/assets/web-logo.png" alt="logo"
        /></router-link>
      </div>
      <div class="nav-buttons">
        <router-link
          v-for="(link, index) of pageLinks"
          :key="index"
          :class="index === 4 ? ' btn blue' : 'btn'"
          :to="link.path"
          >{{ link.name }}</router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageLinks: [
        { path: "/", name: "Home" },
        { path: "/about-us", name: "About Us" },
        { path: "/services", name: "Services" },
        { path: "/our-teams", name: "Our Teams" },
        { path: "/contact-us", name: "Contact Us" },
      ],
    };
  },
  mounted() {
    // const nav = this.$refs.menuRef;
    // let observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       entry.target.classList.add("nav-animation");
    //     }
    //   });
    // });
    // observer.observe(nav);
  },
};
</script>

<style>
/* nav section styles */
.wrapper {
  width: 1440px;
  margin: 0 auto;
  padding: 0 120px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 42px;
}

.nav-buttons a {
  color: var(--grayscale-50);
  font-weight: 400;
  margin-right: 74px;
}

a {
  text-decoration: none;
  color: var(--grayscale-white);
}

.nav-buttons a:last-child {
  color: var(--grayscale-white);

  font-weight: 500;
}

.nav-buttons a:last-child {
  margin: 0;
}

.btn {
  padding: 14px 32px;
  font-size: 14px;
  display: inline-block;
}

.blue {
  background-color: var(--blue-primary-100);
}

.transparent-btn {
  background-color: var(--grayscale-white);
  padding: 14px 32px;
  font-size: 14px;
}

a[aria-current]:not(:last-child) {
  font-weight: 600;
}

.nav-animation {
  animation-name: navAnimation;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes navAnimation {
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
