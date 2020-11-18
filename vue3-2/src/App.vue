<template>
  <div>
    <h2>欢迎光临红浪漫洗浴中心</h2>
    <div>随机选择一位美女为你服务</div>
    <modal></modal>
    <div v-if="loading">Loading.....</div>
    <img v-if="loaded" :src="result.message" />
  </div>
</template>
<script lang="ts">
import useUrlAxios from "./hooks/useURLAxios";
import modal from "./components/Modal.vue";
const app = {
  name: "App",
  components: {
    modal,
  },
  setup() {
    const { result, loading, loaded } = useUrlAxios(
      "https://dog.ceo/api/breeds/image/random"
    );

    return { result, loading, loaded };
  },
};
export default app;
</script>
