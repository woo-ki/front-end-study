<template>

  <div class="menu">
    <a v-for="(name, i) in menus" :key="i">{{name}}</a>
  </div>

  <div v-for="(info, i) in infos" :key="i">
    <img :src="info.filename" class="img">
    <h4>{{info.product}}</h4>
    <p>{{info.price}}</p>
    <button v-on:click="increase(i)">허위매물신고</button> <span>신고수 : {{info.report}}</span>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      infos: [
        {product: '역삼동원룸', price: '50만원', report: 0, filename: '/room0.jpg'},
        {product: '천호동원룸', price: '60만원', report: 0, filename: '/room1.jpg'},
        {product: '마포구원룸', price: '40만원', report: 0, filename: '/room2.jpg'}
      ],
      menus: ['Home', 'Shop', 'About']
    }
  },
  methods: {
    increase(i) {
      this.infos[i].report++
    }
  },
  components: {
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
  width: 520px;
  margin-top: 15px;
}
</style>
