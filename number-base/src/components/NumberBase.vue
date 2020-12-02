<template>
  <div>
    <h1>숫자야구</h1>
    <form v-on:submit="onSubmit">
      <input type="text" ref="answer" maxlength="4" v-model="value" />
      <button type="submit">입력</button>
      <div>시도 : {{ tries.length }}</div>
      <ul v-for="t in tries" v-bind:key="t">
        <li>{{ t }}</li>
      </ul>
      <div>{{ answers }}</div>
    </form>
  </div>
</template>

<script>
// 랜덤한 숫자뽑기.
const numbers = () => {
  let Num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randomNum = [];
  for (let i = 0; i < 4; i++) {
    randomNum.push(Num.splice(Math.floor(Math.random() * Num.length), 1)[0]);
  }
  return randomNum;
};
export default {
  name: "NumberBase",
  data() {
    return {
      value: "",
      answers: numbers(),
      result: "",
      tries: [],
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      let strike = 0;
      let ball = 0;
      if (+this.value === this.answers.join("")) {
        // 전부 일치했을때.
        this.result = "홈런";
      } else {
        const valueArray = this.value.split("").map((v) => parseInt(v)); // 문자열을 배열로 바꾸어 비교.
        for (let i = 0; i < 4; i++) {
          if (valueArray[i] === this.answers[i]) {
            // 자릿수와 숫자가 일치.
            strike++;
          } else if (this.answers.includes(valueArray[i])) {
            // 숫자만 일치.
            ball++;
          }
        }
      }
      this.tries.push(`${this.value} - ${strike} 스트라이크 ${ball} 볼 입니다.`);
    },
  },
};
</script>
<style scoped></style>
