<!--  -->
<template>
  <div class='swiperSlide' @click='swiperSlideshow()'>

            <swiper :options="swiperOption" ref="mySwiper" class='swiper1'>
               <swiper-slide 
               v-for="(item,index) in dj5bjurl" :key='index' class='slide1'>  
               <img :src="item.url" alt="" width="100%">
              </swiper-slide>  

           </swiper>

            <div class='slide1-bottom'>
                           {{ai}} / {{dj5bjurl.length}}
            </div>
            <div class='down'>
                关闭
            </div>
  </div>
</template>

<script>
import { dj5 } from "@/common/api";
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    props:[
        'dj5bjurl',
        'activeIndex'
    ],
  data() {
    return {
        ai:this.activeIndex,
      swiperOption: {
          autoHeight: true,
          initialSlide :this.activeIndex-1
      }
  }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
    mounted() {
         this.swiper.on('slideChangeTransitionStart',()=>{
             this.ai = this.swiper.activeIndex+1
         })
  },
  created() {
  },
  methods: {
    swiperSlideshow(){
        this.$emit('swiperSlideshow',this.activeIndex)
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style scoped>
.swiperSlide{
    position: fixed;
    z-index: 10002;
    top:0;
    bottom:0;
    background: #000;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center
}

.slide1{
    display: inline-block
}
.slide1-bottom {
  position: absolute;
  z-index: 100;
  top:30px;
  right: 30px;
  font-size: 28px;
  font-weight: 500;
  color: #fff;
}
.down {
  position: absolute;
  z-index: 100;
  bottom:30px;
  font-size: 28px;
  font-weight: 500;
  color: #fff;
  border:1px solid #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  line-height: 100px
}
</style>