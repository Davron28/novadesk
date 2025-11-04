<template>
  <main class="main">
    <HeaderContent />
    <Advantage />
    <WhyUs />
    <CallToAction/>
  </main>
</template>
<script>
import HeaderContent from "@/components/HeaderContent/HeaderContent.vue";
import Advantage from "@/components/Advantage/Advantage.vue";
import WhyUs from "@/components/WhyUs/WhyUs.vue";
import CallToAction from '@/components/СallToAction/СallToAction.vue'
export default {
  components: {
    HeaderContent,
    Advantage,
    WhyUs,
    CallToAction
  },
};
</script>
<style lang="scss">
</style>