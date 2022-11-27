<template>
  <main>
    <div class="wrapper">
      <div class="main-section-content">
        <div>
          <div class="main-header">
            <h6 class="location-header">Project Overview</h6>
          </div>

          <div class="paragraph">
            <p class="gray-text-10">
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere. Online learning with us does not
              interfere with your daily life. because learning can be done
              anytime and anywhere.
            </p>
            <div class="inline-paragraphs">
              <p class="gray-text-10">July 22 - 2022</p>
              <p class="gray-text-10">Interior Design - Furnitur</p>
            </div>
          </div>
        </div>
        <div>
          <div class="main-header">
            <h6 class="location-header">Design Process</h6>
          </div>

          <div class="paragraph">
            <p class="gray-text-10" style="margin-bottom: 30px">
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere.
            </p>
            <p class="gray-text-10">
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere. Online learning
              with us does not interfere with your daily life. because learning
              can be done anytime and anywhere.
            </p>
          </div>
        </div>
        <div>
          <img src="@/assets/room1.png" alt="room1" />
        </div>
        <div>
          <img src="@/assets/room2.png" alt="room2" />
        </div>
        <div style="grid-column: span 2">
          <img src="@/assets/room3.png" alt="room3" />
        </div>
        <div>
          <img src="@/assets/room4.png" alt="room4" />
        </div>
        <div>
          <img src="@/assets/room5.png" alt="room5" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
.main-section-content {
  display: grid;
  grid-template-columns: repeat(2, 584px);
  gap: 32px 32px;
}

.inline-paragraphs {
  display: flex;
  margin-top: 60px;
}

.inline-paragraphs p:first-child {
  margin-right: 80px;
}
</style>

<style scoped>
main {
  margin-top: 100px;
}
.main-header h6 {
  margin-bottom: 24px;
}
</style>
