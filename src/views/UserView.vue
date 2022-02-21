<template>
  <h3>state練習：{{ $store.state.message }}</h3>
  <h4>getter練習：{{ fullTitle }}</h4>
  <h1>UserId: {{ $route.params.userId }}</h1>
  <div>Name: {{ userInfo.name }}</div>
  <div>Email: {{ userInfo.email }}</div>
  <hr />
  <router-link :to="`/users/${userId}/todos`"
    >{{ userInfo.name }} 的 todo</router-link
  >
  <router-view></router-view>
  <!-- 因為todos是routes的children，要用router-view呈現 -->
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      userInfo: {},
    };
  },
  computed: {
    //A01.$route.params的userId會因為跳轉使用者而改變，我們可以利用這個變數來作為"改變"事件的契機
    userId() {
      return this.$route.params.userId;
    },
    fullTitle(){
      return this.$store.getters.fullTitle;
      //getter computed
    }
  },
  watch: {
    //A02.監聽userId被變動的事件
    userId: function (val) {
      this.fetchUserInfo(val);
    },
  },
  mounted() {
    //一進來頁面就會執行的程式
    this.fetchUserInfo(this.userId);
  },
  methods: {
    //優化重複程式碼
    fetchUserInfo(id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => (this.userInfo = response.data));
    },
  },
};
</script>