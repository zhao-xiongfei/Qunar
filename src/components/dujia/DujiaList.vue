<template>
  <div>
      <header ref='header'>
          <span @click='go()'>icon</span>
          <div>
              <i>icon</i>
              {{this.$route.query.name}}              
          </div>
          <span>icon</span>          
      </header> 
    <div class="scorll-top">
    <Scroll 
      @scroll='scroll'
      :ListenScroll='true'
      :pullUpLoad='{threshold:-30}'
      :scrollbar='true'
      :data = 'dj4'
      @pullingUp = 'pullingUp'
      >
            <div class='list' v-for="(item,index) in dj4" :key='index' @click='listdetails(item.encodeId)'>
                <div class='bg' :style="{ 'background-image': 'url(' + item.extensionImg+ ')'}">
                    <p class='p1' :class="{active:item.tradingArea}" >{{item.functionDisplay}}</p>
                    <p class='p2'>{{item.dep}}</p>
                    
                </div>
                <div class='jianjie'>
                    <p class='p1'>
                        {{item.search_title}}
                    </p>
                   
                    <p class='p3' v-if="item.tradingArea">
                        {{111111111}}
                    </p>
                    <p class='p4' v-else>
                        <span  v-for="(i,index) in item.tagProductFeature" :key='index'>{{i}}</span>
                        <!-- <span  v-if="item.lineSubjects.length" v-for="(i,index) in item.lineSubjects" :key='index' >{{i}}</span>                             -->
                    </p>
                     <p class='p2'>
                    <span>{{item.itineraryDay}}天{{item.details.hotelNight}}晚</span>
                    </p>
                    <p class='p5'>
                        <span>分</span>
                        <span>已售{{item.soldCount}}人</span>
                    </p>  
                </div>                
        </div>
    </Scroll>
    </div>
  </div>
</template>
<script>
import {dj4} from "../../common/api"
import Scroll from "@/base/scroll";
export default {
    data(){
        return {
            dj4:[],
            page: 0
        }
    },
    components: {
      Scroll  
    },
    created() {
        this._dj4(this.page,this.$route.query.name,this.$route.query.query,()=>{})
    },
    methods: {
        _dj4(page,name,query,cb){
            dj4(page,name,query,cb).then((res)=>{
                console.log(res.data.list.results[0])
                this.dj4 = this.dj4.concat(res.data.list.results)
                cb(res.data.list.results)
            })            
        },
        listdetails (id) {
            this.$router.push({name:'ListDetails',query:{id:id}})

        },
        go(){
            this.$router.go(-1)
        },
        pullingUp (_this) {
            this.page+=20
            this._dj4(this.page,this.$route.query.name,this.$route.query.query,(res)=>{
                if(res){
                    _this._finishPullUp()
                }
            })
        },
        scroll(pos){
            // console.log(pos)
            // this.$refs.header.style.marginTop = pos.y+'px'
        }
    }
  
}
</script>
<style scoped>


.scorll-top{
  position: fixed;
  width:100%;
  top:80px;
  bottom:0  
}
header{
    background: #00bcd4;
    height: 80px;
    line-height: 80px;
    color: #fff;
    font-weight: 400;
    text-align: center;
    display: flex;
    align-items: center;
    /* position: relative; */
    /* top:0 */
}
header div{
    flex: 1;
    background: #fff;
    color: #ccc;
    height: 60px;
    line-height: 60px;
    font-size: 28px;
    border-radius: 30px
}
header span{
    padding: 0 30px
}
.fenlei{
    height: 200px;
    
}
.list{
    padding: 20px;
    border-bottom: 1px solid #f5f5f5;
    display: flex;

}
.list .bg{
    flex:  0 0 220px;
    height: 200px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative
}
.list .bg .p1{
    background: #f06291;
    color: #fff;
    display: inline-block;
    font-weight: 400;
    font-size: 24px;
    padding: 10px
}
.list .bg .active {
    background: #29b6f6
}
.list .bg .p2{
   color: #fff;
   font-weight: 400;
   font-size: 24px;
   background: rgba(0, 0, 0, 0.6);
   padding: 10px;
   bottom: 0;
   position: absolute;
   width: 100%;
   text-align: center;
   box-sizing: border-box
}
.list .jianjie{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    padding: 0 30px
}
.list .jianjie .p1{
    font-weight: 800;
    width: 100%;
    font-size: 28px;
    height: 80px;
    line-height: 40px;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 2; /** 显示的行数 **/
    overflow: hidden;
  }
  .list .jianjie .p4 span{
      color: #29b6f6;
      border:1px solid #29b6f6;
      background: #fff;
      font-size: 24px;
      font-weight: 400;
      display: inline-block;
      padding: 4px;
      margin-right: 10px
  }
</style>
