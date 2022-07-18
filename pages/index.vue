<template>
  <div>

    <!-- Add your site or application content here -->

    <!-- Start PReloader -->
    <div id="page-preloader" class="page-loading clearfix">
      <div class="page-load-inner">
        <div class="preloader-wrap">
          <div class="wrap-2">
            <div class="">
              <img width="100px" src="assets/img/logo-main.svg" alt="Brook Preloader" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End PReloader -->
    <!-- social -->
    <Social></Social>
    <!-- End social -->
    <!-- Wrapper -->
    <div id="wrapper" class="wrapper bg_color--4 all-wrapper">
      
      <!-- Header -->
      <header class="
        br_header
        header-default header-transparent
        bg-white
        light-logo--version
        haeder-fixed-width
        headroom--sticky
        header-mega-menu
        clearfix
      ">
      <div class="welcome text-center mx-auto">
        <h3>Bienvenidos a nuestro sitio.</h3>
      </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              
              <b-navbar toggleable="lg" type="white">
                <b-navbar-brand href="#"><img width="150px" class="my-3" src="assets/img/logo-main.svg" alt="Brook Preloader" /></b-navbar-brand>

                <b-navbar-toggle target="nav-collapse">
                  <template #default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                  </template>
                </b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>

                  <!-- Right aligned nav items -->
                  <b-navbar-nav class="ml-auto">
                    <b-nav-item class="menu-links" href="#" right>Home <b-icon icon="caret-down-fill" scale=".5" variant="danger"></b-icon></b-nav-item>
                    <b-nav-item class="menu-links" href="#" right>Granito Social <b-icon icon="caret-down-fill" scale=".5" variant="danger"></b-icon></b-nav-item>
                    <b-nav-item class="menu-links" href="#" right>Protagonistas <b-icon icon="caret-down-fill" scale=".5" variant="danger"></b-icon></b-nav-item>
                    <b-nav-item class="menu-links" href="#" right>Canales <b-icon icon="caret-down-fill" scale=".5" variant="danger"></b-icon></b-nav-item>
                    <b-nav-item class="menu-links" href="#" right>Aliados <b-icon icon="caret-down-fill" scale=".5" variant="danger"></b-icon></b-nav-item>
                    <b-nav-item class="menu-links" href="#" right>Trabajo <b-icon icon="caret-down-fill" scale=".5" variant="danger"></b-icon></b-nav-item>
                    <b-nav-item class="menu-links" href="#" right>Contáctanos <b-icon icon="caret-down-fill" scale=".5" variant="danger"></b-icon></b-nav-item>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
            </div>
          </div>
        </div>
      </header>
      <!--// Header -->

      <!-- CAROUSEL VUE BOOTSTRAP -->
      <b-carousel id="carousel-1"  :interval="4000" controls  background="#ababab"
        img-width="10000" img-height="100vh" style="text-shadow: 1px 1px 2px #333;">
        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=53">
          <div class="carousel-section">
            <h2>Nuestra<br>Historia</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis dolor et eos quaerat error excepturi velit distinctio? Perspiciatis, omnis.</p>
          </div>
        </b-carousel-slide>
        
      </b-carousel>
      <!-- END CAROUSEL VUE BOOTSTRAP -->

      <!-- Page Conttent -->
      <main class="page-content">
        <!-- Start About Area -->
        <div class="bk-about-area section-ptb-100" id="section-about">
          <div class="container">
            <div class="row about--creative align-items-center">
              <div class="col-lg-6 col-md-12 col-12">
                <div class="thumb text-start text-lg-left wow move-up">
                  <img src="assets/img/about/SVG/about.png" alt="about images" />
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-12 mt_md--40 mt_sm--40">
                <div class="content pl--80 pl_md--5 pl_sm--5">
                  <div class="title--creative wow move-up">
                    <h3 class="heading">Que hemos logrado</h3>
                    <h2>
                      Granito <br>social
                    </h2>
                  </div>
                  <p class="wow move-up">
                    Lorem ipsum Lorem ipsum dolor sit amet, consectetuer adipiscing Lorem ipsum dolor sit amet, c
                  </p>
                  <a class="about-btn wow move-up" href="#"><span>Conoce más</span><i
                      class="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End About Area -->

        <!-- Start Service Area -->

        <div class="bk-service-area section-ptb-100">
          <div class="container">
            <div class="row">
              <carousel 
                :perPageCustom="[[200, 1],[480, 1], [768, 3]]"
                :mouse-drag="true"
                :autoplay="true"
                :autoplayTimeout="2000"
              >
                <slide :key="idx" v-for="(amanao, idx) in listAmanao" >
                  <!-- Start Single Service -->
                  <div :class="`wow move-up ${idx+1 < countListAmanao ? 'border-right border-white': ''} `">
                    <div class="service service--2 mx-5">
                      <div class="thumb">
                        <img :src="`assets/img/team/amanao${amanao.img}.png`" alt="images" />
                      </div>
                      <div class="content">
                        <h4>{{amanao.name}}</h4>
                        <h5>{{amanao.position}}</h5>
                        <hr class="w-100 color-white"/>
                        <p>
                          {{amanao.description}}
                        </p>
                      </div>
                    </div>
                  </div>
                  <!-- End Single Service -->
                </slide>
              </carousel>
            </div>
          </div>
        </div>
        <!-- End Service Area -->

        <!-- Start Portfolio Area -->
        <div class="bk-portfolio-area creative-portfolio section-ptb-100">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-title--between wow move-up">
                  <div class="title">
                    <h3>Aquí llegamos</h3>
                    <h6 class="color-white">Reportajes el amañao</h6>
                  </div>
                  <div class="section-btn mt_mobile--30">
                    <a class="button-text" href="#"><span>Conóce todas las entrevistas</span><i class="fa fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="portfolio-wrapper mt--40 wow move-up">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="porfolio-swip-horizontal" style="overflow: hidden">
                    <div class="swiper-wrapper">
                      <carousel 
                        :perPageCustom="[[200, 1],[480, 1], [768, 3]]"
                        :mouse-drag="true"
                        :autoplay="true"
                        :autoplayTimeout="2000"
                      >
                        <slide>
                          <!-- Start Single Portfolio -->
                            <div class="portfolio portfolio_style--2 mt--30 swiper-slide">
                              <div class="thumb">
                                <iframe class="video-portfolio" src="https://www.youtube.com/embed/eOrzImQ1gDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              </div>
                            </div>
                          <!-- End Single Portfolio -->
                        </slide>
                        <slide>
                          <!-- Start Single Portfolio -->
                            <div class="portfolio portfolio_style--2 mt--30 swiper-slide">
                              <div class="thumb">
                                <iframe  class="video-portfolio" src="https://www.youtube.com/embed/eOrzImQ1gDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              </div>
                            </div>
                          <!-- End Single Portfolio -->
                        </slide>
                        <slide>
                          <!-- Start Single Portfolio -->
                            <div class="portfolio portfolio_style--2 mt--30 swiper-slide">
                              <div class="thumb">
                                <iframe class="video-portfolio"  src="https://www.youtube.com/embed/eOrzImQ1gDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              </div>
                            </div>
                          <!-- End Single Portfolio -->
                        </slide>
                        <slide>
                          <!-- Start Single Portfolio -->
                            <div class="portfolio portfolio_style--2 mt--30 swiper-slide">
                              <div class="thumb">
                                <iframe class="video-portfolio" src="https://www.youtube.com/embed/eOrzImQ1gDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              </div>
                            </div>
                          <!-- End Single Portfolio -->
                        </slide>
                      </carousel>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Portfolio Area -->

        <!-- Start CounterUp Area -->
        <div class="bk-number-speaks section-ptb-100">
          <div class="container">
            <div class="row">
              <div class="title--creative d-flex justify-content-center">
                <h2 class="mb-5">
                  Nuestros Aliados
                </h2>
              </div>
              <div class="
                col-lg-12 col-xl-12 col-md-12 col-sm-12 col-12
                mt_md--40
                mt_sm--40
              ">
                <div class="speakers-number-wrap counter-grid">
                  <!-- Start Single Count -->
                  <div class="counter-style--2 wow move-up mt-2">
                    <div class="icon">
                      <img width="150" src="assets/img/allies/logo-02.png" />
                    </div>
                  </div>
                  <!-- End Single Count -->

                  <!-- Start Single Count -->
                  <div class="counter-style--2 wow move-up mt-2">
                    <div class="icon">
                      <img width="150" src="assets/img/allies/logo-02.png" />
                    </div>
                  </div>
                  <!-- End Single Count -->

                  <!-- Start Single Count -->
                  <div class="counter-style--2 wow move-up mt-2">
                    <div class="icon">
                      <img width="150" src="assets/img/allies/logo-02.png" />
                    </div>
                  </div>
                  <!-- End Single Count -->

                  <!-- Start Single Count -->
                  <div class="counter-style--2 wow move-up mt-2">
                    <div class="icon">
                      <img width="150" src="assets/img/allies/logo-02.png" />
                    </div>
                  </div>
                  <!-- End Single Count -->
                </div>
              </div>
              
              <img class="w-100 my-5" src="assets/img/allies/line-02.png" alt="line"/>
              <div class="col-lg-5 col-xl-5 col-md-12 col-sm-12 col-12">
                <div class="number-speaks-wrapper">
                  <div class="content wow move-up">
                    <div class="title--creative text-start">
                      <h2>
                        Sembramos lo<br />
                        <span class="title--creative2">que cosechamos</span>
                      </h2>
                      <p>
                        Nothing is more important than having a <br />
                        desire deep down to achieve goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="
                col-lg-7 col-xl-7 col-md-12 col-sm-12 col-12
                mt_md--40
                mt_sm--40
              ">
                <div class="speakers-number-wrap counter-grid">
                  <!-- Start Single Count -->
                  <div class="counter-style--2 wow move-up">
                    <div class="icon">
                      <img class="w-50" src="assets/img/allies/car-02.png" />
                    </div>
                    <span class="count">2034</span>
                    <div class="content">
                      <h6>Unique designs</h6>
                    </div>
                  </div>
                  <!-- End Single Count -->

                  <!-- Start Single Count -->
                  <div class="counter-style--2 wow move-up">
                    <div class="icon">
                      <img class="w-50" src="assets/img/allies/coffe-02.png" />
                    </div>
                    <span class="count">1234</span>
                    <div class="content">
                      <h6>Completed projects</h6>
                    </div>
                  </div>
                  <!-- End Single Count -->

                  <!-- Start Single Count -->
                  <div class="counter-style--2 wow move-up">
                    <div class="icon">
                      <img class="w-50" src="assets/img/allies/figure-02.png" />
                    </div>
                    <span class="count">4585</span>
                    <div class="content">
                      <h6>Global partners</h6>
                    </div>
                  </div>
                  <!-- End Single Count -->
                </div>
                <div class="row d-flex justify-content-center my-3">
                  <button type="button" class="btn-allies">Apoya Nuestra Causa</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End CounterUp Area -->

        <!-- Start Row Columns Area -->
        <div class=" brook-row-column-area position-relative clearfix">
          <div class="aaa ptb--150">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12">
                  <div class="call-to-action callto-action--1">
                    <div class="content">
                      <h1 class="text-white mb-2">TRABAJA<br>CON NOSOTROS</h1>
                      <p class=" text-call text-center mx-auto text-white my-3">Lorem ipsum Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
                      <h5 class="text-white">¡Unéte al proceso!</h5>
                      <div class="row d-flex justify-content-center my-3">
                        <button type="button" class="btn-us">QUIERO SER VENDEDOR</button>
                      </div>
                      <div class="row d-flex justify-content-center my-3">
                        <img class="mt-5 logo" src="assets/img/logo-main.svg" alt="Brook Preloader" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Row Columns Area -->
      </main>
      <!--// Page Conttent -->
      
    <!-- Footer -->
      <footer id="page-footer-wrapper" class="page-footer bg_color--4 ">
        <div class="copyright copyright--2 plr_sm--30">
          <div class="container ptb--40">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="copyright-left text-md-start text-start">
                  <p class="m-0">© 2025 Moss Cretivo y Madatto. Todos los derechos reservados.</p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="copyright-right text-center text-sm-end">
                  <div class="input-box">
                    <input type="email" placeholder="Email" />
                    <button><i class="ion-android-arrow-forward"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!--// Footer -->
    </div>


  </div>

