
<template>
  <div class="main">
    <div class="background">
      <img
        class="bg-image"
        src="../assets/background.webp"
        width="1920"
        height="1920"
        fetchpriority="high"
      />
    </div>
    <div class="nav-box">
      <div
        class="nav-item-box"
        :class="swiper_index === index ? 'item-active' : ''"
        @click="goto(index)"
        v-for="(item, index) in navData"
        :key="item.path"
      >
        {{ item.name }}
      </div>
    </div>
    <swiper
      :options="swiperOption"
      class="swiper swiper-no-swiping"
      ref="swiper"
    >
      <swiper-slide>
        <div class="author-box">
          <div class="author">lntongwei</div>
          <div class="job">Jazz Musician, Trumpeter</div>
        </div>
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
      <swiper-slide>
        <div class="flex">
          <p class="info-box">
            <a class="email" href="mailto:lntongwei@gmail.com"
              >lntongwei@gmail.com</a
            >
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="audio-box" @click="stop($event)" @mousemove="stop($event)">
          <div style="width: 100%; margin: 0" id="aplayer"></div>
          <video class="video-box" controls>
            <source src="../assets/mp4/test2.mp4" />
            您的浏览器不支持 video 元素。
          </video>
        </div>
      </swiper-slide>

      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import APlayer from 'aplayer' // 引入音乐插件
import 'aplayer/dist/APlayer.min.css' // 引入音乐插件的样式
// import echarts from 'echarts'
import animate from 'animate.css'
let that

