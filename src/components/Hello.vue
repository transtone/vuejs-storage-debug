<template>
  <div class="hello">
    <h2 v-if="$store.getters.checkToken"> Logined! </h2>
    <h2 v-else> hello! </h2>
    <div>
      <button @click="login">login me!</button>
    </div>

    <div>
      <button @click="logout">logout</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Hello extends Vue {
  login() {
    this.$store.dispatch("Login").then((e) => {
      console.log(e)
    })
  }
  logout() {
    this.$store.commit("clearData")
    console.log("user logout")
  }
}
</script>
