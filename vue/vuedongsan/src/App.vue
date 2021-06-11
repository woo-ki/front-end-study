<template>
  <div class="black-bg" v-if="modalOpened">
    <div class="white-bg">
      <img :src="infos[clickIdx].image" class="img">
      <h4>{{infos[clickIdx].title}}</h4>
      <p>{{infos[clickIdx].content}}</p>
      <p>{{infos[clickIdx].price}}원</p>
      <button @click="modalOpened = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="(name, i) in menus" :key="i">{{name}}</a>
  </div>

  <Discount/>

  <div v-for="(info, i) in infos" :key="i">
    <img :src="info.image" class="img">
    <h4 @click="setModal(i)">{{info.title}}</h4>
  </div>
</template>

<script>
import infos from './assets/roomInfo.js';
import Discount from './components/Discount.vue';

export default {
  name: 'App',
  data() {
    return {
      infos: infos,
      clickIdx: 0,
      menus: ['Home', 'Shop', 'About'],
      modalOpened: false
    }
  },
  methods: {
    increase(i) {
      this.infos[i].report++
    },
    setModal(i) {
      this.modalOpened = true;
      this.clickIdx = i;
    }
  },
  components: {
    Discount,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
.img {
  width: 100%;
  margin-top: 40px;
}
body {
  margin: 0px;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