</template>
<style lang="css">
  .welcome {
    background-color: #F32735;
    margin: 0;
    padding: 0.6rem 0;
  }
  .welcome h3 {
    color: #fff;
    font-size: 1.2rem;
  }
  .menu-links {
    color: #F32735 !important;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1rem;
  }
  .nav-link:focus, .nav-link:hover {
    color: #F32735 !important;
  }

  .nav-item a {
    position: relative;
  }

  .nav-item a::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #F32735 ;
  z-index: 1;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease-in-out;
}

.nav-item a:hover::before {
  transform: scaleX(1);
}

  .navbar-toggler:focus {
    box-shadow: none;
  }

  .navbar-toggler-icon {
    background-color: #F32735;
  }

  .video-portfolio {
    width: 100%;
    height: 30rem;
    padding: 0rem .6rem;
  }

.carousel {
    position: relative;
    height: 100vh;
}
.carousel img {
    object-fit: cover;
    height: 100vh;
}

.logo {
  width: 200px;
}

.text-call {
  min-width: 100px;
  max-width: 600px;
  width:100%;
}

.carousel-section {
  position: absolute;
  right: -5rem;
  bottom: 5rem;
  min-width: 100px;
  max-width: 400px;
  width: 100%;
}
.carousel-section h2 {
  display: flex;
  justify-content: flex-start;
  line-height: 1;
  color: #F32735;
  font-family: 'Gotham Ultra', sans-serif !important;
  font-size: 4rem;
  font-weight: 400;
}