export default {
  name: 'swiper-example-mousewheel-control',
  title: 'Mousewheel control',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    // 显示隐藏
    isShowAudioPlayer: {
      default: true,
    },
    // 播放列表
    list: {
      default: function () {
        return [
          //数据格式
          {
            id: 1,
            name: '美人鱼',
            url: require('../assets/mp3/test.mp3'),
            cover: 'ChenYou',
            singer: '林俊杰',
          },
          {
            id: 2,
            name: '起风了',
            url: require('../assets/mp3/test.mp3'),
            cover: 'ChenYou',
            singer: '林俊杰',
          },
        ]
      },
    },
    //  播放索引
    // index
  },
  data() {
    return {
      swiper_index: 0,
      swiperOption: {
        direction: 'vertical',
        preventLinksPropagation: false,
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        on: {
          slideChangeTransitionEnd: function () {
            that.swiper_index = this.activeIndex
            console.log(this.activeIndex) //切换结束时，告诉我现在是第几个slide
          },
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
      audio: [
        // 歌曲列表
        {
          name: 'Enter Hallownest', // 歌曲名字
          artist: 'Christopher Larkin', // 歌曲演唱者
          // 歌曲地址（这里用外链地址）
          url: require('../assets/mp3/test.mp3'),
          cover:
            'http://imge.kugou.com/stdmusic/150/20170815/20170815070007812976.jpg', // 歌曲头像
          lrc: '', // 歌词
          theme: 'rgb(127, 218, 180)', // 播放这首歌曲时的主题色
        },
        {
          name: 'Dirtmouth',
          artist: 'Christopher Larkin',
          url: require('../assets/mp3/test2.mp3'),
          cover:
            'http://imge.kugou.com/stdmusic/150/20200606/20200606220631519630.jpg',
          lrc: '',
          theme: 'rgb(61, 162, 230)',
        },
        {
          name: 'Crossroads',
          artist: 'Christopher Larkin',
          url: require('../assets/mp3/test3.mp3'),
          cover:
            'http://imge.kugou.com/stdmusic/150/20200812/20200812134914113741.jpg',
          lrc: '',
          theme: '#baf',
        },
      ],
      info: {
        fixed: false, // 不开启吸底模式
        listFolded: false, // 折叠歌曲列表
        autoplay: false, // 开启自动播放
        preload: 'auto', // 自动预加载歌曲
        loop: 'all', // 播放循环模式、all全部循环 one单曲循环 none只播放一次
        order: 'list', //  播放模式，list列表播放, random随机播放
      },
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
    initAudio() {
      // 创建一个音乐播放器实例，并挂载到DOM上，同时进行相关配置
      const ap = new APlayer({
        container: document.getElementById('aplayer'),
        audio: this.audio, // 音乐信息
        ...this.info, // 其他配置信息
      })
    },
    goto(index) {
      this.swiper_index = index
      this.$refs.swiper.$swiper.slideTo(index, 1000, false)
    },
    stop(event) {
      event.stopPropagation()
    },
  },
  mounted() {
    that = this
    this.initAudio()
    // this.init()
    // this.$nextTick(function () {
    //   // this.setEchart()
    // })
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/css/base.scss';
@import '../assets/css/iconfont.css';

.main {
  font-family: 'Big Caslon FB', 'Trebuchet MS', 'Lucida Sans Unicode',
    'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  .background {
    position: fixed;
    right: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    .bg-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
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
    background: rgba(0, 0, 0, 1);
    z-index: 10;
    .nav-item-box {
      // padding: 0 25px;
      min-width: 100px;
      min-height: 50px;
      width: 8vw;
      height: 4vw;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      // line-height: 70px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      text-shadow: 1px 2px rgba(0, 0, 0, 0.6), 2px 4px rgba(0, 0, 0, 0.4);
      cursor: pointer;
      transition: all 0.4s;
      &:hover {
        font-size: 12px;
        opacity: 0.4;
      }
    }
    .item-active {
      color: rgb(163, 149, 109);
    }
  }
  .swiper {
    width: 100vw;
  }
  .author-box {
    width: 100%;
    margin-bottom: 15vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    animation: bonnerTextAni 2s;
    -moz-animation: bonnerTextAni 2s;
    -webkit-animation: bonnerTextAni 2s;
    -o-animation: bonnerTextAni 2s;
    .author {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 10vw;
      font-weight: 100;
      color: rgba(163, 149, 109, 1);
      // text-shadow: 1px 2px #c36622, 2px 4px #e9c6ac;
    }
    .job {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 2vw;
      color: rgba(255, 255, 255, 1);
    }
  }

  .content-box {
    width: 90%;
    padding: 30px 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background: rgba(255, 255, 255, 0.8);
    .left-box {
      padding: 2vw;
      width: 45%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .text {
        text-align: left;
        font-size: 1.5vw;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
          sans-serif;
      }
    }
    .right-box {
      margin-left: 5%;
      width: 45%;
      .image {
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .info-box {
    margin-bottom: 20vw;
    .email {
      font-size: 2vw;
      color: rgb(163, 149, 109);
      text-decoration: none;
      &:hover {
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }

  .audio-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    .video-box {
      margin-top: 20px;
      width: 60%;
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

.poppervulumn-class {
  min-width: 20px !important;
  padding: 12px 5px !important;
}
.audio-player {
  .audio-mock-player {
    position: relative;
    width: 580px;
    padding: 20px;
    background: rgba(34, 34, 34, 0.8);
    border: 1px solid rgba(34, 34, 34, 1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    .play-sty {
      margin: 0 16px;
      width: 52px;
      height: 52px;
    }
    .preicon {
      width: 32px;
      height: 32px;
    }
    .closeicon {
      position: absolute;
      right: -10px;
      top: -10px;
      width: 20px;
      height: 20px;
    }
    .right-menu {
      margin-left: 40px;
      flex: 1;
      .bottom {
        display: flex;
        align-items: center;
        .progress {
          flex: 1;
        }
        .current {
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #ffffff;
          text-align: left;
          font-weight: 400;
          margin-left: 12px;
        }
        .duration {
          opacity: 0.6;
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #ffffff;
          text-align: left;
          font-weight: 400;
          margin-right: 16px;
        }
        .vulumn {
          position: relative;
          img {
            width: 18.5px;
            height: 15px;
          }
          .vulumn-progress {
            position: absolute;
            top: -73px;
            left: -12px;
          }
        }
      }
      .song-name {
        height: 25px;
        font-family: PingFangSC-Regular;
        font-size: 18px;
        color: #ffffff;
        text-align: left;
        font-weight: 400;
        margin-bottom: 15px;
      }
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
@media screen and (min-width: 768px) {
  .main {
    .nav-box {
      .nav-item-box {
        font-size: 1.5vw;
        &:hover {
          font-size: 1.2vw;
          opacity: 0.4;
        }
      }
    }
  }
}
</style>
