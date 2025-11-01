<template>
    <div class="container">
        <section class="call">
            <h2 class="call__title">{{$t("main.callToAction.title")}}</h2>
            <RouterLink class="call__link call__icon" to="/services">
                <span>{{$t("main.callToAction.btn")}}</span>
            </RouterLink>
            <span class="triangle"></span>
            <span class="triangle"></span>
            <span class="triangle"></span>
        </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    
</style>