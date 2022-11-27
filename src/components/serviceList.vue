<template>
  <div class="list-item">
    <div class="item-index">
      <p :style="{ fontSize: fontNum }">{{ itemIndex }}</p>
    </div>
    <div class="item-name" :style="{ marginLeft: marginSize }">
      <div class="item-name-top-container">
        <p :style="{ fontSize: fontNum }">{{ itemName }}</p>
        <p class="below-text" v-if="belowText !== undefined">
          {{ belowText }}
        </p>
      </div>

      <div class="arrow">
        <router-link :to="pageLink">
          <img src="@/assets/arrow-right.png" alt="arrow right" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "itemIndex",
    "itemName",
    "marginSize",
    "fontNum",
    "belowText",
    "pageLink",
  ],

  mounted() {
    const listItem = document.querySelectorAll(".list-item");
    const arrow = document.querySelectorAll(".arrow a");

    listItem.forEach((item, index) => {
      item.onclick = () => {
        arrow[index].click();
      };
    });
  },
};
</script>

<style>
.list-item p {
  font-size: 24px;
  font-weight: 600;
}

.item-name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
}

.list-item {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.list-item + .list-item {
  margin-top: 35px;
}

.item-name-top-container .below-text {
  font-size: 18px;
  font-weight: 400;
  margin-top: 24px;
  width: 469px;
}
</style>
