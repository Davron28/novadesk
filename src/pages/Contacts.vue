<template>
  <Header />
  <main class="main">
    <section class="contacts">
      <div class="container">
        <div class="contacts__intro" data-aos="fade-up">
          <h1 class="contacts__title">{{ $t("contacts.title") }}</h1>
          <p class="contacts__subtitle">{{ $t("contacts.subtitle") }}</p>
        </div>
        <div class="contacts__grid">
          <div class="contacts__info" data-aos="fade-up">
            <div class="info-card">
              <h3>{{ $t("contacts.office") }}</h3>
              <p>
                {{ $t("contacts.address.line1") }}<br />
                {{ $t("contacts.address.line2") }}
              </p>
            </div>
            <div class="info-card">
              <h3>{{ $t("contacts.phonesTitle") }}</h3>
              <a :href="`tel:${$t('contacts.phones.main.raw')}`">
                {{ $t("contacts.phones.main.view") }}
              </a>
              <a :href="`tel:${$t('contacts.phones.support.raw')}`">
                {{ $t("contacts.phones.support.view") }}
              </a>
            </div>
            <div class="info-card">
              <h3>Email</h3>
              <a href="mailto:info@novadesk.net">info@novadesk.net</a>
            </div>
            <div class="info-card">
              <h3>{{ $t("contacts.hoursTitle") }}</h3>
              <p>{{ $t("contacts.hours") }}</p>
            </div>
          </div>
          <div class="contacts__form" data-aos="fade-up" data-aos-delay="100">
            <form @submit.prevent="submitForm">
              <div class="field">
                <label>{{ $t("contacts.form.name") }}</label>
                <input
                  v-model="form.name"
                  :placeholder="$t('contacts.form.namePh')"
                  :class="{ invalid: errors.name }"
                />
                <small v-if="errors.name">{{ errors.name }}</small>
              </div>
              <div class="field">
                <label>{{ $t("contacts.form.email") }}</label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="you@example.com"
                  :class="{ invalid: errors.email }"
                />
                <small v-if="errors.email">{{ errors.email }}</small>
              </div>
              <div class="field">
                <label>{{ $t("contacts.form.message") }}</label>
                <textarea
                  v-model="form.message"
                  :placeholder="$t('contacts.form.messagePh')"
                  :class="{ invalid: errors.message }"
                  rows="5"
                ></textarea>
                <small v-if="errors.message">{{ errors.message }}</small>
              </div>
              <div class="field checkbox-field">
                <input type="checkbox" v-model="form.agree" id="agree" />
                <label for="agree">{{ $t("contacts.form.agree") }}</label>
                <small v-if="errors.agree">{{ errors.agree }}</small>
              </div>
              <button type="submit" class="btn" :disabled="loading">
                <span v-if="!loading">{{ $t("contacts.form.send") }}</span>
                <span v-else>{{ $t("contacts.form.sending") }}...</span>
              </button>
              <p v-if="status === 'ok'" class="status ok">{{ $t("contacts.form.success") }}</p>
              <p v-if="status === 'err'" class="status err">{{ $t("contacts.form.error") }}</p>
            </form>
          </div>
        </div>
        <div class="contacts__map" data-aos="fade-up" data-aos-delay="200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.7417460147535!2d69.32699911200996!3d41.31448147118954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5018875a2db%3A0xc94b99263c7444d8!2zMTk5LdCQLCBQYXJrZW50IFN0cmVldCAxOTkt0JAsIFRhc2hrZW50LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1762288948356!5m2!1sru!2s"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
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
      form: {
        name: "",
        email: "",
        message: "",
        agree: false,
      },
      errors: {},
      loading: false,
      status: "", // ok | err
    };
  },
  methods: {
    validate() {
      const errors = {};
      if (!this.form.name) errors.name = this.$t("contacts.errors.name");
      if (!this.form.email || !/.+@.+\..+/.test(this.form.email))
        errors.email = this.$t("contacts.errors.email");
      if (!this.form.message || this.form.message.length < 10)
        errors.message = this.$t("contacts.errors.message");
      if (!this.form.agree) errors.agree = this.$t("contacts.errors.agree");
      this.errors = errors;
      return Object.keys(errors).length === 0;
    },
    async submitForm() {
      if (!this.validate()) return;
      this.loading = true;
      this.status = "";
      try {
        await new Promise((r) => setTimeout(r, 1500));
        this.status = "ok";
        this.form = { name: "", email: "", message: "", agree: false };
      } catch (err) {
        this.status = "err";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.contacts {
  background: linear-gradient(180deg, #f9fafb, #ffffff);
  padding: 100px 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__intro {
    text-align: center;
    margin-bottom: 60px;
  }

  &__title {
    font-size: 2.3rem;
    font-weight: 800;
    color: #111;
  }

  &__subtitle {
    margin-top: 10px;
    color: #666;
    font-size: 1.05rem;
    max-width: 720px;
    margin-inline: auto;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 40px;
    margin-bottom: 50px;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  }

  /* Левая колонка */
  .contacts__info {
    display: grid;
    gap: 20px;

    .info-card {
      background: #fff;
      border-radius: 14px;
      padding: 18px 22px;
      border: 1px solid #f0f0f0;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);

      h3 {
        font-size: 1rem;
        font-weight: 700;
        color: #111;
        margin-bottom: 6px;
      }

      a {
        display: block;
        color: #b61c1c;
        font-weight: 600;
        text-decoration: none;
        margin: 4px 0;

        &:hover {
          color: #8f1212;
        }
      }

      p {
        color: #444;
        line-height: 1.6;
      }
    }
  }

  /* Форма */
  .contacts__form {
    background: #fff;
    border: 1px solid #f0f0f0;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);

    .field {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;

      label {
        font-weight: 600;
        margin-bottom: 6px;
        color: #222;
      }

      input,
      textarea {
        padding: 12px 14px;
        border: 1px solid #e5e5e5;
        border-radius: 8px;
        font-size: 0.95rem;
        background: #fafafa;
        transition: all 0.2s ease;

        &:focus {
          border-color: #b61c1c;
          box-shadow: 0 0 0 3px rgba(182, 28, 28, 0.1);
          background: #fff;
        }

        &.invalid {
          border-color: #e55353;
        }
      }

      small {
        color: #e55353;
        font-size: 0.85rem;
        margin-top: 4px;
      }
    }

    .checkbox-field {
      flex-direction: row;
      align-items: center;
      gap: 8px;

      label {
        font-weight: 500;
        color: #555;
        margin: 0;
      }
    }

    .btn {
      margin-top: 10px;
      background: #b61c1c;
      color: #fff;
      font-weight: 700;
      border: none;
      border-radius: 10px;
      padding: 12px 18px;
      cursor: pointer;
      transition: 0.2s ease;

      &:hover {
        background: #9f1818;
        transform: translateY(-2px);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    .status {
      margin-top: 12px;
      font-weight: 600;
      &.ok {
        color: #2e7d32;
      }
      &.err {
        color: #c62828;
      }
    }
  }

  &__map {
    height: 350px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.05);
  }
}
</style>
