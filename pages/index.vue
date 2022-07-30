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
                    <b-nav-item class="menu-links d-flex" href="/" right>Home <b-icon icon="caret-down-fill" scale=".5" variant="danger"></b-icon></b-nav-item>
                    <b-nav-item class="menu-links d-flex" href="#social" right>Granito Social <b-icon icon="caret-down-fill" scale=".5" variant="danger"></b-icon></b-nav-item>
                    <b-nav-item class="menu-links d-flex" href="#autores" right>Protagonistas <b-icon icon="caret-down-fill" scale=".5" variant="danger"></b-icon></b-nav-item>
                    <b-nav-item class="menu-links d-flex" href="#canales" right>Canales <b-icon icon="caret-down-fill" scale=".5" variant="danger"></b-icon></b-nav-item>
                    <b-nav-item class="menu-links d-flex" href="#aliados" right>Aliados <b-icon icon="caret-down-fill" scale=".5" variant="danger"></b-icon></b-nav-item>
                    <b-nav-item class="menu-links d-flex" href="#trabajo" right>Trabajo <b-icon icon="caret-down-fill" scale=".5" variant="danger"></b-icon></b-nav-item>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
            </div>
          </div>
        </div>
      </header>
      <!--// Header -->

      <!-- CAROUSEL VUE BOOTSTRAP -->
      <b-carousel id="canales"  :interval="4000" controls  background="#ababab"
        img-width="10000" img-height="100vh" style="text-shadow: 1px 1px 2px #333;">
        <!-- Slides with custom text -->
        <b-carousel-slide img-src="assets/img/carousel/01.jpg">
          <div class="carousel-section">
            <h2>Nuestra<br>Historia</h2>
            <p>Una historia de berraquera y pujanza valores con los cuales venimos creciendo desde el año 2016 y logramos impactar positivamente la vida de cientos de personas, nacimos con la idea de embellecer las calles de la ciudad, volvernos un referente de la cultura cafetera y aportar granitos de arena al desarrollo de nuestra región. Con cada paso y cada meta cumplida, queremos evocar esa tradición que fundamenta a los Colombianos, ese aroma que atrae a todo el mundo, y ese sentimiento de una gran taza de café.</p>
          </div>
        </b-carousel-slide>

      </b-carousel>
      <!-- END CAROUSEL VUE BOOTSTRAP -->

      <!-- Page Conttent -->
      <main class="page-content">
        <!-- Start About Area -->
        <div class="bk-about-area section-ptb-100" id="social">
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
                    Sabemos que como seres humanos tenemos capacidades infinitas para el cambio, durante el año 2020, el mundo entero tuvo la oportunidad de demostrar, como sociedad, que somos capaces de sobrepasar cualquier obstáculo. Nosotros abrazamos estas capacidades y por ello somos firmes creyentes de las segundas oportunidades, damos la oportunidad a personas con altos niveles de vulnerabilidad para que, a través de un trabajo juicioso, ordenado y perseverante, demuestren a la sociedad que su transformación va en serio. Ex habitantes de calle, Dificultades cognitivas, Pos-Penados, Personas de la tercera edad y en general personas que les cuesta conseguir un trabajo formal, se han beneficiado de ser nuestros colaboradores.
                  </p>
                  <a class="about-btn wow move-up" target="_blank" href="https://wa.me/+573193589154?text=Quiero%20conocer%20más"><span>Conoce más</span><i
                      class="fa fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End About Area -->

        <!-- Start Service Area -->

        <div id="autores" class="bk-service-area section-ptb-100">
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
                  <div :class="`wow move-up ${idx+1 <= countListAmanao ? 'border-right border-white': ''} `">
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
        <div id="canales" class="bk-portfolio-area creative-portfolio section-ptb-100">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-title--between wow move-up">
                  <div class="title">
                    <h3>Aquí llegamos</h3>
                    <h6 class="color-white">Reportajes el amañao</h6>
                  </div>
                  <div class="section-btn mt_mobile--30">

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
                        :perPageCustom="[[200, 1],[480, 1], [768, 1]]"
                        :mouse-drag="true"
                        :autoplay="true"
                        :autoplayTimeout="2000"
                      >
                        <slide>
                          <!-- Start Single Portfolio -->
                            <div class="portfolio portfolio_style--2 mt--30 swiper-slide">
                              <div class="thumb">
                                <iframe class="video-portfolio" src="https://www.youtube.com/embed/eLecuvRglOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              </div>
                            </div>
                          <!-- End Single Portfolio -->
                        </slide>
                        <slide>
                          <!-- Start Single Portfolio -->
                            <div class="portfolio portfolio_style--2 mt--30 swiper-slide">
                              <div class="thumb">
                                <iframe class="video-portfolio" src="https://www.youtube.com/embed/hQEQihkX2WU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
        <div id="aliados" class="bk-number-speaks section-ptb-100">
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
                <div class="speakers-number-wrap counter-grid d-flex justify-content-center flex-wrap">
                  <!-- Start Single Count -->
                  <div class="counter-style--2 wow move-up mt-2">
                    <div class="icon">
                      <img width="150" src="assets/img/allies/Logos2.png" />
                    </div>
                  </div>
                  <!-- End Single Count -->

                  <!-- Start Single Count -->
                  <div class="counter-style--2 wow move-up mt-2">
                    <div class="icon">
                      <img width="150" src="assets/img/allies/Logos.png" />
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
                        Somos una empresa que a través de un servicio
                        buscamos una función social.
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
                    <span class="count">30</span>
                    <div class="content">
                      <h6>Jeeperitos</h6>
                    </div>
                  </div>
                  <!-- End Single Count -->

                  <!-- Start Single Count -->
                  <div class="counter-style--2 wow move-up">
                    <div class="icon">
                      <img class="w-50" src="assets/img/allies/person.png" />
                    </div>
                    <span class="count">270</span>
                    <div class="content">
                      <h6>Personas que han participado como colaboradores</h6>
                    </div>
                  </div>
                  <!-- End Single Count -->

                  <!-- Start Single Count -->
                  <div class="counter-style--2 wow move-up">
                    <div class="icon">
                      <img class="w-50" src="assets/img/allies/figure-02.png" />
                    </div>
                    <span class="count">85</span>
                    <div class="content">
                      <h6>Personas con vulnerabilidad impactadas</h6>
                    </div>
                  </div>
                  <!-- End Single Count -->
                </div>
                <div class="row d-flex justify-content-center my-3">
                  <a target="_blank" href="https://wa.me/+573193589154?text=Quiero%20apoyar%20su%20causa" class="btn-allies text-decoration-none text-center">Apoya Nuestra Causa</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End CounterUp Area -->

        <!-- Start Row Columns Area -->
        <div id="trabajo" class=" brook-row-column-area position-relative clearfix">
          <div class="aaa ptb--150">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12">
                  <div class="call-to-action callto-action--1">
                    <div class="content">
                      <h1 class="text-white mb-2">TRABAJA<br>CON NOSOTROS</h1>
                      <p class=" text-call text-center mx-auto text-white my-3">Puedes participar con ¨El amañao¨ aplicando para volverte vendedor de café ambulante, o apoyando nuestra causa social.</p>
                      <h5 class="text-white">¡Unéte al proceso!</h5>
                      <div class="row d-flex justify-content-center my-3">
                        <a target="_blank" href="https://wa.me/+573193589154?text=Quiero%20ser%20vendedor" class="btn-us btns-style text-decoration-none">QUIERO SER VENDEDOR</a>
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
                  <div class="text-white">
                    <a class="text-decoration-none politicas" href="https://xn--elamaao-8za.com/politicas/politicas-de-privacidad.pdf" target="_blank" rel="noopener noreferrer">Politicas de privacidad</a>
                  </div>
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

  .nav-link {
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
  font-family: 'Libre Franklin', sans-serif !important;
  font-size: 5rem;
  font-weight: 400;
  text-shadow: none;
}

