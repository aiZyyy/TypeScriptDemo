<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <h2>欢迎光临红浪漫洗浴中心</h2>
      <div>请选择一位美女为你服务</div>
    </div>
    <div>
      <button
        v-for="(item, index) in girls"
        v-bind:key="index"
        @click="selectGirlFun(index)"
      >
        {{ index }} : {{ item }}
      </button>
    </div>
    <div>你选择了【{{ selectGirl }}】为你服务</div>
    <div>{{ overTest }}</div>
    <button @click="overAction">点餐快乐</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  watch,
} from "vue";

interface DataProps {
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}
export default defineComponent({
  name: "App",
  // setup() {
  //   const girls = ref(["大脚", "刘英", "晓红"]);
  //   const selectGirl = ref("");
  //   const selectGirlFun = (index: number) => {
  //     selectGirl.value = girls.value[index];
  //   };
  //   //因为在模板中这些变量和方法都需要条用，所以需要return出去。
  //   return {
  //     girls,
  //     selectGirl,
  //     selectGirlFun,
  //   };
  // },

  setup() {
    const data: DataProps = reactive({
      girls: ["大脚", "刘英", "晓红"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      },
    });

    const overTest = ref("欢迎");
    const overAction = () => {
      overTest.value = overTest.value + "点餐完毕 | ";
    };
    watch([overTest, () => data.selectGirl], (oldValue, newValue) => {
      console.log(`new--->${newValue}`);
      console.log(`old--->${oldValue}`);
      document.title = newValue[0];
    });
    // onBeforeMount(() => {
    //   console.log("2-组件挂载到页面之前执行-----onBeforeMount()");
    // });

    // onMounted(() => {
    //   console.log("3-组件挂载到页面之后执行-----onMounted()");
    // });
    // onBeforeUpdate(() => {
    //   console.log("4-组件更新之前-----onBeforeUpdate()");
    // });

    // onUpdated(() => {
    //   console.log("5-组件更新之后-----onUpdated()");
    // });
    const refData = toRefs(data);
    return {
      ...refData,
      overTest,
      overAction,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
