<template>
  <div ref='wrapper' class='list-wrapper'>
      <div class='scroll-content'>
      <slot></slot>
      <slot name='pullload' v-if="pullUpLoad&&data.length>0">
        <div class='pullLoad'>
          <div v-if="!ispullingUp">
            上拉加载更多
           </div>
           <loading v-else></loading>
         </div>
      </slot>
      </div>
      <slot name="pulldown" v-if="pullDownRefresh">
       <div ref="pulldown" class="pulldown" :style="pullDownStyle" style="display:none" >
         下拉刷新
      </div>
    </slot>    
  </div>
</template>
<script>
import BScroll from "better-scroll";
import Loading from "@/base/loading";

export default {
  components:{
    Loading
  },
  props: {
    probeType: {
      //款速缓慢监听  scroll内置
      type: Number,
      default: 3
    },
    click: {
      //是否能点击 scroll内置
      type: Boolean,
      default: true
    },
    data: {
      //监听父组件的动态数据  用于重新初始化scroll
      // type: Array||Object,
      default: null
    },
    pullDownRefresh: {
      //下拉刷新  scroll内置  父组件值不为空则开启下拉刷新
      type: Object,
      default: null
    },
    pullUpLoad:{
       type: Object,
       default:null
    },
    ListenScroll: {
      //是否监听scroll滑动值
      type: Boolean,
      default: false
    },
    bounceTop: {
      //top 是否弹动
      type: Boolean,
      default: true
    },
    scrollY: {
      //纵向滚动
      type: Boolean,
      default: true
    },
    scrollbar:{
      //是否显示滚动条
      type: Boolean,
      default:false
    },
    scrollX: {
      //横向滚动
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      pullDownStyle: "" ,//下拉刷新动态top值
            ispullingUp: false
    };
  },
  mounted() {
    setTimeout(() => {
      this._initscroll();
    }, 20);
  },
  methods: {
    _initscroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      //初始化scroll
      //new  scroll 实例
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: this.scrollX,
        scrollY: this.scrollY,
        probeType: this.probeType,
        click: this.click,
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad:this.pullUpLoad,
        scrollbar:this.scrollbar,
        pullUpLoad: this.pullUpLoad,
        bounce: {
          top: this.bounceTop
        }
      });
      //是否监听scroll 滚动值
      if(this.ListenScroll) {
        this.scroll.on("scroll", pos => {
          this.$emit("scroll", pos);
        });
      }
       // 是否开启下拉刷新
      if (this.pullDownRefresh) {
        //on监听scroll事件
        this.scroll.on("scroll", pos => {
          //通过监听y值动态修改top值
          this.$emit("scroll", pos);

          this.pullDownInitTop = -50;
          //  console.log(pos.y)
          this.pullDownStyle = `top:${Math.min(
            pos.y + this.pullDownInitTop,25 )}px;display:flex`;
          //  console.log(this.pullDownStyle)
          if (pos.y >= 50) {
            this.$refs.pulldown.innerHTML = "松开刷新";
          } else if (pos.y <= 0) {
            this.$refs.pulldown.innerHTML = "下拉刷新";
          }
        });
        this.scroll.on("pullingDown", pos => {
          //下拉刷新触发父级方法 this传过去
          // 父级调用方法获取数据，数据获取成功调用this. _finishPullDown()关闭下拉刷新
          this.$emit("pullingDown", this);
        });
      }
      //上拉加载
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp',()=>{
          this.ispullingUp=!this.ispullingUp
          this.$emit("pullingUp",this)
        })
      }
    },
      //重新初始化scroll    
    _refresh() {
      this.scroll.refresh();
    },
      //下拉刷新数据加载完毕    
    _finishPullDown() {
      this.scroll.finishPullDown();
    },
     //上拉刷新数据加载完毕    
    _finishPullUp() {
      this.scroll.finishPullUp();
    },
    //滚动到相应节点位置
    _scrollToElement(el) {
      this.scroll.scrollToElement(el);
    }
  },
  watch: {
    data() {
      //监听数据变化调用this_refresh()重新初始化scroll
      setTimeout(() => {
        this._refresh();
      }, 20);
    }
  }
};
</script>
<style >
/*下拉刷新默认top值为负数 初始化为隐藏   */
.list-wrapper{
position: relative;
   height: 100%;
  left: 0 ;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.pulldown {
  position: absolute;
  top: -50;
  left: 0;
  width: 100%;
  color: #00a8ff;
  height: 50px;
  align-items: center;
  justify-content: center;
}
.pullLoad{
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  font-size: 28px
}

</style>