.carousel-section p {
  font-family: 'Armin Grotesk Bold', sans-serif !important;
  color: #F32735;
  text-align: initial;
  font-size: 0.9rem;
  text-shadow: none;
}

.carousel-control-prev,
.carousel-control-next {
  width: 6%;
}

.btns-style {
  font-family: 'Libre Franklin', sans-serif !important;
}
.politicas:hover {
 color: #F32735;
}

@media(max-width: 500px) {
  .carousel-section h2 {
    display: flex;
    justify-content: flex-start;
    line-height: 1;
    color: #F32735;
    font-family: 'Libre Franklin', sans-serif !important;
    font-size: 3.5rem;
    font-weight: 400;
  }
  .carousel-section {
    right: 0 !important;
    left: 0;
  }
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
          name: 'Hernán Mesa',
          img:'1',
          position: 'Vendedor',
          description: 'Oriundo de Medellín, Don Hernan es un referente entre sus compañeros es un trabajador perseverante y berraco.'
        },
        {
          name: 'Jaime Peña',
          img:'2',
          position: 'Vendedor',
          description: 'Oriundo de Bogotá, Jaime es muy atento y se presta para estar activo y poder apoyar en lo que mas se pueda, una persona muy perseverante.'
        },
        {
          name: 'Carlos Loaiza',
          img:'3',
          position: 'Vendedor',
          description: 'Este amable señor, gran caminante y excelente en atención, es uno de los chistosos de la empresa, muy amigable y con unas ganas gigantes de demostrar su transformación.'
        },
        {
          name: 'Juan Guillermo Quintero',
          img:'4',
          position: 'Vendedor',
          description: 'Oriundo de Bogotá, una gran dicción y unos modales maravillosos, hablar con Juan es agradable y encantador, una persona extremadamente pujante y trabajadora.'
        },
        {
          name: 'Julián Díaz',
          img:'5',
          position: 'Vendedor',
          description: 'Tiene el alma joven de la empresa, Julian es muy activo y con ganas de aprender, ofrece hasta por los codos.'
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
