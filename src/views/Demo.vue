<template>
  <div class="demo container">
    <!--    <img alt="Vue logo" src="../assets/logo.png" />-->
    <Test />
  </div>
</template>

<script>
// @ is an alias to /src
import Test from "@/components/Test.vue";

export default {
  name: "Demo",
  components: {
    Test,
  },
};
</script>
