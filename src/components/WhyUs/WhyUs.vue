<template>
    <section class="whyUs" data-aos="fade-up">
        <h2 class="whyUs__title">{{ $t("main.whyUs.mainTitle") }}</h2>
        <div class="container whyUs__block">
            <div class="whyUs__item">
                <div class="whyUs__top">
                    <img src="@/assets/img/users.svg" alt="">
                    <h3 class="whyUs__name">{{ $t("main.whyUs.title1") }}</h3>
                </div>
                <p class="whyUs__text">{{ $t("main.whyUs.text1") }}</p>
            </div>
            <div class="whyUs__item">
                <div class="whyUs__top">
                    <img src="@/assets/img/coins.svg" alt="">
                    <h3 class="whyUs__name">{{ $t("main.whyUs.title2") }}</h3>
                </div>
                <p class="whyUs__text">{{ $t("main.whyUs.text2") }}</p>
            </div>
            <div class="whyUs__item">
                <div class="whyUs__top">
                    <img src="@/assets/img/globe.svg" alt="">
                    <h3 class="whyUs__name">{{ $t("main.whyUs.title3") }}</h3>
                </div>
                <p class="whyUs__text">{{ $t("main.whyUs.text3") }}</p>
            </div>
            <div class="whyUs__item">
                <div class="whyUs__top">
                    <img src="@/assets/img/puzzle.svg" alt="">
                    <h3 class="whyUs__name">{{ $t("main.whyUs.title4") }}</h3>
                </div>
                <p class="whyUs__text">{{ $t("main.whyUs.text4") }}</p>
            </div>
            <div class="whyUs__item">
                <div class="whyUs__top">
                    <img src="@/assets/img/sheild.svg" alt="">
                    <h3 class="whyUs__name">{{ $t("main.whyUs.title5") }}</h3>
                </div>
                <p class="whyUs__text">{{ $t("main.whyUs.text5") }}</p>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style>
    
</style>