.carousel-section p {
  font-family: 'Armin Grotesk Bold', sans-serif !important;
  color: #F32735;
  text-align: initial;
  font-size: 0.9rem;
}

.carousel-control-prev, 
.carousel-control-next {
  width: 6%;
}
</style>

<script>
import Social from "../components/Social.vue"

export default 
  {
  name: "IndexPage",
  components: { 
    Social
  },
  data() {
    return{
      listAmanao: [
        {
          name: 'Raul Gómez',
          img:'1',
          position: 'Vendedor',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deleniti, alias minima quas nostrum repellendus nobis illum! Deleniti.'
        },
        {
          name: 'Victor Rodríguez',
          img:'2',
          position: 'Vendedor',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deleniti, alias minima quas nostrum repellendus nobis illum! Deleniti.'
        },
        {
          name: 'Pablo Sánchez',
          img:'3',
          position: 'Vendedor',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deleniti, alias minima quas nostrum repellendus nobis illum! Deleniti.'
        },
        {
          name: 'Raul Gómez',
          img:'2',
          position: 'Borrar',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deleniti, alias minima quas nostrum repellendus nobis illum! Deleniti.'
        },
        {
          name: 'Victor Rodríguez',
          img:'3',
          position: 'Borrar',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deleniti, alias minima quas nostrum repellendus nobis illum! Deleniti.'
        },
        {
          name: 'Pablo Sánchez',
          img:'1',
          position: 'Borrar',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia deleniti, alias minima quas nostrum repellendus nobis illum! Deleniti.'
        }
      ],
      countListAmanao: 0
    }
  },
  mounted() {
    this.countListAmanao = this.listAmanao.length
  }
};
</script>
