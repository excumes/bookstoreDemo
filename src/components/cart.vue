<template>
  <div class="shop">
    <div class="title">
      <van-checkbox
        v-model="$store.state.selectAll"
        @click="$store.commit('selectAll')"
        checked-color="#ff4444"
      ></van-checkbox>
      <i class="icon-shop"></i>
      <span>好书联盟</span>
      <span class="edit" @click="showNumber = !showNumber">编辑</span>
    </div>
    <div class="goods-list">
      <div class="goods" v-for="(item, i) in cartInfo" :key="i">
        <van-swipe-cell>
          <van-checkbox
            v-model="item.selected"
            @click="checkboxChange(item.id,item.selected)"
            checked-color="#ff4444"
          ></van-checkbox>
          <div class="goods-card">  
            <div class="goods-img-wrap">
              <img alt="商品图片" :src="item.img" class="goods-img" />
            </div>
            <div class="desc-wrap">
              <div class="goods-name" v-if="showNumber">{{item.title}}</div>
              <van-stepper v-model="item.count" v-else integer/>
              <div class="sku-str"></div>
              <div class="goods-price">¥{{item.price}}.00</div>
              <span class="num">x{{item.count}}</span>
              <div class="err-msg"></div>
            </div>
          </div>
          <template slot="right">
            <van-button square type="danger" text="删除" @click.prevent="remove(item.id, i)" />
          </template>
        </van-swipe-cell>
      </div>
    </div>
    <div class="recommend-goods"></div>
    <div class="cart-bottom">
      <div class="left">
        <van-checkbox
          v-model="$store.state.selectAll"
          @click="$store.commit('selectAll')"
          checked-color="#ff4444"
        >全选</van-checkbox>
      </div>
      <div class="right">
        <div class="total-price">
          合计：￥
          <!-- $store.getters.getTotalPrice -->
          <span class="price-num">{{$store.getters.getTotalPrice}}.00</span>
          <p>不含运费</p>
        </div>
        <van-button type="danger" :disabled="$store.getters.getTotalPrice == 0">结算</van-button>
      </div>
    </div>
    <div class="empty-page" v-show="this.$store.state.cart.length == 0">
      <div class="empty-list">
        <h2>购物车快饿瘪了T.T</h2>
        <div class="desc">快给我挑点宝贝</div>
        <router-link to="/home" tag="div" class="go-homepage-btn">
             <a>去逛逛</a>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
