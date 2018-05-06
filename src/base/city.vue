<!--  -->
<template>
     <div class='city'>
         <div class='header'>
             <div class='t'>
                 <span @click='go()'>icon</span>
                 <span class='c'>城市选择</span>
                 <span></span>
             </div>
             <div class='inp' @click='focus' v-if='issc'>城市名或拼音（如北京/beijing）</div>
             <div class='inp2'  v-if="!issc">
                 <div class='l'>
                     <span>icon</span>
                     <input ref="inpu" placeholder="输入城市名称或首字母">
                     <span>icon</span>
                 </div>
                 <div @click='issc = true' class='r'>取消</div>
             </div>
             
         </div>
         <div class='scorlly'>
             <Scroll ref='scroll'
                     :ListenScroll = 'true'
                     @scroll='scroll'>
                 <div v-show="issc" class='dep'>
                       <div v-for="(i,index,value) in dep" :key='value' ref="divlist">
                        <h3>{{index}}</h3> 
                        <p v-for="(item,index) in dep[index]" :key='index' @click='go(1,item)'>
                            {{item}}
                        </p>
                    </div>
                 </div>
                 <div >
                 </div>
             </Scroll>
         </div>

         <div class='dep' style="position:absolute;width:100%" v-show="scrollIndex">
             <div>
                 <h3 v-for="(i,index,value) in dep" :key='value' v-show="scrollIndex === value">{{index}}</h3>
             </div>
         </div>

         <ul class='left-az'
             v-if='issc'
             @touchstart.stop.prevent='touchstart'
             @touchmove.stop.prevent='touchmove'
             @touchend.stop.prevent='touchend'>
             <li  
                 v-for="(i,index,value) in dep" 
                 :key='value' 
                 :data-index='value'
                 :class="{active:scrollIndex === value}"
                 >
                 {{index}}
                 <span v-show="moveIndex === value">{{index}}</span>
            </li>             
         </ul>
     </div>
</template>

<script>
import Scroll from '@/base/scroll'
import dep from '../../dep.json'
export default {
  data () {
    return {
        issc:true,
        dep: dep.data,
        scrollY: -1,
        scrollIndex: 0,
        moveIndex : -1
    };
  },
  computed :{
  },
  created () {
      this.touch = {},
      this.listheight = []
  },
  components: {
    Scroll
  },
  mounted(){
     this. _listheight()
  },
  methods: {
      go(index,item){
          this.$emit('go',item)
      },
      focus() {
          this.issc = false
        //   this.$refs.inp.focus()
        this.$nextTick(()=>{
       this.$refs.inpu.focus()
        })
      },
      scroll(pos){
          this.scrollY = pos.y
      },
      touchstart(e){
          this.touch.y1 = e.touches[0].pageY
          if(e.target.getAttribute('data-index')!==null){
             var index = parseInt(e.target.getAttribute('data-index'))
            this.touch.touchstartindex = index              
            //  console.log(this.$refs.divlist[index])  
          this.scrollIndex = index            
             this.$refs.scroll._scrollToElement(this.$refs.divlist[index])
             
          }
      },
      touchmove(e) {
          this.touch.y2 = e.touches[0].pageY          
          var index =(this.touch.y2-this.touch.y1)/17.5|0
          this.$refs.scroll._scrollToElement(this.$refs.divlist[this.touch.touchstartindex+index])
         
          this.scrollIndex = this.touch.touchstartindex+index 
          this.moveIndex = this.touch.touchstartindex+index 
      },
      touchend () {
          setTimeout(() => {
          this.moveIndex = -1              
          }, 300);
      },
      _listheight () {
          this.listheight = []
          const list = this.$refs.divlist
          let height = 0;
          this.listheight.push(height)
          for(var i=0;i<list.length;i++){
              height += list[i].clientHeight
              this.listheight.push(height)
          }
            //   console.log(this.listheight)
          
      }
  },
  watch :{
      scrollY(newY){
    //   console.log(this.listheight)
      const listheight = this.listheight
      for(var i=0;i<listheight.length;i++){
          let height1 =listheight[i]
          let height2 =listheight[i+1]
          if(-newY>height1 && -newY<height2){
        //   console.log(i)
          this.scrollIndex = i
          return
          }
          else{
          this.scrollIndex = 0
          }
      }
      
      }
  }
}

</script>
<style  scoped>
.scorlly{
    position: fixed;
    top:160px;
    bottom:0;
    width: 100%;
}
.list-wrapper{
    height: 100%;
    overflow: hidden;
    position: relative
}
.city{
    background: #fff;
    width: 100%;
    height: 100%;
    position:fixed;
    top:0;
    bottom:0;
    z-index: 10001
}
.header{
    width: 100%;
    background: #00bcd4;
    height: 160px;
    text-align: center
}
.header .t{
    color: #fff;
    font-weight: 400;
    display: flex;
    margin-bottom: 20px;
    padding-top: 20px
}
.header .t span{
    flex: 0 0 100px;
    padding: 0px 30px;
    box-sizing: border-box
}
.header .t .c{
    flex: 1;
    text-align: center;
    font-size: 40px    
}
.header .inp{
    background-color: #28a1b0;
    width: 690px;
    line-height: 60px;
    border-radius: 30px;
    display: inline-block;
    color: #00bcd4;
    font-weight: 300;
    font-size: 24px
}
.header .inp2{
    display: flex;
    line-height: 60px;

}
.header .inp2 .l{
    color: #fff;
    font-size: 32px;
    flex: 1;
    background:#fff;
    border-radius: 30px;
    margin-left: 30px;
    display: flex;
    justify-content: space-around;
    padding: 0 30px;
    color: #ccc
}
.header .inp2 .l input{
    flex: 1;
    border: none;
}
.header .inp2 .r{
    color: #fff;
    font-size: 32px;
    flex: 0 0 100px;
}

.dep h3{
    line-height: 50px;
    background: #f5f5f5;
    padding-left: 30px;
    box-sizing: border-box
}
.dep p{
    line-height: 80px;
    border-bottom: 1px solid #f5f5f5;
    padding-left: 60px;
    width: 70%
}
ul{
    position: fixed;
    right: 30px;
    top:20%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding: 10px;
}
ul li{
    line-height: 35px;
    font-weight: 800;
    text-align: center;
    width: 50px;
    color: #fff;
    font-size: 28px;
    position: relative;

}
ul li span {
    display: inline-block;
    position: absolute;
    left:-120px;
    top:-30px;
    background: #28a1b0;
    height: 100px;
    width: 100px;
    line-height: 100px;
    border-radius: 50%;
    font-size: 60px;
    color: #fff
}
ul .active {
    color:#28a1b0;
}
</style>