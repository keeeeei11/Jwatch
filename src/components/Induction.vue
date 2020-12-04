<template>
    <div class="induction">
      <a :href=url>
        <div class="induction-contants">
          <div class="induction-title">
            <p>{{ title }}</p>
          </div>
          <div class="induction-description">
            <p>{{ description }}</p>
          </div>
        </div>
      </a>
    </div>
</template>

<script>
export default {
  props: {
    url: String,
    title: String,
    description: String,
  },
}
</script>

<style lang="scss">
.induction {
  margin: 0px;
  text-align: center;
  a {
    width: 100vw;
    height: 300px;
    margin-top: 50px;
    background-color: #323232;
    color: #ffffff;
    line-height: 2.5em;
    transition: background-color 0.4s linear;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  a:hover {
    background-color: #202020;
  }
}

.induction-contants {
  display: block;
}

.induction-title p {
  font-size: 21px;
}

@media (max-width: 559px) {

  .induction a {
    height: 200px;
  }

  .induction-title p {
    font-size: 18px;
  }
  .induction-description p {
    font-size: 16px;
  }
}
</style>