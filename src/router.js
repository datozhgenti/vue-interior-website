import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/homePage";
import About from "@/pages/aboutPage";
import Teams from "@/pages/teamsPage";
import Services from "@/pages/servicesPage";
import Contact from "@/pages/contactPage";
import Portfolio from "@/pages/portfolioPage";
import Room from "@/pages/roomPage";

const routes = [
  { path: "/", component: Home },
  { path: "/about-us", component: About },
  { path: "/services", component: Services },
  { path: "/our-teams", component: Teams },
  { path: "/contact-us", component: Contact },
  { path: "/portfolio", component: Portfolio },
  { path: "/room", component: Room },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.path === "/about-us") {
      if (from.path === "/contact-us") {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    }

    if (to.path === "/room") {
      if (from.path === "/contact-us") {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    }

    if (to.path === "/portfolio") {
      if (from.path === "/room" || from.path === "/contact-us") {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    }

    if (to.path === "/contact-us") {
      return { top: 0 };
    }

    if (to.path === "/services" && to.hash) {
      return { el: to.hash };
    }

    return savedPosition;

    // else if (to.path === "/services" && to.hash) {
    //   return { el: to.hash };
    // } else {
    //   return savedPosition;
    // }

    // to.path === "/room" ||
    // to.path === "/contact-us"
  },
});
