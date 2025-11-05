<template>
  <Header />
  <main class="main">
    <section class="about">
      <div class="container">
        <div class="about__block about__mission" data-aos="fade-up">
          <div class="about__content">
            <h2 class="about__title">{{ $t("about.title") }}</h2>
            <p class="about__text">
              {{ $t("about.text") }}
            </p>
          </div>
          <div class="about__image">
            <img src="@/assets/img/mission.jpg" alt="Our Mission" />
          </div>
        </div>
        <div class="about__block about__expertise" data-aos="fade-up">
          <h2 class="about__title">{{ $t("about.experienceTitle") }}</h2>
          <div class="about__content">
            <p class="about__text">
              {{ $t("about.experienceText") }}
            </p>
            <div class="about__image">
              <img src="@/assets/img/experience.jpg" alt="Our Experience" />
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
      team: [
        {
          name: "Ali Mamatov",
          role: "CEO / Founder",
          photo: require("@/assets/img/person-1.jpg"),
        },
        {
          name: "Sofia Karimova",
          role: "HR Director",
          photo: require("@/assets/img/person-2.jpg"),
        },
        {
          name: "Timur Ismoilov",
          role: "Marketing Manager",
          photo: require("@/assets/img/person-3.jpg"),
        },
        {
          name: "Laylo Rustamova",
          role: "Legal Advisor",
          photo: require("@/assets/img/person-4.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.about {
  background: #fff;
  padding: 100px 0;

  &__block {
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__title {
    font-size: 2.2rem;
    color: #1c1c1c;
    font-weight: 700;
    margin-bottom: 20px;
    position: relative;

    &::after {
      content: "";
      width: 70px;
      height: 3px;
      background: #b61c1c;
      display: block;
      margin-top: 10px;
      border-radius: 2px;
    }

    &.center {
      text-align: center;

      &::after {
        margin: 10px auto 0;
      }
    }
  }

  &__subtitle {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 40px;
    font-size: 1.1rem;
    color: #666;
  }

  &__text {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #444;
    max-width: 600px;
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;
  }

  &__image {
    flex: 1;
    min-width: 300px;

    img {
      width: 100%;
      border-radius: 14px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      object-fit: cover;
    }
  }

  /* Команда */
  &__team {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 35px;
  }

  .team-card {
    background: #fff;
    border-radius: 16px;
    text-align: center;
    overflow: hidden;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);

    &__image {
      background: linear-gradient(180deg, #b61c1c 0%, #8a1111 100%);
      padding: 4px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 12px;
      }
    }

    &__info {
      padding: 18px;

      h3 {
        font-size: 1.15rem;
        color: #222;
        margin-bottom: 6px;
      }

      .team-card__role {
        color: #b61c1c;
        font-weight: 500;
        font-size: 0.95rem;
      }
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 26px rgba(0, 0, 0, 0.15);
    }
  }

  /* Для миссии и опыта */
  &__mission,
  &__expertise {
    .about__content {
      flex-direction: row;
      @media (max-width: 900px) {
        flex-direction: column;
      }
    }
  }
}
</style>
