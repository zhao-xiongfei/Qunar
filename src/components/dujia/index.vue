<template>
  <div class="index">
    <div class='header' ref='header'>
      <div class='left'>i</div>
      <div class='center' @click="isCity = true">
        度假旅游
        <span><i>i</i>{{dep}}</span>
      </div>
      <div class='right'>
        <span>i</span>
        <span>i</span>
      </div>
    </div>
   <Scroll ref='s'
           @scroll='scroll'
           :bounceTop='false'
           :ListenScroll='true'
           >
       <div ref=''>
           <div class="page-header" 
           style="background-image:url(https://s.qunarzz.com/package_mobile/app/home/home-bg1.jpg);" >

           <div class='sc' @click="search()">
             <span>icon</span>
             国家/城市/关键词
           </div>
           </div>
           <Slider v-if='dj2.length' style="margin-top:10px">
             <div v-for="(item,index) in dj2" :key='index'>
               <a href="">
             <img :src="item.img" alt="" style="width:100%">
               </a>
             </div>
          </Slider> 
           
           <div class='dj1'>
               <h3>当前热门目的地</h3>
               <div class='dj1-top'>
                 <div class='bg' v-for="(item,index) in dj1" :key='index' :style="{backgroundImage: 'url(' +item.img + ')'}" v-if="index<6" @click='opendujijalist(item)'>
                   <div class='name'>
                     <p>{{item.name}}</p>
                     <span>{{item.uLike}}喜欢</span>
                   </div>
                 </div>
               </div>
               <div class='dj1-bottom'>
                 <div v-for='(item,index) in dj1' :key="index" v-if="index>5" @click='opendujijalist(item)'>
                   <p>
                      {{item.name}}
                   </p>
                  </div>
               </div>
           </div>
           <div class='dj3'>
             <div class='top'>
               <div v-for="(item,index) in dj3.firstRowModules" :key='index'>
                 <img :src="item.img" alt="">
                 <p>{{item.title}}</p>                 
               </div>
             </div>
             <div class='bottom'>
               <div v-for="(item,index) in dj3.list" :key='index' :class="{'bordernone':index===0||index===4}">
                 <img :src="item.img" alt="">
                 <p>{{item.title}}</p>
               </div>
             </div>
           </div>
           <p style="padding:15px;text-align:center">下滑加载更多</p>
       </div>
   </Scroll>
   <div class='tab'>
       <div>
           <i>icon</i>
           <p>度假</p>
       </div>
       <div>
           <i>icon</i>
           <p>好货</p>
       </div>
       <div>
           <i>icon</i>
           <p>特卖</p>
       </div>
       <div>
           <i>icon</i>
           <p>我的</p>
       </div>
   </div>
   
   <router-view></router-view>  
      <transition
    enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight"
  >
   <City v-if='isCity' @go='depclick'></City>
   
  </transition>
   
  </div>
</template>

<script>
import Scroll from "@/base/scroll";
import Slider from "@/base/slider";
import City from "@/base/city";

