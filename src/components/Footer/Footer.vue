<template>
  <footer class="footer">
    <div class="container footer__block">
      <div class="footer__left">
        <RouterLink class="footer__logo" to="/">
          <img src="@/assets/img/footer-logo.svg" alt="" />
        </RouterLink>
        <a href="tel:+998874591010" class="footer__number">+998(87) 459 10 10</a>
        <a href="mailto:info@novadesk.net" class="footer__email">info@novadesk.net</a>
        <p class="footer__info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, quibusdam!</p>
      </div>
      <div class="footer__lists">
        <ul class="footer__list">
          <RouterLink class="footer__link" to="/">{{ $t("footer.home") }}</RouterLink>
          <RouterLink class="footer__link" to="/about">{{ $t("footer.about") }}</RouterLink>
          <RouterLink class="footer__link" to="/services">{{ $t("footer.services") }}</RouterLink>
        </ul>
        <ul class="footer__list">
          <RouterLink class="footer__link" to="/cases">{{ $t("footer.cases") }}</RouterLink>
          <RouterLink class="footer__link" to="/contacts">{{ $t("footer.contacts") }}</RouterLink>
        </ul>
      </div>
      <ul class="footer__socials">
        <li><a href="https://www.instagram.com/novadesk.uz" class="footer__social footer__instagram" target="_blank"></a></li>
        <li><a href="https://www.facebook.com/share/1BadovGkWm/?mibextid=wwXIfr" class="footer__social footer__facebook" target="_blank"></a></li>
        <li><a href="https://www.linkedin.com/company/novadesk-uz/" class="footer__social footer__linkedin" target="_blank"></a></li>
        <li><a href="mailto:info@novadesk.net" class="footer__social footer__mail"></a></li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss">
</style>