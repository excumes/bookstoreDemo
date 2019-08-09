<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <img
        src="https://img.yzcdn.cn/upload_files/2019/08/01/FrPYClRKD5ZxqexLGjp6T21nWP4K.jpg!large.jpg"
        alt
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://img.yzcdn.cn/upload_files/2019/08/05/Fr95IyTDSURR49lqzxnDYYDJpXWe.jpg!large.jpg"
        alt
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://img.yzcdn.cn/upload_files/2019/08/07/FojHnjzthaKPejHuhkjKi43vjmtP.jpg!large.jpg"
        alt
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://img.yzcdn.cn/upload_files/2019/08/01/FvZZLg2zws1fcLQSRi8GzdqlRYvi.jpg!large.jpg"
        alt
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://img.yzcdn.cn/upload_files/2019/08/01/FsEK9vnHz7VrKzVe_w_6L78yHs8P.jpg!large.jpg"
        alt
      />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        //轮播图组组件参数
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: true,
        autoplay: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    this.swiper.slideTo(1, 1500, false);
  }
};
</script>
<style lang="less" scoped>
.swiper-slide{
    display: flex;
    justify-content: center;
    position: relative;
}
img {
    height: 100%;
    width: 98%;
    border-radius: 10px;
    margin: 0 auto;
    // padding: 0 5px;
}
.swiper-pagination.swiper-pagination-fraction{
    position: absolute;
    width: 40px;
    left: auto;
    right: 20px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.9);
}
</style>