import {dj1,dj2,dj3} from "../../common/api"
export default {
  name: "",
  data() {
    return {
      dj1: [],//首页目的地
      dj2: [],//首页轮播
      dj3: [],
      isCity: false,
      dep:'北京'
    };
  },
  components: {
    Scroll,
    Slider,
    City
  },
  created() {
    this._dj1()
    this._dj2()
    this._dj3()
  },
  mounted() {
    this.$nextTick(()=>{
    })
  },
  methods: {
    depclick (item) {
      this.isCity =false
      this.dep = item

    },  
    search() {
      this.$router.push({name:'Sc'})
    },
    opendujijalist(item){
      this.$router.push({name:'DujiaList', query: {name:item.name,query:item.query }})      
    },
    scroll(pos){
      this.$refs.header.style.background=`rgba(0, 188,212,${Math.floor(Math.abs(pos.y))/44})`
    },
    _dj1(){
    dj1().then((res)=>{
      this.dj1 = res.data
      console.log(res.data)        
      
    })
    },
    _dj2(){
      dj2().then((res)=>{
      this.dj2 = res.key_data
      })
    },
    _dj3(){
      dj3().then((res)=>{
        this.dj3 = res.data
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  position: fixed;
  top:0;
  bottom:100px;
  width: 100%;
  background: #f5f5f5
  }
.list-wrapper {
  height: 100%;
  overflow: hidden
}
.tab {
  position: fixed;
  bottom: 0;
  height: 100px;
  background: #fff;
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 28px;
}
.tab p {
  padding-top: 10px;
}
.tab div:first-of-type {
  color: #00bcd4;
}
.page-header {
  height: 420px;
  position: relative;
  background: #46b7c3;
  background-size: 100% 100%;
  padding-bottom: 20px;
}
.page-header .sc{
  position: absolute;
  width: 80%;
  line-height: 80px;
  background: #fff;
  text-align: center;
  bottom: 40px;
  margin-left: 10%;
  border-radius: 20px;
  font-size: 28px;
  color: #ccc
}
.dj1{
    box-sizing: border-box;
    padding: 30px
}
.dj1 h3{
    font-weight: 400;
    margin-bottom: 30px
}
.dj1 .dj1-bottom{
  display: flex;
  flex-flow: wrap;
  justify-content:space-around;
}
.dj1 .dj1-bottom div{
  width: 25%;
  font-weight: 400;
  font-size: 28px;
  display: flex;
  justify-content: center
}
.dj1 .dj1-bottom div p{
  background: #fff;
  width: 100%;
   overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  margin-top: 20px;
  line-height: 60px;
  text-align: center;
  width: 92%
 
}
.dj1 .dj1-top{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around
}
.dj1 .dj1-top .bg{
  width: 32%;
  height: 200px;
  margin-top: 0px;
  margin-bottom: 40px;
  position: relative;
  background-repeat: no-repeat;
  background-size:cover


}
.dj1 .dj1-top .bg .name{
  background:#fff;
  display: inline-block;
  position: absolute;
  bottom:-20px;
  width: 70%;
  margin-left: 15%;
  padding: 10px 0px 10px 0px;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px #ccc;
  text-align: center;
  border-radius: 2px
}
.dj1 .dj1-top .bg .name p{
   overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.dj1 .dj1-top .bg .name span{
  font-size: 20px
}
.dj3{
  background: #fff
}
.dj3 .top{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 30px 0
}
.dj3 .top div img{
  width: 100px;
  background: aquamarine;
  margin-bottom: 20px
}
.dj3 .top div {
  font-size: 32px;
  font-weight: 400;
  text-align: center  
}
.dj3 .bottom{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around
}
.dj3 .bottom .bordernone{
  border-left: none
}
.dj3 .bottom div{
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 24px;
  padding: 30px 0;
  box-sizing: border-box;
  border-top:2px solid #ccc;
  border-left: 2px solid #ccc 
}
.dj3 .bottom div img{
  width: 60px;
  margin-bottom: 20px
}
.header {
  position: fixed;
  top:0;
  z-index: 100;
  display: flex;
  background: #46b7c3;
  background: rgba(0, 188,212,0);
  box-sizing: border-box;
  color: #fff;
  width: 100%;
  font-weight: 400;
  height: 80px;
  line-height:80px;
  /* opacity: 0 */
}
.header .left{
  flex: 0 0 20%;
  padding-left: 30px  
}
.header .center{
  flex: 1;
  text-align: center
}
.header .center span{
  font-size: 28px;
  background: #f90;
  border-radius: 20px;
  padding: 4px 30px 4px 30px;
   overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.header .right{
  flex: 0 0 20%;
  text-align: right;
  padding-right: 30px
}
.header .right span{
  display: inline-block
}


.swiper{
  margin-top: 20px
}
</style>

