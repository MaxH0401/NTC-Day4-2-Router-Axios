<template>
  <hr />
  <h3>state練習：{{ $store.state.message }}</h3>
  <h4>getter練習：{{ fullTitle }}</h4>
  <hr />
  姓名：<input type="text" v-model="name" />
  <br />
  職位：<input type="text" v-model="job" />
  <button @click="updateTitle">更新資料</button>
  <h3>mutation練習：{{ $store.getters.title }}</h3>
  <hr />
  <button @click="updateTitleByApi">Api 更新資料</button>

  <nav>
    <li v-for="i in 10" :key="i">
      <router-link :to="`/users/${i}`">使用者：{{ i }}</router-link>
    </li>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  computed: {
    fullTitle() {
      return this.$store.getters.fullTitle;
      //getter computed
    },
  },
  methods: {
    updateTitle() {
      this.$store.commit("setTitle", {
        name: this.name,
        job: this.job,
      });
    },
    updateTitleByApi() {
      this.$store.dispatch("setTitleByApi", { id: this.id });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
