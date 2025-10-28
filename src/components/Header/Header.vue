<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <router-link to="/" class="header__nav-logo">
            <img src="@/assets/img/logo.svg" alt=""/>
        </router-link>
        <button class="burger" :class="{ active: isMenuOpen }" @click="toggleMenu(); spanWhite()">
          <span :class="{spanWhite: spanColor}"></span>
          <span></span>
          <span :class="{spanWhite: spanColor}"></span>
        </button>
        <ul class="header__nav-list" :class="{ open: isMenuOpen }">
          <li><RouterLink to="/" class="header__nav-link" active-class="active-link" @click="closeMenu" :class="{spanWhite: spanColor}">Home</RouterLink></li>
          <li><RouterLink to="/about" class="header__nav-link" active-class="active-link" @click="closeMenu" :class="{spanWhite: spanColor}">About Us</RouterLink></li>
          <li><RouterLink to="/services" class="header__nav-link" active-class="active-link" @click="closeMenu" :class="{spanWhite: spanColor}">Services</RouterLink></li>
          <li><RouterLink to="/cases" class="header__nav-link" active-class="active-link" @click="closeMenu" :class="{spanWhite: spanColor}">Cases</RouterLink></li>
          <li><RouterLink to="/news" class="header__nav-link" active-class="active-link" @click="closeMenu" :class="{spanWhite: spanColor}">News</RouterLink></li>
          <li><RouterLink to="/contacts" class="header__nav-link" active-class="active-link" @click="closeMenu" :class="{spanWhite: spanColor}">Contacts</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
    data() {
        return {
            isMenuOpen: false,
            spanColor: false
        }
    },
    methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.classList.toggle("no-scroll", this.isMenuOpen);
    },
    closeMenu() {
      this.isMenuOpen = false;
      this.spanColor = false
      document.body.classList.remove("no-scroll");
    },
    spanWhite() {
      this.spanColor = !this.spanColor;
      document.body.classList.toggle("spanWhite", this.spanColor);
    },
  },
};
</script>
<style lang="scss">
</style>