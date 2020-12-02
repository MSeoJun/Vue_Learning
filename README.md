# Vue_Learning

## Vew.js를 사용하는 이유

1. 학습 곡선이 낮다.
2. 컴포넌트를 분리하여 관리한다.
3. 가볍고 빠르다.
4. View 최적화
5. 많은 모듈

## CDN

---

```javascript
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

## Vue.js사용해보기

```javascript
// Vue.js 선언문
const app = new Vue({
    el: "#root",
    data: {
        value: "";
        click: false,
    },
    methods: {
        onClick() {
            this.value = "test";
        }
    }
})

// HTML안에서 변수 사용

<div>{{value}}</div>

// if사용

// 클릭됨
<div v-if="click"></div>
//클릭안됨
<div v-else></div>
```

## 컴포넌트 만들가.

- 컴포넌트명은 CamelCase보다 <br>
- CababCase로 작성해주는 것이 좋음 <br>
- ex - ComponentName X => component-name O

```javascript
Vue.component("컴포넌트명", {
  template: `
        <html코드>
        </>
    `,
  data() {
    return {
      value: "test",
    };
  },
  methods: {},
});
```

---

## 구구단 만들어보기.

---

<img src="https://github.com/MSeoJun/Vue_Learning/blob/main/GitImages/gugudan.PNG?raw=true">

---

### 구구단 Vue코드.

```javascript
const app = new Vue({
  el: "#root",
  data: {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: "",
    result: "",
  },
  methods: {
    onClick(e) {
      e.preventDefault();
      if (this.first * this.second === +this.value) {
        this.result = "정답";
        this.first = Math.ceil(Math.random() * 9);
        this.second = Math.ceil(Math.random() * 9);
        this.value = "";
        this.$refs.answer.focus();
      } else {
        this.result = "땡!";
        this.value = "";
        this.$refs.answer.focus();
      }
    },
  },
});
```

---

## 끝말잇기 만들어보기.

---

<img src="https://github.com/MSeoJun/Vue_Learning/blob/main/GitImages/WordRelay1.PNG?raw=true" height="84" width="250">
<img src="https://github.com/MSeoJun/Vue_Learning/blob/main/GitImages/WordRelay2.PNG?raw=true">

---

### 끝말잇기 Vue코드.

```javascript
// 컴포넌트 만들어서 적용
Vue.component("word-relay", {
  template: `
        <div>
            <form v-on:submit="onClick">
            <div>{{word}}</div>
                <input type="text" v-model="value" ref="answer" />
                <button type="submit">입력</button>
            <div>{{result}}</div>
            </form>
        </div>
            `,
  data() {
    return { word: "기차", value: "", result: "" };
  },
  methods: {
    onClick(e) {
      e.preventDefault();
      if (this.word[this.word.length - 1] === this.value[0]) {
        // 정답처리
        this.result = "정답";
        this.word = this.value;
        this.value = "";
        this.$refs.answer.focus();
      } else {
        // 오답처리
        this.result = "땡!";
        this.value = "";
        this.$refs.answer.focus();
      }
    },
  },
});
```

### 숫자야구 만들어보기.

---

<img src="https://github.com/MSeoJun/Vue_Learning/blob/main/GitImages/NumberBase.PNG?raw=true">

---

## 숫자야구 Vue코드.

```javascript
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
        // 문자열을 배열로 바꾸어 비교.
        const valueArray = this.value.split("").map((v) => parseInt(v));
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
```

---

## 반응속도 테스트 만들어보기.

---

<img src="https://github.com/MSeoJun/Vue_Learning/blob/main/GitImages/ReactionRate.PNG?raw=true" height="400" width="400">

---

### 반응속도 테스트 Vue코드.

```javascript
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
```
