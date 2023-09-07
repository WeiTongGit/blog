<template>
  <div class="home">
    <article @wheel.prevent="handleScroll" class="section" id="sec" ref="sec">
      <section class="a0"></section>
      <section class="a1"></section>
      <section class="a2"></section>
      <section class="a3"></section>
      <section class="a4"></section>
      <section class="a5"></section>
      <section class="a6"></section>
    </article>
    <div class="nav">
      <ul id="nav" ref="nav">
        <li>
          <a href="#">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
          </a>
        </li>
        <li>
          <a href="#">
            <span></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 0
    }
  },
  watch: {
    index: function() {
      let nav = this.$refs.nav.childNodes
      let sec = this.$refs.sec.childNodes

      for (let el = 0; el < nav.length; el++) {
        if (el == this.index) {
          nav[el].childNodes[0].childNodes[0].classList.add('n_native')
        } else if (el != 'item') {
          nav[el].childNodes[0].childNodes[0].classList.remove('n_native')
        }
      }
      for (let el = 0; el < sec.length; el++) {
        if (el == this.index) {
          sec[el].classList.remove('leaving')
          sec[el].classList.add('s_native')
        } else {
          sec[el].classList.remove('s_native')
          sec[el].classList.add('leaving')
        }
      }
    }
  },
  methods: {
    handleScroll(e) {
      if (e.deltaY > 0) {
        if (this.index == 6) {
          this.index = 0
        } else {
          this.index = this.index + 1
        }
      } else {
        if (this.index == 0) {
          this.index = 6
        } else {
          this.index = this.index - 1
        }
      }
      console.log(this.index)
    }
  },
  mounted() {
    console.log(this.$refs.sec)

    let nav = this.$refs.nav.childNodes
    let sec = this.$refs.sec.childNodes
    nav[0].childNodes[0].childNodes[0].classList.add('n_native')
    for (let el = 0; el < sec.length; el++) {
      if (el == 0) {
        sec[el].classList.add('s_native')
      } else {
        sec[el].classList.add('leaving')
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.home {
  width: 100%;
  height: 100vh;
  .section {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #c3223b;
    section {
      width: 100%;
      height: 100%;
      position: absolute;
    }
    .a0 {
      background-color: #22c3aa;
      z-index: 7;
      transition: all 700ms ease 0s;
    }
    .a1 {
      background-color: #22b4c3;
      z-index: 6;
      display: table;
      transition: all 700ms ease 0s;
    }
    .a2 {
      background-color: #228cc3;
      z-index: 5;
      display: table;
      transition: all 700ms ease 0s;
    }
    .a3 {
      background-color: #2263c3;
      z-index: 4;
      display: table;
      transition: all 700ms ease 0s;
    }
    .a4 {
      background-color: #223bc3;
      z-index: 3;
      display: table;
      transition: all 700ms ease 0s;
    }
    .a5 {
      background-color: #3122c3;
      z-index: 2;
      display: table;
      transition: all 700ms ease 0s;
    }
    .a6 {
      background-color: #157a6a;
      z-index: 1;
      display: table;
      transition: all 700ms ease 0s;
    }
  }
  .nav {
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    li {
      display: block;
      width: 14px;
      height: 13px;
      margin: 7px;
      position: relative;
      a {
        display: block;
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        cursor: pointer;
        text-decoration: none;
        span {
          top: 2px;
          left: 2px;
          width: 8px;
          height: 8px;
          border: 1px solid #000;
          border-radius: 50%;
          position: absolute;
          z-index: 1;
        }
      }
    }
  }
}

.n_native {
  background-color: #000;
}
.s_native {
  transform: translate3d(0, 0, 0);
}
.leaving {
  transform: translate3d(0, -100%, 0);
}
</style>
