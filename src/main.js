import Swiper from 'swiper'
import 'swiper/css'
import { Navigation } from 'swiper/modules'

const swiper = new Swiper('.swiper.showcase__template', {
  modules: [Navigation],
  slidesPerView: 'auto',
  centeredSlides: true,
})
