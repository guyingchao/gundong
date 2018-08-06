<!--Created by win10 on 2018/6/22.-->
<template>
    <div>
      <div style="margin-bottom: 50px">
        <el-table :data="tableData6" :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px">
          <el-table-column prop="id" label="ID" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名">
          </el-table-column>
          <el-table-column prop="amount1" label="数值 1（元）">
          </el-table-column>
          <el-table-column prop="amount2" label="数值 2（元）">
          </el-table-column>
          <el-table-column prop="amount3" label="数值 3（元）">
          </el-table-column>
        </el-table>
      </div>
      <div style="width: 1200px;margin: auto;">
        <!--头部-->
        <div style="padding-left: 20px;height: 50px;line-height: 50px;background: #409EFF;color: #ffffff;text-align: left">进口指数</div>
        <!--表格-->
        <div style="width: 600px">
          <el-table :data="tableData" border style="width: 100%">
            <template v-for="(item, index) in tabletitle">
              <el-table-column :key= "index" :prop="item.label" :label="item.name" width="150">
              </el-table-column>
            </template>
          </el-table>
        </div>
      </div>
      <!--//-->
      <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
      </el-dialog>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      tableData6: [{
        id: '12987122',
        name: '王小虎',
        amount1: '234',
        amount2: '3.2',
        amount3: 10
      }, {
        id: '12987123',
        name: '王小虎',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
      }, {
        id: '12987124',
        name: '王小虎',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987126',
        name: '王小虎',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
      }, {
        id: '12987123',
        name: '王小虎',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
      }, {
        id: '12987124',
        name: '王小虎',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987126',
        name: '王小虎',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
      }],
      dialogVisible: false,
        tabletitle: [
            {name:'日期',
            label:'date'},
          {name:'姓名',
            label:'name'},
          {name:'身份',
            label:'province'},
          {name:'市区',
            label:'city'},
          {name:'地址',
            label:'address'},
          {name:'邮编',
            label:'zip'},
            ],
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  mounted () {
//      this.getimport()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$router': 'doSomeThing'
  },
  methods: {
      //合并列的方法
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {

      if (columnIndex === 0) {
          if(rowIndex === 0){
              return {
                rowspan: 1,
                colspan: 1
              }
          } else if (rowIndex % 4 === 1) {
            return {
              rowspan: 4,
              colspan: 1
            }
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }

      }
      /*if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }*/
    },
    getimport () {
      this.$root.GO_UTIL.ajax('get', 'http://192.168.141.101:8090/iron/import/forecast', {}, (err, result) => {
        if (!err && !result.error) {
          console.log('result.data::::', result.data, result.data[0].vall_ships)
        }
      })
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleClick(row) {
      console.log(row);
    },
    doSomeThing () {
      console.log('hahha')
    },
    clickto () {
      this.$router.push({path: '/', params: { userId: 123 }})
    }
  }
}
</script>
<style scoped>

</style>
