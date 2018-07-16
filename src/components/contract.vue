<!--Created by win10 on 2018/7/4.-->
<template>
    <div>
      <!--<p @click="ajaxdata">woshiguchao</p>-->
      <div style="width: 1200px;margin: auto">
        <el-menu active-text-color= '#409EFF' :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="unfinish">未完成</el-menu-item>
          <el-menu-item index="finished">已完成</el-menu-item>
        </el-menu>
        <div class="line"></div>
        <div v-show="unfinish">
          <el-table :data="progressData" style="width: 100%" class="titlecolor">
            <el-table-column prop="contractTime" label="合同日期" width="200px">
            </el-table-column>
            <el-table-column prop="importer" label="进口商" width="200px">
            </el-table-column>
            <el-table-column prop="volume" label="成交量" width="200px">
            </el-table-column>
            <el-table-column prop="unitPrice" label="单价" width="200px">
            </el-table-column>
            <el-table-column prop="status" label="状态" width="200px">
              <template slot-scope="scope">
                <span v-if="scope.row.status === '0'">待匹配船舶</span>
                <el-badge v-else-if="scope.row.status === '1'" :value="scope.row.shipNumber" class="item">
                  <i class="el-icon-news" style="font-size: 18px;color: #409EFF;cursor: pointer" @click="selectShip(scope.row.contractId)"></i>
                </el-badge>
                <el-tooltip v-else-if="scope.row.status === '2'" placement="top">
                  <div slot="content">
                    <div>IMO：{{scope.row.imo}}</div>
                    <div>MMSI：{{scope.row.mmsi}}</div>
                    <div>DWT：{{scope.row.dwt}}</div>
                    <div><i class="el-icon-location-outline" style="font-size: 18px;color: #409EFF"></i></div>
                  </div>
                  <div>已选定船舶</div>
                </el-tooltip>
                <el-tooltip v-else-if="scope.row.status === '3'" placement="top">
                  <div slot="content">到达锚地的时间：{{scope.row.a}}</div>
                  <div>装货等待</div>
                </el-tooltip>
                <el-tooltip v-else-if="scope.row.status === '4'" placement="top">
                  <div slot="content">开始装货时间：{{scope.row.a}}</div>
                  <div>正在装货</div>
                </el-tooltip>
                <el-tooltip v-else-if="scope.row.status === '5'" placement="top">
                  <div slot="content">
                    <div>离岗时间：{{scope.row.a}}</div>
                    <div>目的地：{{scope.row.a}}</div>
                    <div>预计到达时间：{{scope.row.a}}</div>
                  </div>
                  <div>航行中</div>
                </el-tooltip>
                <el-tooltip v-else-if="scope.row.status === '6'" placement="top">
                  <div slot="content">到达锚地的时间：{{scope.row.a}}</div>
                  <div>卸货等待</div>
                </el-tooltip>
                <el-tooltip v-else-if="scope.row.status === '7'" placement="top">
                  <div slot="content">开始卸货时间：{{scope.row.a}}</div>
                  <div>卸货中</div>
                </el-tooltip>
                <el-tooltip v-else-if="scope.row.status === '8'" placement="top">
                  <div slot="content">卸货完成时间：{{scope.row.a}}</div>
                  <div>卸货完成</div>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column prop="similar" label="">
              <template slot-scope="scope">
                <i class="el-icon-edit" style="margin-right: 10px;color: #409EFF;font-size: 18px" @click="addcontract(scope.row.contract_id)"></i>
                <el-badge :value="scope.row.similar" class="item">
                  <i class="el-icon-menu" style="color: #409EFF;font-size: 18px" @click="compareContract(scope.row.contract_id)"></i>
                </el-badge>
              </template>
            </el-table-column>
          </el-table>
          <div class="table-pagination" v-if="CDTotalPage > limit">
            <el-pagination background layout="prev, pager, next" :total="CDTotalPage" :current-page="CDCurrentPageNum" :page-size="limit">
            </el-pagination>
          </div>
        </div>
        <!--<add-contract v-show="addshow"></add-contract>-->
        <div v-show="finished">
          <el-table :data="progressData" style="width: 100%" class="titlecolor">
            <el-table-column prop="contractTime" label="合同日期" width="200px">
            </el-table-column>
            <el-table-column prop="importer" label="进口商" width="200px">
            </el-table-column>
            <el-table-column prop="volume" label="成交量" width="200px">
            </el-table-column>
            <el-table-column prop="unitPrice" label="单价" width="200px">
            </el-table-column>
            <el-table-column prop="status" label="状态" width="200px">
              <template slot-scope="scope">
                <span v-if="scope.row.status === '0'">待审核</span>
                <span v-else-if="scope.row.status === '1'" class="item">
                  <el-tooltip placement="top">
                  <div slot="content">审核失败的解释</div>
                  <i class="el-icon-info"></i>
                </el-tooltip>
                  <span>审核失败</span>
                </span>
                <span v-else-if="scope.row.status === '2'">已通过</span>
              </template>
            </el-table-column>
            <el-table-column prop="similar" label="">
              <template slot-scope="scope">
                <span v-if="scope.row.status === '0'">
                  <el-rate v-model="value1" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </span>
                <span v-else-if="scope.row.status === '1'" class="item">
                  <el-rate v-model="value2" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </span>
                <span v-else-if="scope.row.status === '2'">
                  <el-rate v-model="value3" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                </span>
              </template>
            </el-table-column>
          </el-table>
          <p>finished</p>
        </div>
        <!--<div :class="{active:isactive,textdanger:haserror}">hello</div>-->
        <!--<div :class="objectclass">hello</div>
        <div :style="{color:activecolor,fontSize:fontSize + 'px'}">hello</div>
        <div :style="[arr1,arr2]">hello</div>-->
        <selectship></selectship>
        <addContract></addContract>
        <compare-contract></compare-contract>
      </div>
      <el-autocomplete popper-class="my-autocomplete" v-model="state3" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handlSelect">
        <template slot-scope="{ item }">
          <div class="name">{{ item.enName }}</div>
        </template>
      </el-autocomplete>
      <div id="outer">
        <div style="text-indent: 10px" id="inner">some text,some text,some text,some text
          <p style="width: 200px">this is a paragragh</p>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import selectship from './selectShip.vue'
