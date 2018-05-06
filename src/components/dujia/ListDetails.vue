<!--  -->
<template>
  <div class='ListDetails'>
      <div class='scroll'>
        <Scroll 
            :ListenScroll='true'
            :pullUpLoad='{threshold:-30}'
            :data='dj5'>
            <div class='swiper-box'>
            <swiper :options="swiperOption" ref="mySwiper" class='swiper1'>
               <swiper-slide 
               v-for="(item,index) in dj5bgurl" :key='index' class='slide1'
               :style="{ 'background-image': 'url(' + item.url+ ')'}">  
              </swiper-slide>  
               
           </swiper>
            <div class='slide1-bottom'>
                       <div class='l'>
                          产品编号: {{$route.query.id}}
                       </div>
                       <div class='r'>
                           {{activeIndex}} / {{dj5bgurl.length}} <span>i</span>
                       </div>
                   </div>
           </div>
        </Scroll>
      </div>

     <transition
       enter-active-class="animated zoomIn" leave-active-class="animated zoomOut"
      >
        <SS v-if="SwiperSlide" @swiperSlideshow='swiperSlideshow' :activeIndex='activeIndex' :dj5bjurl="dj5bgurl">
       </SS>
     </transition>
   
  </div>
</template>

<script>
import { dj5 } from "@/common/api";
import Scroll from "@/base/scroll";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import SS from "@/base/swiperSlide.vue";
export default {
  data() {
    return {
      SwiperSlide: false,
      activeIndex: 1,
      dj5: {},
      dj5bgurl: [],
      swiperOption: {}
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.swiper.on("slideChangeTransitionStart", () => {
      this.activeIndex = this.swiper.activeIndex + 1;
    });
    this.swiper.on("click", () => {
      this.SwiperSlide = true;
    });
  },
  created() {
    this._dj5(this.$route.query.id);
  },
  methods: {
    _dj5(id) {
      dj5(id).then(res => {
        console.log(res.data);
        this.dj5 = res.data;
        this.dj5bgurl = res.data.product.imageInfos;
      });
    },
    swiperSlideshow() {
      this.SwiperSlide = false;
    }
  },
  components: {
    Scroll,
    swiper,
    swiperSlide,
    SS
  }
};
</script>
<style scoped>
.scroll {
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 100px;
  background: #f5f5f5;
}
.swiper-box {
  position: relative;
  width: 100%;
  height: auto;
}
.slide1 {
  height: 420px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}
.swiper-box .slide1-bottom {
  width: 100%;
  position: absolute;
  z-index: 100;
  bottom: 0;
  padding: 30px 50px;
  font-size: 28px;
  font-weight: 500;
  color: #fff;
  background-image: -webkit-linear-gradient(
    transparent 0,
    rgba(0, 0, 0, 0.8) 85%
  );
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
}
</style>