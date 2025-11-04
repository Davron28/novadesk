<template>
  <Header />
  <main class="main">
    <section class="services">
      <div class="container">
        <div class="services__intro" data-aos="fade-up">
          <h1 class="services__title">{{ $t("services.title") }}</h1>
          <p class="services__subtitle">{{ $t("services.subtitle") }}</p>
        </div>
        <div class="services__block" data-aos="fade-up">
          <h2 class="services__section-title">{{ $t("services.internationalTitle") }}</h2>

          <div class="services__grid">
            <div
              class="service-card"
              v-for="(service, i) in international"
              :key="i"
              :data-aos="'fade-up'"
              :data-aos-delay="100 * i"
            >
              <div class="service-card__icon">
                <img :src="service.image" :alt="$t(`services.international.${i + 1}.title`)" />
              </div>
              <div class="service-card__body">
                <h3>{{ $t(`services.international.${i + 1}.title`) }}</h3>
                <p>{{ $t(`services.international.${i + 1}.text`) }}</p>
              </div>
              <div class="service-card__glow"></div>
            </div>
          </div>
        </div>
        <div class="services__block" data-aos="fade-up">
          <h2 class="services__section-title">{{ $t("services.uzbekTitle") }}</h2>
          <div class="services__grid">
            <div
              class="service-card"
              v-for="(service, i) in uzbek"
              :key="i"
              :data-aos="'fade-up'"
              :data-aos-delay="100 * i"
            >
              <div class="service-card__icon">
                <img :src="service.image" :alt="$t(`services.uzbek.${i + 1}.title`)" />
              </div>
              <div class="service-card__body">
                <h3>{{ $t(`services.uzbek.${i + 1}.title`) }}</h3>
                <p>{{ $t(`services.uzbek.${i + 1}.text`) }}</p>
              </div>
              <div class="service-card__glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  components: { Header, Footer },
  data() {
    return {
      international: [
        { image: require("@/assets/img/services-1.svg") },
        { image: require("@/assets/img/services-2.svg") },
        { image: require("@/assets/img/services-3.svg") },
        { image: require("@/assets/img/services-4.svg") },
        { image: require("@/assets/img/services-5.svg") },
        { image: require("@/assets/img/services-6.svg") },
      ],
      uzbek: [
        { image: require("@/assets/img/servicesUz-1.svg") },
        { image: require("@/assets/img/servicesUz-2.svg") },
        { image: require("@/assets/img/servicesUz-3.svg") },
        { image: require("@/assets/img/servicesUz-4.svg") },
        { image: require("@/assets/img/servicesUz-5.svg") },
        { image: require("@/assets/img/servicesUz-6.svg") },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.services {
  background: linear-gradient(180deg, #fdfdfd, #fafafa);
  padding: 100px 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__intro {
    text-align: center;
    margin-bottom: 80px;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #111;
    margin-bottom: 10px;
  }

  &__subtitle {
    color: #555;
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  &__section-title {
    text-align: center;
    font-size: 1.9rem;
    font-weight: 700;
    color: #1b1b1b;
    margin: 50px 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }

  .service-card {
    position: relative;
    background: #fff;
    border-radius: 14px;
    padding: 40px 25px;
    text-align: center;
    overflow: hidden;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.05);
    transition: all 0.4s ease;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(182, 28, 28, 0.12);
    }

    &__icon {
      position: relative;
      margin-bottom: 20px;
      img {
        width: 55px;
        height: 55px;
        object-fit: contain;
        transition: transform 0.3s ease;
      }
    }

    &:hover img {
      transform: scale(1.1);
    }

    &__body {
      h3 {
        font-size: 1.1rem;
        font-weight: 600;
        color: #111;
        margin-bottom: 10px;
      }

      p {
        color: #555;
        font-size: 0.95rem;
        line-height: 1.6;
      }
    }

    &__glow {
      content: "";
      position: absolute;
      top: -30%;
      left: -30%;
      width: 160%;
      height: 160%;
      background: radial-gradient(circle, rgba(182, 28, 28, 0.08), transparent 70%);
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    &:hover .service-card__glow {
      opacity: 1;
    }
  }
}
</style>
