<!--Created by win10 on 2018/9/20.-->

<template>
    <div style="height: 400px;">
      <section class="box">
        <div class="head">
          head
        </div>
        <div class="content">
          <div class="left" ref="left">
            <ul>
              <li v-for="(item, index) in left" :class="{current:currentIndex == index}" @click="selectItem(index,$event)">
                <span class="left-item">{{item}}</span>
              </li>
            </ul>
          </div>
          <div class="right" ref="right">
            <ul>
              <li v-for="item in right" class="right-item right-item-hook">
                <h2>{{item.name}}</h2>
                <ul>
                  <li v-for="num in item.content">
                    <div>{{item.name + num}}</div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
</template>

<script type="text/ecmascript-6">
import BetterScroll from 'better-scroll'
export default {
  components: {BetterScroll},
  data () {
    return {
      listHeight: [],
      scrollY: 0,
      clickEvent: false,
      left: ['数学', '语文', '英语', '物理', '化学', '其它'],
      right: [
        {
          name: '数学',
          content: ['1', '2', '3', '4', '5', '6']
        },
        {
          name: '语文',
          content: ['1', '2', '3', '4', '5', '6']
        },
        {
          name: '英语',
          content: ['1', '2', '3', '4', '5', '6']
        },
        {
          name: '物理',
          content: ['1', '2', '3', '4', '5', '6']
        },
        {
          name: '化学',
          content: ['1', '2', '3', '4', '5', '6']
        },
        {
          name: '其他',
          content: ['1', '2', '3', '4', '5', '6']
        }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll()
      this._getHeight()
    })
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        // 当height2不存在或者高度在两者之间时返回当前索引
        if (!height2 || (this.scrollY >= height && this.scrollY < height2)) {
          return i
          /*if (this.clickEvent) {
            return i + 1
          } else {
            return i
          }*/
        }
      }
      return 0
    }
  },
  methods: {
    _initScroll () {
      this.lefts = new BetterScroll(this.$refs.left, {click: true})
      this.rights = new BetterScroll(this.$refs.right, {probeType: 3})
      this.rights.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _getHeight () {
      let rightItems = this.$refs.right.getElementsByClassName('right-item-hook')
      let height = 0
      this.listHeight.push(height)
//      console.log('rightItems',rightItems)
      for (let i = 0; i < rightItems.length; i++) {
        let item = rightItems[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
      console.log('this.listHeight',this.listHeight.length)
    },
    selectItem (index, event) {
      this.clickEvent = true
      if (!event._constructed) {
        return
      } else {
        let rightItem = this.$refs.right.getElementsByClassName('right-item-hook')
        let el = rightItem[index]
        this.rights.scrollToElement(el, 300)
      }
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .content{
    display: flex;
    position: absolute;
    top:150px;
    bottom: 100px;
    width: 100%;
    height: 400px;
    overflow: hidden;
    background: #eee;
  }
  .left{
    flex: 0 0 80px;
    /*width: 80px;*/
    background: #f3f5f7;
  }
  .left li{
    list-style-type: none;
    width: 100%;
    height: 100%;
  }
  .current{
    background: red;
  }
  .left-item{
    display: block;
    width:100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border-bottom: 1px solid yellow;
  }
  .right{
    flex: 1;
  }
  .right-item li{
    list-style-type: none;
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border-bottom: 1px solid yellow;
  }

</style>
