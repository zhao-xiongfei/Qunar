<!--  -->
<template>
   <transition
    enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight"
  >
     <div class='Search'>
    <div class='go' @click='go'>
      icon
    </div>
       <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
 
    <!-- Optional controls -->
    <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
     </div>
  </transition>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        effect: "cube",
        loop: true
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
    
  },
  methods: {
    go() {
      this.$router.go(-1);
    }
  }
};
</script>
<style  scoped>
.Search {
  background: #fff;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 10001;
}
.swiper-slide {
  height: 100px;
  width: 100%;
  background: red;
  color: #fff;
  line-height: 100px;
  text-align: center;
  font-weight: 800;
}
</style>