<template>
  <div class="flag-dropdown">
    <button @click="toggleMenu" class="flag-btn">
      <img :src="selectedFlag.src" :alt="selectedFlag.name" />
      <span>{{ selectedFlag.name }}</span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>

    <div v-if="isOpen" class="dropdown-menu">
      <div
        v-for="flag in flags"
        :key="flag.code"
        @click="selectFlag(flag)"
        class="dropdown-item"
      >
        <img :src="flag.src" :alt="flag.name" />
        <span>{{ flag.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      flags: [
        {
          code: "en",
          name: "English (US)",
          src: require("@/assets/img/en.svg"),
        },
        {
          code: "ru",
          name: "Russian",
          src: require("@/assets/img/ru.svg"),
        },
      ],
      selectedFlag: null,
    };
  },

  created() {
    const savedLang =
      this.$store.getters.currentLanguage ||
      localStorage.getItem("lang") ||
      "en";
    this.$i18n.locale = savedLang;
    const foundFlag = this.flags.find((f) => f.code === savedLang);
    this.selectedFlag = foundFlag || this.flags[0];
  },

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    selectFlag(flag) {
      this.selectedFlag = flag;
      this.isOpen = false;
      this.$i18n.locale = flag.code;
      this.$store.dispatch("changeLanguage", flag.code);
      localStorage.setItem("lang", flag.code);
    },
  },
};
</script>
<style>
</style>