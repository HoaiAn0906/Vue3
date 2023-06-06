<template>
  <div>
    <h1>Home</h1>
    <p v-for="(user, index) in state.users" :key="index">{{ user.name }}</p>
  </div>
</template>

<script setup>
import {onMounted, reactive} from "vue";
import UserService from "@/services/UserService";

const state = reactive({
  users: []
})

onMounted(() => {
  getUsers()
})
const getUsers = async () => {
  const response = await UserService.getUsers();
  state.users = response.data
  console.log(state.users)
}

</script>


<style scoped>

</style>