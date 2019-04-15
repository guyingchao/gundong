<!--Created by win10 on 2018/9/20.-->

<template>
    <div>
      <div class="tab" ref="tab">
        <div class="tab_content" ref="tabcontent">
          <div class="tab_item" v-for="(item, index) in lastGameList" ref="tabitem" :gameinfo="item">
            {{item}}
          </div>
        </div>
      </div>

    </div>
</template>

<script type="text/ecmascript-6">
import BetterScroll from 'better-scroll'
export default {
  components: {BetterScroll},
  data () {
    return {
      selected: 'game',
      activeIndex: 'game',
      lastGameList: ['北京', '上海', '天津', '重庆','北京', '上海', '天津', '重庆','北京', '上海',
        '天津', '重庆','北京', '上海', '天津', '重庆','北京', '上海', '天津', '重庆', '北京', '上海', '天津', '重庆','北京', '上海', '天津', '重庆','北京', '上海',
        '天津', '重庆','北京', '上海', '天津', '重庆','北京', '上海', '天津', '重庆']
    }
  },
  created () {
    this.$nextTick(() => {
      this.InitTabscroll()
    })
  },
  methods: {
    InitTabscroll () {
      let width = this.lastGameList.length * 40
      this.$refs.tabcontent.style.width = width + 'px'
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BetterScroll(this.$refs.tab, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: 'vertical'
          })
        } else {
          this.scroll.refresh()
        }
      })
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.tab{
  width: 100%;
  white-space: nowrap;
  height: 130px;
  background: red;
}
  .tab_content{
    text-align: center;
    height: 130px;
  }
  .tab_item{
    display: inline-block;
    margin-right: 10px;
  }
</style>