// import { get } from "http";
export default {
  data() {
    return {
      mycart: [],
      checked: false,
      ifDisabled: true,
      showNumber: true //展示编辑

    };
  },
  created() {
    if (this.ifDisabled) {
      this.ifDisabled = false;
    }
    // console.log(this.$store.getters.getTotalPrice)
  },
  methods: {
    remove(id, index) {
      //删除store中数据和 当前组件的
      this.mycart.splice(index, 1);
      this.$store.commit("removeFormCart", id);
    },
    checkboxChange(id, selected) {
        console.log(selected);
      // 商品id ，选择状态  、点击切换状态，更改store
      // selected是点击前的状态
      //   console.log(id+ '----'+ selected);
      selected = !selected;
      console.log(id +'--'+selected);
      this.$store.commit("updateSelected", { id, selected });
    }
  },
  computed:{
    cartInfo(){
      return this.$store.state.cart
    }
  }
};
</script>
<style lang="less" scoped>
.empty-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
  z-index: 999;
  .empty-list{
    padding: 60px 0;
    text-align: center;
    h2{
        font-size: 16px;
        color: #666;
        margin-bottom: 10px;
        font-weight: 400;
    }
    .desc{
            font-size: 14px;
    color: #999;
    }
    .go-homepage-btn{
        box-sizing: border-box;
        width: 104px;
        height: 36px;
        line-height: 18px;
        padding: 8px 0;
        font-size: 14px;
        border: 1px solid #f60;
        margin: 30px auto 0;
        color: #f60;
        border-radius: 3px;
        a{
            color: #f66;
        }
    }
  }
}
.shop {
  max-width: 540px;
  margin: 0 auto;
  min-height: 100vh;
  margin-bottom: 49px;
  .title {
    display: flex;
    color: #444;
    font-size: 14px;
    height: 52px;
    padding: 0 0 0 10px;
    line-height: 52px;
    position: relative;
    .van-checkbox {
      float: left;
      margin-right: 10px;
    }
    .icon-shop {
      background-image: url("data:simage/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAe1BMVEUAAABmZmZmZmZmZmZmZmZpaWlmZmZoaGhsbGxmZmZmZmZkZGR3d3dnZ2dpaWlmZmZmZmaKiopnZ2dmZmZnZ2dnZ2dnZ2dmZmZoaGhoaGhnZ2dnZ2dpaWlqampmZmZnZ2dmZmZnZ2dmZmZmZmZnZ2dmZmZnZ2dnZ2dmZmY+hk1GAAAAKHRSTlMAHuHm+xnrKBDXyzgHWjP4zwOckonzuXRpT0dAFxS+U+/HsYKwr6Z+1CmDegAAATRJREFUOMu1ksmWgyAQRUEU0QbBeYoZe3j//4WtqejJIqQ7i9yFPk7dU7wF7P/suIfdaqhCwoss1NUJABF4EECwWAVOnHnhJxTzT4IcnwU5d4ZgTxHYsehvKXqTlOk16cwnDajWWGG4lzSgtkm6TtLNV8C838HQMXewnCK3cDlFA3f9ShpdEGKvr432c7yQLmnHJ45drMYzwiFA0kdRnyAYQpxHFXdHfN1uJeSBxY6ii9lBUlwbA420STktvdq0rtN26TOViZUNwIg5eHm/lLXf1SF/KukSC2n8TCpgS9MmEMovjaiXHbpB4Zcq/NyetvBLe4wUAkReKUVGIUH8uiQx+aQJkhENOp/UoWFEj9rkj6Tc1OjZjRKwAWEREoCYDyjZhnEhHhA6w+7RnMg+NjjX7AV+AbbXK771Kk31AAAAAElFTkSuQmCC");
      float: left;
      width: 18px;
      height: 50px;
      margin-right: 5px;
      background-size: 18px;
      background-position: 50%;
      background-repeat: no-repeat;
    }
    .edit {
        position: absolute;
        right: 20px;
      color: #38f;
      float: right;
      font-size: 12px;
      padding: 0 10px;
    }
  }
  .goods-list {
    .goods {
      .goods-card {
        box-sizing: border-box;
        min-height: 100px;
        padding: 5px 10px 5px 0;
        margin-left: 40px;
        background: #fff;
      }
      .desc-wrap {
        margin-left: 98px;
        .goods-name {
          color: #333;
          font-size: 14px;
          line-height: 20px;
          height: 40px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .sku-str {
          height: 20px;
          line-height: 16px;
          font-size: 12px;
          color: #666;
          margin-bottom: 2px;
          word-break: keep-all;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .goods-price {
          font-size: 14px;
          color: #f44;
          height: 20px;
          line-height: 20px;
          display: inline-block;
        }
        .num {
          font-size: 12px;
          float: right;
          color: #666;
          line-height: 20px;
        }
        .err-msg {
          font-size: 12px;
          color: #f60;
          line-height: 18px;
          margin-top: 3px;
        }
      }
    }
  }
  .recommend-goods {
    background-color: #f8f8f8;
    width: 100%;
    height: 100px;
  }
  .cart-bottom {
    max-width: 540px;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 100;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    .left {
      display: flex;
      margin-left: 10px;
    }
    .right {
      display: flex;
      .total-price {
        height: 50px;
        box-sizing: border-box;
        font-size: 12px;
        line-height: 16px;
        padding-top: 8px;
        // float: left;
        color: #999;
        text-align: right;
        p {
          margin-top: 0;
        }
      }
      .van-button {
        height: 100%;
        min-width: 80px;
        margin-left: 10px;
      }
    }
  }
}

.goods .goods-img-wrap {
  width: 90px;
  height: 90px;
  float: left;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  background: #f8f8f8;
  background-size: cover;
}
.goods .goods-img {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
