<template>
  <div class="Home">
    <img
    width="100%" 
    src="https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/20180413_cpm_10487.jpg">
    <section class='mian-content'>
      <ul class='c-wrap'>
        <li class='bg-red'>
          <div class='right'>
            <p>酒店</p>
            <i>icon</i>
          </div>
          <div class='left'>
            <div class='t'>
               <p>特惠酒店</p>
            <p>客栈</p>
            </div>
            <div class='b'>
               <p>海外酒店</p>
            <p>民宿</p>
            </div>
          </div>
        </li>
        <li class='bg-blue'>
          <div class='right'>
            <p>机票</p>
            <i>icon</i>
          </div>
          <div class='left'>
            <div class='t'>
               <p>特惠酒店</p>
            <p>客栈</p>
            </div>
            <div class='b'>
               <p>海外酒店</p>
            <p>民宿</p>
            </div>
          </div>
        </li>
        <li class='bg-green'>
          <div class='right' @click="open('DujiaIndex')">
            <p>度假</p>
            <i>icon</i>
          </div>
          <div class='left'>
            <div class='t'>
               <p>特惠酒店</p>
            <p>客栈</p>
            </div>
            <div class='b'>
               <p>海外酒店</p>
            <p>民宿</p>
            </div>
          </div>
        </li>
        <li class='bg-orange'>
          <div class='right'>
            <p>酒店</p>
          </div>
          <div class='left'>
            <div class='t'>
               <p>特惠酒店</p>
            </div>
            <div class='b'>
               <p>海外酒店</p>
            </div>
          </div>
        </li>        
      </ul>
    </section>
    <section class='sub-content'>
      <ul>
        <li>
          <i>icon</i>
          <p>签证.wifi</p>
        </li>
         <li>
          <i>icon</i>
          <p>签证.wifi</p>
        </li>
         <li>
          <i>icon</i>
          <p>签证.wifi</p>
        </li>
         <li>
          <i>icon</i>
          <p>签证.wifi</p>
        </li>
         <li>
          <i>icon</i>
          <p>签证.wifi</p>
        </li>
         <li>
          <i>icon</i>
          <p>签证.wifi</p>
        </li>
         <li>
          <i>icon</i>
          <p>签证.wifi</p>
        </li>
         <li>
          <i>icon</i>
          <p>签证.wifi</p>
        </li>
      </ul>
    </section>
    <section></section>
    
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
   open(name){
     this.$router.push({name:name})
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
  .mian-content
    padding 4px 4px 0 4px
    color #fff
    li
      display flex
      justify-content space-between
      margin-bottom 4px
      .right
        width 33.33%;
        display flex
        flex-direction column
        align-items center
        border-right 1px solid #ccc
        p
          margin 15px 0
      .left 
        display flex
        width 66.67%
        justify-content space-around
        .t
          p:first-of-type
            border-right 1px solid #ccc
            border-bottom 1px solid #ccc
        .b    
          p:last-of-type
            border-left 1px solid #ccc
            border-top 1px solid #ccc
          
        div
          width 50%
          p
            width 100%
            display flex
            padding 15px 0
            justify-content center
            align-items center
    .bg-red
      background #f55
    .bg-blue
      background #00a7f7
    .bg-green
      background #7cb832
    .bg-orange
      background #f90
  .sub-content
    background #eee
    padding 10px 0
    ul
      background #fff
      display flex
      flex-wrap wrap
      padding 15px 30px      
      li
        box-sizing border-box        
        width 25%
        display flex
        flex-direction column
        justify-content center
        align-items center
        p
          padding 10px 0 20px 0






</style>

