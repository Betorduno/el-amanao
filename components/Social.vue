<!-- Please remove this file from your project -->
<template>
<div>
  <div class="social">
    <div class="social-items">
      <a class="my-1" href="https://www.linkedin.com/company/traincol/" target="_blank" >
        <img class="social-items-img" src="assets/img/icons/facebook-03.png" alt="Facebook" srcset="assets/img/icons/facebook-03.png" loading="lazy">
      </a>
      <a class="my-1" href="https://instagram.com/traincolsas?utm_medium=copy_link" target="_blank" >
        <img class="social-items-img" src="assets/img/icons/instagram-03.png" alt="Instagram" srcset="assets/img/icons/instagram-03.png" loading="lazy">
      </a>
      <a class="my-1" href="https://www.youtube.com/channel/UCjgDoNqIJxd3Qq8zEJ1DF3A" target="_blank">
        <img class="social-items-img" src="assets/img/icons/twitter-03.png" alt="Youtube" srcset="assets/img/icons/twitter-03.png" loading="lazy">
      </a>
    </div>
  </div>
  <div class="social-mod">
      <div class="social-mod-item">
        elamanao@gmail.com
      </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
.social {
  position:fixed;
  right:0;
  top:50%;
  transform:translateY(-50%);
  z-index: 1000;
  padding: 0 .5rem;
  &-items {
    display: flex;
    flex-direction: column;
    &-img {
      width: 4rem;
    }
  }
}
.social-mod {
  position:fixed;
  left:-4rem;
  top:50%;
  transform:translateY(-50%);
  z-index: 1000;
  padding: 0 .5rem;
  transform: rotate(-90deg);
  &-item {
    background-color: #F32735;
    border-radius: 2rem;
    padding: .8rem 1.2rem;
    font-family: 'Monserrat', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    
    color:#fff
  }
}

  @media(max-width: 766px) {
    .social, .social-mod  {
      display: none;
    }
  }
</style>
<script>
export default {
  name: 'NuxtTutorial'
}
</script>
