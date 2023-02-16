<template>
  <div style="height: 100%">
    <el-carousel
      type="card"
      :interval="5000"
      arrow="always"
      style="height: 100%"
    >
      <el-carousel-item
        v-for="item in imgList"
        :key="item.url"
      >
        <el-image
          style="height: 100%; width: 100%"
          :src="item.url"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
  <!--  <div class="animation-header">-->
  <!--    <div>-->
  <!--      <svg-->
  <!--        class="animation-waves"-->
  <!--        xmlns="http://www.w3.org/2000/svg"-->
  <!--        xmlns:xlink="http://www.w3.org/1999/xlink"-->
  <!--        viewBox="0 24 150 28"-->
  <!--        preserveAspectRatio="none"-->
  <!--        shape-rendering="auto"-->
  <!--      >-->
  <!--        <defs>-->
  <!--          <path-->
  <!--            id="gentle-wave"-->
  <!--            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"-->
  <!--          />-->
  <!--        </defs>-->
  <!--        <g class="animation-parallax">-->
  <!--          <use-->
  <!--            xlink:href="#gentle-wave"-->
  <!--            x="48"-->
  <!--            y="0"-->
  <!--            fill="rgba(255,255,255,0.7"-->
  <!--          />-->
  <!--          <use-->
  <!--            xlink:href="#gentle-wave"-->
  <!--            x="48"-->
  <!--            y="3"-->
  <!--            fill="rgba(255,255,255,0.5)"-->
  <!--          />-->
  <!--          <use-->
  <!--            xlink:href="#gentle-wave"-->
  <!--            x="48"-->
  <!--            y="5"-->
  <!--            fill="rgba(255,255,255,0.3)"-->
  <!--          />-->
  <!--          <use-->
  <!--            xlink:href="#gentle-wave"-->
  <!--            x="48"-->
  <!--            y="7"-->
  <!--            fill="#fff"-->
  <!--          />-->
  <!--        </g>-->
  <!--      </svg>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script lang="ts" setup>
const imgList = [
  {
    url: 'https://img0.baidu.com/it/u=3876981621,2651377706&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
  },
  {
    url: 'https://img1.baidu.com/it/u=2027546321,2166687208&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
  },
  {
    url: 'https://img0.baidu.com/it/u=1223316688,3086442176&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
  },
  {
    url: 'https://img0.baidu.com/it/u=3039771636,2906450626&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
  },
  {
    url: 'https://img1.baidu.com/it/u=2600624757,724456213&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1422'
  },
  {
    url: 'https://img0.baidu.com/it/u=763929030,2886073723&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313'
  }
];
</script>
<script lang="ts">
export default {
  name: 'PageIndex'
};
</script>

<style scoped lang="scss">
@import '@/styles/animation.css';

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
