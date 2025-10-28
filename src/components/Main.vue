<template>
  <main class="main">
    <HeaderContent />
    <Advantage />
    <CallToAction/>
  </main>
</template>
<script>
import HeaderContent from "@/components/HeaderContent/HeaderContent.vue";
import Advantage from "@/components/Advantage/Advantage.vue";
import CallToAction from '@/components/СallToAction/СallToAction.vue'
export default {
  components: {
    HeaderContent,
    Advantage,
    CallToAction
  },
};
</script>
<style lang="scss">
</style>