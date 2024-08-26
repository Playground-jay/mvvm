<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="loadUserData">Load User Data</button>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="userData">
      <p>User Name: {{ userData.name }}</p>
      <p>User Email: {{ userData.email }}</p>
    </div>
  </div>
</template>

<script>
import useUserViewModel from "../viewModel/userViewModel";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const { userData, loading, error, loadUserData } = useUserViewModel();
    return {
      userData,
      loading,
      error,
      loadUserData,
    };
  },
};
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
