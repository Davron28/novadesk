<template>
  <footer class="footer">
    <div class="container footer__block">
      <div class="footer__left">
        <RouterLink class="footer__logo" to="/">
          <img src="@/assets/img/footer-logo.svg" alt="" />
        </RouterLink>
        <a href="tel:+998991234567" class="footer__number">+998(99) 123 45 67</a>
        <a href="mailto:novadesk@gmail.com" class="footer__email">novadesk@gmail.com</a>
        <p class="footer__info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, quibusdam!</p>
      </div>
      <div class="footer__lists">
        <ul class="footer__list">
          <RouterLink class="footer__link" to="/">Home</RouterLink>
          <RouterLink class="footer__link" to="/about">About Us</RouterLink>
          <RouterLink class="footer__link" to="/services">Services</RouterLink>
        </ul>
        <ul class="footer__list">
          <RouterLink class="footer__link" to="/cases">Cases</RouterLink>
          <RouterLink class="footer__link" to="/news">News</RouterLink>
          <RouterLink class="footer__link" to="/contacts">Contacts</RouterLink>
        </ul>
      </div>
      <ul class="footer__socials">
        <li><a href="https://instagram.com" class="footer__social footer__instagram"></a></li>
        <li><a href="https://t.me/NkLaugh" class="footer__social footer__telegram"></a></li>
        <li><a href="tel:+998991234567" class="footer__social footer__phone"></a></li>
        <li><a href="mailto:novadesk@gmail.com" class="footer__social footer__mail"></a></li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss">
</style>