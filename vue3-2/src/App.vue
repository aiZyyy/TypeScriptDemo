<template>
  <div>
    <Suspense>
      <template #default>
        <girl-show />
      </template>
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </div>
</template>
<script lang="ts">
// import useUrlAxios from "./hooks/useURLAxios";
import GirlShow from "./components/GirlShow.vue";
import AsyncShow from "./components/AsyncShow.vue";
import { onErrorCaptured } from "vue";
const app = {
  name: "App",
  components: {
    AsyncShow,
    GirlShow,
  },
  setup() {
    onErrorCaptured((error) => {
      console.log(`error====>`, error);
      return true;
    });
    // const { result, loading, loaded } = useUrlAxios(
    //   "https://dog.ceo/api/breeds/image/random"
    // );

    // return { result, loading, loaded };
  },
};
export default app;
</script>
