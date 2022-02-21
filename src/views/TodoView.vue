<template>
  <h1>User {{ userId }}的Todo</h1>
  <ol>
    <li v-for='todo in todos' :key='todo'>
      <!-- todos 是 default data -->
      <h4>{{ todo.title }}</h4>
      {{$store.state.message}}
      是否完成?<input type="checkbox" v-model="todo.completed" />
    </li>
  </ol>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      todos: [],
    };
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    },
  },
  mounted() {
    //一進來頁面就會執行的程式，因為切進這頁時，component有切換，所以不須再watch監聽變化
    this.fetchUserTodos(this.userId);
  },
  methods: {
    fetchUserTodos(id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
        .then((res) => (this.todos = res.data));
        // console.log('this',this)
        // 這裡的this是todos: []
        // 舊的data會消滅掉
    },
  },
};
</script>
