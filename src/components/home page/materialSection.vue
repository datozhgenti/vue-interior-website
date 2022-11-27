<template>
  <div class="wrapper">
    <section class="material-section">
      <div class="material-section-left">
        <section-header
          :header-name="header"
          :sur-header="subHeader"
        ></section-header>
        <div class="product-gray">
          <p class="gray-text-10">
            You can custom the material as desired. And our furniture uses the
            best materials and selected quality materials.
          </p>
        </div>
        <div class="btn-transparent">
          <router-link to="/room" class="btn white">See Materials</router-link>
        </div>
      </div>
      <div class="material-section-right">
        <img src="@/assets/mat1.png" alt="mat1" />
        <img src="@/assets/mat2.png" alt="mat2" />
        <img src="@/assets/mat3.png" alt="mat3" />
      </div>
    </section>
  </div>
</template>

<script>
import sectionHeader from "@/components/sectionHeader";
export default {
  components: {
    sectionHeader,
  },
  data() {
    return {
      header: "MATERIAL",
      subHeader: "choice of materials for quality furniture.",
    };
  },
};
</script>

<style>
.material-section {
  display: flex;
  margin-top: 210px;
}

.white {
  background: var(--grayscale-white);
  color: var(--grayscale-50);
  border: 1px solid var(--grayscale-30);
}

.product-gray {
  margin-top: 10px;
  width: 497px;
}

.btn-transparent .btn {
  display: inline-block;
}

.btn-transparent {
  margin-top: 23px;
}

.material-section-left {
  width: 600px;
  height: 396px;
}

.material-section-right {
  width: 622px;
  height: 490px;
  position: relative;
}

.material-section-right img {
  position: absolute;
}

img[alt="mat1"] {
  bottom: 0;
  left: 0;
}

img[alt="mat2"] {
  top: 0;
  right: 0;
}

img[alt="mat3"] {
  bottom: 47px;
  right: 46px;
}
</style>
