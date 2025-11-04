<template>
  <Header />
  <main class="main">
    <section class="cases">
      <div class="container">
        <!-- Заголовок -->
        <div class="cases__intro" data-aos="fade-up">
          <h1 class="cases__title">{{ $t('cases.title') }}</h1>
          <p class="cases__subtitle">{{ $t('cases.subtitle') }}</p>
        </div>

        <!-- Список кейсов -->
        <div class="cases__list">
          <div
            class="case-card"
            v-for="(caseItem, i) in casesList"
            :key="i"
            data-aos="fade-up"
            :data-aos-delay="i * 120"
            @click="openCase(caseItem)"
          >
            <div class="case-card__overlay"></div>
            <div class="case-card__content">
              <h2>{{ caseItem.title }}</h2>
              <p class="case-card__text">{{ caseItem.text }}</p>
              <div class="case-card__client">
                <strong>{{ caseItem.client }}</strong>
                <p class="case-card__quote">“{{ caseItem.quote }}”</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Модальное окно -->
      <div v-if="selectedCase" class="modal" @click.self="selectedCase = null">
        <div class="modal__content" data-aos="zoom-in">
          <button class="modal__close" @click="selectedCase = null">&times;</button>
          <h2>{{ selectedCase.title }}</h2>
          <p class="modal__text">{{ selectedCase.fullText || selectedCase.text }}</p>
          <p class="modal__client"><strong>{{ selectedCase.client }}</strong></p>
          <p class="modal__quote">“{{ selectedCase.quote }}”</p>
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
      selectedCase: null,
    };
  },
  computed: {
    casesList() {
      const currentLocale = this.$i18n.locale;
      const messages = this.$i18n.messages[currentLocale];
      return messages.cases?.list || [];
    },
  },
  methods: {
    openCase(item) {
      this.selectedCase = item;
    },
  },
};
</script>

<style scoped lang="scss">
.cases {
  background: linear-gradient(180deg, #fffafc, #fafafa);
  padding: 100px 0;

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__intro {
    text-align: center;
    margin-bottom: 70px;
  }

  &__title {
    font-size: 2.4rem;
    font-weight: 800;
    background: linear-gradient(90deg, #b61c1c, #ff6f61);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__subtitle {
    color: #666;
    font-size: 1.1rem;
    margin-top: 15px;
    max-width: 650px;
    margin-inline: auto;
    line-height: 1.7;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 35px;
  }

  .case-card {
    position: relative;
    cursor: pointer;
    background: linear-gradient(135deg, #ffffff 0%, #ffeaea 100%);
    border-radius: 18px;
    padding: 40px 30px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: all 0.4s ease;
    transform: translateY(0);

    &:hover {
      transform: translateY(-6px) scale(1.02);
      box-shadow: 0 14px 30px rgba(182, 28, 28, 0.2);
    }

    &__overlay {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, rgba(182, 28, 28, 0.08), transparent 70%);
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 0;
    }

    &:hover .case-card__overlay {
      opacity: 1;
    }

    &__content {
      position: relative;
      z-index: 1;

      h2 {
        font-size: 1.3rem;
        font-weight: 700;
        color: #b61c1c;
        margin-bottom: 12px;
      }

      .case-card__text {
        font-size: 0.98rem;
        color: #333;
        line-height: 1.6;
        margin-bottom: 18px;
      }

      .case-card__client {
        border-top: 1px solid #eee;
        padding-top: 12px;

        strong {
          display: block;
          color: #111;
          font-weight: 600;
        }

        .case-card__quote {
          color: #b61c1c;
          font-style: italic;
          font-size: 0.95rem;
          margin-top: 6px;
        }
      }
    }
  }

  /* ===== Модалка ===== */
  .modal {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    backdrop-filter: blur(4px);

    &__content {
      background: #fff;
      border-radius: 16px;
      padding: 40px;
      max-width: 600px;
      width: 90%;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      position: relative;
      text-align: center;
      animation: fadeIn 0.4s ease;
    }

    &__close {
      position: absolute;
      top: 12px;
      right: 18px;
      background: none;
      border: none;
      font-size: 2rem;
      cursor: pointer;
      color: #b61c1c;
      transition: transform 0.2s ease;

      &:hover {
        transform: scale(1.2);
      }
    }

    h2 {
      font-size: 1.5rem;
      color: #b61c1c;
      margin-bottom: 15px;
    }

    .modal__text {
      font-size: 1rem;
      color: #333;
      margin-bottom: 15px;
      line-height: 1.6;
    }

    .modal__client {
      font-weight: 600;
      color: #222;
      margin-bottom: 5px;
    }

    .modal__quote {
      color: #b61c1c;
      font-style: italic;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>
