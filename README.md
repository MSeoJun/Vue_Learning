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
    },
    methods: {
        onClick() {
            this.value = "test";
        }
    }
})
```
