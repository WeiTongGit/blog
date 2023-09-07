
<template>
  <div class="main">
    <div class="nav-box">
      <div
        class="nav-item-box"
        @click="goto(index)"
        v-for="(item, index) in navData"
        :key="item.path"
      >
        {{ item.name }}
      </div>
    </div>
    <swiper :options="swiperOption" ref="swiper" class="swiper">
      <swiper-slide>
        <div class="author">lntongwei</div>
      </swiper-slide>
      <swiper-slide>
        <div class="content-box">
          <div class="left-box">
            <div class="text">
              Since 1998, Jeb Patton has toured throughout the United States and
              abroad as the pianist with the Heath Brothers and the Jimmy Heath
              Quartet. He has performed with Etta Jones, George Coleman, Charles
              McPherson, Winard Harper, Rodney Green, Antonio Hart, the Dizzy
              Gillespie All Stars, The Vanguard Jazz Orchestra, Roberta
              Gambarini, Peter and Will Anderson, as well as with other top
              artists. <br />
              <br />Jeb’s latest two CDs, Tenthish and Shades and Tones, were
              released in 2018 and 2016 respectively on the Cellar Live label.
              Jeb’s is also a published author, educator and professor at Queens
              College and City College.
            </div>
          </div>
          <div class="right-box">
            <img class="image" src="../assets/person.webp" alt="" />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide style="background-color: #7fc322">
        <div class="flex">
          <p>
            <a href="mailto:lntongwei@gmail.com">lntongwei@gmail.com</a>
          </p>
        </div>
      </swiper-slide>
      <swiper-slide style="background-color: #2fc322"> </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import echarts from 'echarts'
import animate from 'animate.css'

export default {
  name: 'swiper-example-mousewheel-control',
  title: 'Mousewheel control',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      navData: [
        {
          name: 'Home',
          path: 'Home',
        },
        {
          name: 'Bio',
          path: 'Bio',
        },
        {
          name: 'Contact',
          path: 'Contact',
        },
        {
          name: 'Media',
          path: 'Media',
        },
      ],
    }
  },
  methods: {
    setEchart() {
      let myChart = echarts.init(this.$refs.echart)
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
        },

        radar: [
          {
            indicator: [
              { text: 'Vue', max: 100 },
              { text: '微信小程序', max: 100 },
              { text: 'HTML', max: 100 },
              { text: 'css', max: 100 },
              { text: 'JavaScript', max: 100 },
            ],
            center: ['50%', '50%'],
            radius: 150,
          },
        ],
        series: [
          {
            type: 'radar',
            tooltip: {
              trigger: 'item',
            },
            areaStyle: {},
            data: [
              {
                value: [80, 60, 70, 70, 70],
                name: '能力值',
              },
            ],
          },
        ],
        textStyle: {
          color: 'rgba(255,255,255,1)',
          fontSize: 22,
        },
      })
    },

    goto(index) {
      this.$refs.swiper.$swiper.slideTo(index, 1000, false)
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.setEchart()
    })
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/css/base.scss';
@import '../assets/css/iconfont.css';
.main {
  background: #da9f75;
  font-family: 'Big Caslon FB', 'Trebuchet MS', 'Lucida Sans Unicode',
    'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  .author {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 184px;
    color: rgba(255, 255, 255, 1);
    text-shadow: 1px 2px #c36622, 2px 4px #e9c6ac;
    animation: bonnerTextAni 2s;
    -moz-animation: bonnerTextAni 2s;
    -webkit-animation: bonnerTextAni 2s;
    -o-animation: bonnerTextAni 2s;
  }

  .content-box {
    width: 100%;
    padding: 30px 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .left-box {
      padding: 20px;
      width: 460px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .text {
        text-align: left;
        font-size: 15px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
          sans-serif;
      }
    }
    .right-box {
      margin-left: 30px;
      .image {
        width: 450px;
        object-fit: cover;
      }
    }
  }
}
.nav-box {
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  .nav-item-box {
    // padding: 0 25px;
    width: 180px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    line-height: 70px;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    text-shadow: 1px 2px rgba(0, 0, 0, 0.6), 2px 4px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: all 0.4s;
    &:hover {
      font-size: 24px;
      opacity: 0.4;
    }
  }
}

.lang-panel {
  position: fixed;
  right: 20px;
  top: 20px;
  border-radius: 5px;
  z-index: 100;
  font-size: 14px;
  .lang {
    background-color: #e9c6ac;
    color: #c36622;
    display: inline-block;
    border-radius: 5px;
    padding: 2px 8px;
  }
}

.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 10px solid #e9c6ac;
  }
  h1 {
    margin-top: 20px;
    text-shadow: 1px 2px #c36622, 2px 4px #e9c6ac;
    text-align: center;
    font-size: 60px;
  }
  p {
    margin-top: 20px;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.6);
    a {
      color: #9e4c10;
    }
    a:hover {
      color: #10629e;
    }
  }
  h2 {
    margin-top: 15px;
  }

  h4 {
    margin-top: 10px;
    font-size: 22px;
  }
  .echart {
    margin-top: 20px;
    width: 600px;
    height: 400px;
  }
  ul {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      margin: 10px 20px;
      width: 200px;
      height: 200px;
      background-color: #fff;
      a {
        display: inline-block;
        img {
          display: inline-block;
          width: 200px;
          height: 200px;
          border-radius: 0;
        }
      }
    }
  }
  .single {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      width: 40px;
      height: 40px;
      margin-right: 5px;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      transition: 0.5s;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    a:hover {
      border-radius: 20%;
    }
  }
}

@keyframes bonnerTextAni {
  0% {
    margin-top: 300px;
    opacity: 0;
  }
  100% {
    margin-top: 0px;
    opacity: 1;
  }
}
</style>