import addContract from './addContract.vue'
import compareContract from './compareContract.vue'
export default {
  components: {selectship, addContract, compareContract},
  data () {
    return {
//      addshow: false,
      restaurants: [],
      state3: '',
      arr1: {
        'font-size': '30px'
      },
      arr2: {
        color: 'red'
      },
      activecolor: 'red',
      fontSize: 30,
      isActive: true,
      error: null,
      haserror: true,
      value1: 2,
      value2: 3,
      value3: 4,
      CDCurrentPageNum: 1,
      CDTotalPage: 20,
      limit: 10,
      activeIndex: 'unfinish',
      unfinish: true,
      finished: false,
      progressData: [
        {
          contract_id: '1',
          contractTime: '2018-06-01',
          importer: '进口商0',
          volume: '23.51',
          unitPrice: '57.8',
          status: '0',
          shipNumber: 4,
          similar: '4',
          imo: '',
          mmsi: '',
          dwt: '',
          a: ''
        },
        {
          contract_id: '2',
          contractTime: '2018-06-01',
          importer: '进口商1',
          volume: '23.51',
          unitPrice: '57.8',
          status: '1',
          shipNumber: 4,
          similar: '4',
          imo: '',
          mmsi: '',
          dwt: '',
          a: '',
        },
        {
          contract_id: '3',
          contractTime: '2018-06-01',
          importer: '进口商2',
          volume: '23.51',
          unitPrice: '57.8',
          status: '2',
          shipNumber: 4,
          similar: '4',
          imo: '',
          mmsi: '',
          dwt: '',
          a: '',
        },
        {
          contractTime: '2018-06-01',
          importer: '进口商3',
          volume: '23.51',
          unitPrice: '57.8',
          status: '3',
          shipNumber: 4,
          similar: '4',
          imo: '',
          mmsi: '',
          dwt: '',
          a: '',
        },
        {
          contractTime: '2018-06-01',
          importer: '进口商4',
          volume: '23.51',
          unitPrice: '57.8',
          status: '4',
          shipNumber: 4,
          similar: '4',
          imo: '',
          mmsi: '',
          dwt: '',
          a: '',
        },
        {
          contractTime: '2018-06-01',
          importer: '进口商5',
          volume: '23.51',
          unitPrice: '57.8',
          status: '5',
          shipNumber: 4,
          similar: '4',
          imo: '',
          mmsi: '',
          dwt: '',
          a: '',
        },
        {
          contractTime: '2018-06-01',
          importer: '进口商6',
          volume: '23.51',
          unitPrice: '57.8',
          status: '6',
          shipNumber: 4,
          similar: '4',
          imo: '',
          mmsi: '',
          dwt: '',
          a: '',
        },
        {
          contractTime: '2018-06-01',
          importer: '进口商7',
          volume: '23.51',
          unitPrice: '57.8',
          status: '7',
          shipNumber: 4,
          similar: '4',
          imo: '',
          mmsi: '',
          dwt: '',
          a: '',
        },
        {
          contractTime: '2018-06-01',
          importer: '进口商8',
          volume: '23.51',
          unitPrice: '57.8',
          status: '8',
          shipNumber: 4,
          similar: '4',
          imo: '',
          mmsi: '',
          dwt: '',
          a: '',
        },
      ],
      product_arr_info: [
        {
          "id": 100,
          "enName": "CSN粉",
          "cnName": "CSN粉",
          "FeAvg": 61.79142857,
          "SiAvg": 5.90333333,
          "AlAvg": 1.35333333,
          "PAvg": 0.05920000,
          "SAvg": 0.01000000,
          "H2oAvg": 8.20000000
        },
        {
          "id": 101,
          "enName": "FMG粉",
          "cnName": "FMG粉",
          "FeAvg": 57.52861538,
          "SiAvg": 6.00162602,
          "AlAvg": 2.80804878,
          "PAvg": 0.05825197,
          "SAvg": 0.03150000,
          "H2oAvg": 8.23760163
        },
        {
          "id": 102,
          "enName": "PB粉",
          "cnName": "PB粉",
          "FeAvg": 61.93533333,
          "SiAvg": 3.43444444,
          "AlAvg": 2.04777778,
          "PAvg": 0.09144444,
          "SAvg": 0.04566667,
          "H2oAvg": 8.99923077
        },
        {
          "id": 103,
          "enName": "PB块",
          "cnName": "PB块",
          "FeAvg": 62.70000000,
          "SiAvg": 2.63000000,
          "AlAvg": 1.41000000,
          "PAvg": 0.08900000,
          "SAvg": 0.01800000,
          "H2oAvg": 4.05000000
        },
        {
          "id": 104,
          "enName": "南非块",
          "cnName": "南非块",
          "FeAvg": 64.26075000,
          "SiAvg": 5.29610345,
          "AlAvg": 1.44820690,
          "PAvg": 0.05712069,
          "SAvg": 0.01460690,
          "H2oAvg": 1.55136364
        },
        {
          "id": 105,
          "enName": "塞拉利昂粉",
          "cnName": "塞拉利昂粉",
          "FeAvg": 57.30866667,
          "SiAvg": 2.76970000,
          "AlAvg": 6.53800000,
          "PAvg": 0.07410000,
          "SAvg": 0.04755000,
          "H2oAvg": 13.20318182
        },
        {
          "id": 106,
          "enName": "委内瑞拉粉",
          "cnName": "委内瑞拉粉",
          "FeAvg": 63.97800000,
          "SiAvg": 3.57666667,
          "AlAvg": 0.82333333,
          "PAvg": 0.08506667,
          "SAvg": 0.01350000,
          "H2oAvg": 6.10666667
        },
        {
          "id": 107,
          "enName": "委内瑞拉块",
          "cnName": "委内瑞拉块",
          "FeAvg": 64.14200000,
          "SiAvg": 1.49000000,
          "AlAvg": 0.74333333,
          "PAvg": 0.10600000,
          "SAvg": 0.01050000,
          "H2oAvg": 3.28000000
        },
        {
          "id": 108,
          "enName": "智利粉",
          "cnName": "智利粉",
          "FeAvg": 65.90284848,
          "SiAvg": 4.35143662,
          "AlAvg": 1.18242857,
          "PAvg": 0.02207042,
          "SAvg": 0.13143662,
          "H2oAvg": 7.88709302
        },
        {
          "id": 109,
          "enName": "纽曼粉",
          "cnName": "纽曼粉",
          "FeAvg": 62.38702128,
          "SiAvg": 4.30956522,
          "AlAvg": 2.32558140,
          "PAvg": 0.08460976,
          "SAvg": 0.01477500,
          "H2oAvg": 7.44214286
        },
        {
          "id": 110,
          "enName": "纽曼块",
          "cnName": "纽曼块",
          "FeAvg": 63.34902439,
          "SiAvg": 3.39173913,
          "AlAvg": 1.39444444,
          "PAvg": 0.08186957,
          "SAvg": 0.01604348,
          "H2oAvg": 4.09384615
        },
        {
          "id": 111,
          "enName": "超特粉",
          "cnName": "超特粉",
          "FeAvg": 57.19000000,
          "SiAvg": 6.45142857,
          "AlAvg": 2.97428571,
          "PAvg": 0.05171429,
          "SAvg": 0.03228571,
          "H2oAvg": 9.15250000
        },
        {
          "id": 112,
          "enName": "金布巴粉",
          "cnName": "金布巴粉",
          "FeAvg": 61.39000000,
          "SiAvg": 4.16272727,
          "AlAvg": 2.98454545,
          "PAvg": 0.11690909,
          "SAvg": 0.02109091,
          "H2oAvg": 7.28520000
        },
        {
          "id": 113,
          "enName": "麦克粉",
          "cnName": "麦克粉",
          "FeAvg": 60.86437500,
          "SiAvg": 4.55923077,
          "AlAvg": 2.23076923,
          "PAvg": 0.08800000,
          "SAvg": 0.02784615,
          "H2oAvg": 7.86555556
        },
        {
          "id": 114,
          "enName": "BRBF粉",
          "cnName": "BRBF粉",
          "FeAvg": 62.48000000,
          "SiAvg": 6.07000000,
          "AlAvg": 1.53600000,
          "PAvg": 0.05200000,
          "SAvg": null,
          "H2oAvg": 7.56000000
        },
        {
          "id": 115,
          "enName": "CSN块",
          "cnName": "CSN块",
          "FeAvg": 60.07000000,
          "SiAvg": 7.23000000,
          "AlAvg": 2.47000000,
          "PAvg": 0.07300000,
          "SAvg": null,
          "H2oAvg": 6.70000000
        },
        {
          "id": 116,
          "enName": "PMI粉",
          "cnName": "PMI粉",
          "FeAvg": 58.08000000,
          "SiAvg": 6.61000000,
          "AlAvg": 2.95000000,
          "PAvg": 0.14000000,
          "SAvg": 0.02300000,
          "H2oAvg": 8.98000000
        },
        {
          "id": 117,
          "enName": "PMI块",
          "cnName": "PMI块",
          "FeAvg": 59.80000000,
          "SiAvg": 5.71000000,
          "AlAvg": 2.20000000,
          "PAvg": 0.13000000,
          "SAvg": 0.01500000,
          "H2oAvg": 5.19000000
        },
        {
          "id": 118,
          "enName": "SFCJ粉",
          "cnName": "SFCJ粉",
          "FeAvg": 64.80428571,
          "SiAvg": 1.84166667,
          "AlAvg": 1.68416667,
          "PAvg": 0.05441667,
          "SAvg": 0.01200000,
          "H2oAvg": 9.47200000
        },
        {
          "id": 119,
          "enName": "SSFT粉",
          "cnName": "SSFT粉",
          "FeAvg": 62.56000000,
          "SiAvg": 7.44000000,
          "AlAvg": 1.10000000,
          "PAvg": 0.04700000,
          "SAvg": null,
          "H2oAvg": 6.96666667
        },
        {
          "id": 120,
          "enName": "一钢粉",
          "cnName": "一钢粉",
          "FeAvg": 60.73400000,
          "SiAvg": 5.28066667,
          "AlAvg": 2.10866667,
          "PAvg": 0.03300000,
          "SAvg": 0.05033333,
          "H2oAvg": 6.06333333
        },
        {
          "id": 121,
          "enName": "一钢块",
          "cnName": "一钢块",
          "FeAvg": 60.65500000,
          "SiAvg": 4.23500000,
          "AlAvg": 1.90500000,
          "PAvg": 0.03150000,
          "SAvg": 0.04250000,
          "H2oAvg": 3.72000000
        },
        {
          "id": 122,
          "enName": "乌精粉",
          "cnName": "乌精粉",
          "FeAvg": 65.46348993,
          "SiAvg": 8.23008000,
          "AlAvg": 0.17928571,
          "PAvg": 0.00893600,
          "SAvg": 0.06072000,
          "H2oAvg": 9.21424242
        },
        {
          "id": 123,
          "enName": "伊朗粉",
          "cnName": "伊朗粉",
          "FeAvg": 63.82201835,
          "SiAvg": 3.94031707,
          "AlAvg": 0.86671622,
          "PAvg": 0.05880256,
          "SAvg": 0.42252564,
          "H2oAvg": 4.19585333
        },
        {
          "id": 124,
          "enName": "伊朗块",
          "cnName": "伊朗块",
          "FeAvg": 59.65454545,
          "SiAvg": 5.11285714,
          "AlAvg": 0.62857143,
          "PAvg": 0.00957143,
          "SAvg": 0.05628571,
          "H2oAvg": 1.04218182
        },
        {
          "id": 125,
          "enName": "俄精粉",
          "cnName": "俄精粉",
          "FeAvg": 63.56361765,
          "SiAvg": 0.81814815,
          "AlAvg": 1.66814815,
          "PAvg": 0.06021429,
          "SAvg": 0.30085185,
          "H2oAvg": 3.40366667
        },
        {
          "id": 126,
          "enName": "加拿大粉",
          "cnName": "加拿大粉",
          "FeAvg": 65.61818033,
          "SiAvg": 4.58702703,
          "AlAvg": 0.31742857,
          "PAvg": 0.01100000,
          "SAvg": 0.00588462,
          "H2oAvg": 3.90097561
        },
        {
          "id": 127,
          "enName": "南非粉",
          "cnName": "南非粉",
          "FeAvg": 62.66913295,
          "SiAvg": 2.84385185,
          "AlAvg": 0.97219048,
          "PAvg": 0.16519633,
          "SAvg": 0.04256604,
          "H2oAvg": 4.90773723
        },
        {
          "id": 128,
          "enName": "印度粉",
          "cnName": "印度粉",
          "FeAvg": 58.72872712,
          "SiAvg": 4.68350000,
          "AlAvg": 3.60892157,
          "PAvg": 0.05458000,
          "SAvg": 0.01388788,
          "H2oAvg": 9.88067308
        },
        {
          "id": 129,
          "enName": "印度块",
          "cnName": "印度块",
          "FeAvg": 58.37428571,
          "SiAvg": 3.47200000,
          "AlAvg": 2.45000000,
          "PAvg": 0.07900000,
          "SAvg": 0.01480000,
          "H2oAvg": 5.43600000
        },
        {
          "id": 130,
          "enName": "印度球",
          "cnName": "印度球",
          "FeAvg": 64.82250000,
          "SiAvg": 2.84666667,
          "AlAvg": 2.85500000,
          "PAvg": 0.04833333,
          "SAvg": 0.00800000,
          "H2oAvg": 1.34000000
        },
        {
          "id": 131,
          "enName": "吉普森块",
          "cnName": "吉普森块",
          "FeAvg": 55.18000000,
          "SiAvg": 12.07000000,
          "AlAvg": 2.31000000,
          "PAvg": 0.05800000,
          "SAvg": 0.04900000,
          "H2oAvg": 1.63000000
        },
        {
          "id": 132,
          "enName": "国王粉",
          "cnName": "国王粉",
          "FeAvg": 57.38200000,
          "SiAvg": 5.74000000,
          "AlAvg": 2.22000000,
          "PAvg": 0.05900000,
          "SAvg": 0.01733333,
          "H2oAvg": 8.38500000
        },
        {
          "id": 133,
          "enName": "库尔扬诺宾粉",
          "cnName": "库尔扬诺宾粉",
          "FeAvg": 56.77000000,
          "SiAvg": null,
          "AlAvg": null,
          "PAvg": null,
          "SAvg": null,
          "H2oAvg": 6.84000000
        },
        {
          "id": 134,
          "enName": "新西兰粉",
          "cnName": "新西兰粉",
          "FeAvg": 56.63590909,
          "SiAvg": 3.76055556,
          "AlAvg": 3.70250000,
          "PAvg": 0.16000000,
          "SAvg": 0.01000000,
          "H2oAvg": 3.17500000
        },
        {
          "id": 135,
          "enName": "朝鲜块",
          "cnName": "朝鲜块",
          "FeAvg": 35.32333333,
          "SiAvg": 18.70333333,
          "AlAvg": 1.69000000,
          "PAvg": 0.06866667,
          "SAvg": 0.04866667,
          "H2oAvg": 10.56888889
        },
        {
          "id": 136,
          "enName": "毛里塔尼粉",
          "cnName": "毛里塔尼粉",
          "FeAvg": 62.18888889,
          "SiAvg": 9.29538462,
          "AlAvg": 0.87000000,
          "PAvg": 0.06569231,
          "SAvg": 0.03052941,
          "H2oAvg": 2.07518519
        },
        {
          "id": 137,
          "enName": "秘鲁粉",
          "cnName": "秘鲁粉",
          "FeAvg": 68.81014925,
          "SiAvg": 2.03973684,
          "AlAvg": 0.37454545,
          "PAvg": 0.01074561,
          "SAvg": 0.31162832,
          "H2oAvg": 7.50725806
        },
        {
          "id": 138,
          "enName": "秘鲁块",
          "cnName": "秘鲁块",
          "FeAvg": 57.69200000,
          "SiAvg": 8.99200000,
          "AlAvg": 1.09000000,
          "PAvg": 0.05440000,
          "SAvg": 3.28300000,
          "H2oAvg": 1.06000000
        },
        {
          "id": 139,
          "enName": "罗泊河粉",
          "cnName": "罗泊河粉",
          "FeAvg": 58.55812500,
          "SiAvg": 4.13133333,
          "AlAvg": 3.26800000,
          "PAvg": 0.05593750,
          "SAvg": 0.01925000,
          "H2oAvg": 8.90500000
        },
        {
          "id": 140,
          "enName": "罗泊河块",
          "cnName": "罗泊河块",
          "FeAvg": 60.10500000,
          "SiAvg": 3.94000000,
          "AlAvg": 2.34000000,
          "PAvg": 0.06000000,
          "SAvg": 0.02100000,
          "H2oAvg": 5.70000000
        },
        {
          "id": 141,
          "enName": "金布巴块",
          "cnName": "金布巴块",
          "FeAvg": 63.10000000,
          "SiAvg": null,
          "AlAvg": null,
          "PAvg": null,
          "SAvg": null,
          "H2oAvg": 4.10000000
        },
        {
          "id": 142,
          "enName": "阿特拉斯粉",
          "cnName": "阿特拉斯粉",
          "FeAvg": 56.02333333,
          "SiAvg": 7.75555556,
          "AlAvg": 2.34333333,
          "PAvg": 0.06411111,
          "SAvg": 0.04955556,
          "H2oAvg": 7.31714286
        },
        {
          "id": 143,
          "enName": "阿特拉斯块",
          "cnName": "阿特拉斯块",
          "FeAvg": 58.21333333,
          "SiAvg": 5.65000000,
          "AlAvg": 1.40000000,
          "PAvg": 0.08100000,
          "SAvg": 0.01700000,
          "H2oAvg": 4.86666667
        },
        {
          "id": 144,
          "enName": "韩国块",
          "cnName": "韩国块",
          "FeAvg": 45.00000000,
          "SiAvg": null,
          "AlAvg": null,
          "PAvg": 0.09000000,
          "SAvg": 0.23000000,
          "H2oAvg": 0.35000000
        },
        {
          "id": 145,
          "enName": "俄精球",
          "cnName": "俄精球",
          "FeAvg": 63.00000000,
          "SiAvg": 9.10000000,
          "AlAvg": null,
          "PAvg": null,
          "SAvg": null,
          "H2oAvg": null
        },
        {
          "id": 146,
          "enName": "SFHT粉",
          "cnName": "SFHT粉",
          "FeAvg": 59.24000000,
          "SiAvg": null,
          "AlAvg": null,
          "PAvg": null,
          "SAvg": null,
          "H2oAvg": null
        },
        {
          "id": 147,
          "enName": "SSFG粉",
          "cnName": "SSFG粉",
          "FeAvg": 60.27000000,
          "SiAvg": null,
          "AlAvg": null,
          "PAvg": null,
          "SAvg": null,
          "H2oAvg": null
        }
      ],
    }
  },
  mounted () {
  },
  computed: {
    objectclass: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      if (key === 'unfinish') {
        this.unfinish = true
        this.finished = false
      } else {
        this.unfinish = false
        this.finished = true
      }
      console.log(key, keyPath)
    },
    addcontract (contract_id) {
      console.log('1', contract_id)
      this.$root.GOEVENT.$emit('ADD_CONTRACT', {contract_id: contract_id})
//      this.addshow = true
    },
    compareContract (contract_id) {
      this.$root.GOEVENT.$emit('COMPARE_CONTRACT',{contract_id: contract_id})
    },
    selectShip (contractId) {
      console.log('haha')
      this.$root.GOEVENT.$emit('SELECT_SHIP', {contract_id: contractId})
    },
    querySearch(queryString, cb) {
      /*let data = {info: queryString, limit: 10}
      window.GO_UTIL.ajax('get', '/iron/search/businessOrShipper', data, (err, result) => {
        if (!result.error) {
          console.log(result)
          cb(result.data);
        }
      })*/
      console.log('queryString',queryString)
      var restaurants = this.product_arr_info;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        console.log('restaurant',restaurant)
        return (restaurant.enName.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handlSelect(item) {
      console.log('data', this.state3, item)
      this.state3 = item.enName
    }
    /*ajaxdata () {
      let data = {}
      window.GO_UTIL.ajax('get', '/home/import/history/LflAndMom', data, (err, result) => {
        if (!err && !result.error) {
          console.log(result.data)
        }
      })
    }*/
  }
}
</script>

<style lang="less" rel="stylesheet/less">
  .titlecolor th{
    background: #409EFF;
    color: white;
    text-align: center;
  }
  .el-table .cell, .el-table th div {
     overflow: visible!important;
  }

  .my-autocomplete {
    li {
      line-height: normal;
      padding: 7px;
      .name {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .addr {
        font-size: 12px;
        color: #b4b4b4;
      }
      .highlighted .addr {
        color: #ddd;
      }
    }
  }

</style>
<style lang="less" rel="stylesheet/less" scoped>

</style>
