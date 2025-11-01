<template>
    <div class="container">        
        <section class="header__content">
            <div class="header__content-left" data-aos="fade-left">
                <h1 class="header__content-title">{{ $t("header.title") }}</h1>
                <p class="header__content-text">{{ $t("header.text") }}</p>
                <button class="header__content-btn">{{ $t("header.btn") }}</button>
            </div>
            <div class="header__content-right" data-aos="fade-right">
                <img src="@/assets/img/header-content.jpg" alt="" class="header__content-img">
                <span class="triangle"></span>
                <span class="triangle"></span>
                <span class="triangle"></span>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    
</style>