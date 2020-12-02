<template>
  <div>
    <h1>반응속도 테스트</h1>
    <div id="screen" v-bind:class="state" @click="onClickScreen">{{ message }}</div>
    <div>반응속도: {{ result }}ms</div>
  </div>
</template>

<script>
let startTime = 0;
let endTime = 0;
let timeOut = null;
export default {
  name: "ReactionRate",
  data() {
    return {
      state: "waiting",
      result: "",
      message: "클릭하여 시작하세요.",
    };
  },
  methods: {
    onClickScreen() {
      if (this.state === "waiting") {
        this.state = "ready";
        this.message = "초록색이 되면 클릭하세요!";
        timeOut = setTimeout(() => {
          this.state = "now";
          this.message = "지금 클릭하세요!!";
          startTime = new Date();
        }, Math.floor(Math.random() * 1000) + 2000);
      } else if (this.state === "ready") {
        this.state = "waiting";
        this.message = "너무 성급하시네요!";
        clearTimeout(timeOut);
      } else if (this.state === "now") {
        endTime = new Date();
        this.state = "waiting";
        this.message = "클릭하여 시작하세요.";
        this.result = endTime - startTime;
      }
    },
  },
};
</script>
<style scoped>
#screen {
  text-align: center;
  width: 500px;
  height: 500px;
}
#screen.waiting {
  background-color: aqua;
}
#screen.ready {
  background-color: red;
  color: white;
}
#screen.now {
  background-color: greenyellow;
}
</style>
