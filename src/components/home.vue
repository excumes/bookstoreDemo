<template>
  <div class="wrapper">
    <div class="content">
      <div class="search-wrap">
        <div class="search-content" @click="search=true">
          <van-icon name="search" />
          <span>我们的后半生</span>
        </div>
        <div class="shop-search" v-show="search">
          <form action="/">
            <van-search
              v-model="value"
              placeholder="我们的后半生"
              show-action
              @cancel="search=false"
              @search="onSearch"
            />
          </form>
          <div class="search-list-wrap" v-show="hasHis">
            <div class="search-title">历史搜索</div>
            <ul class="searh-history-list">
              <li v-for="(item , i) in searchHistory" :key="i">{{item}}</li>
            </ul>
            <a class="shop-search__button" @click="clearHis">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAPZJREFUWAntV1EOgyAMlbFjeKFt94BwIiP32HYhr0EYTSQhtRVhy/wAEiM82kd5VFKHofUmagUwxtyccxb8pZRqmqZ3Ddelxgl81sXH0B1jIDVcGwW01k/v/b2GLOcjhHjN8/xI7aoVSEmO9sPG/FHbduw2ORC3rpT6qVzWWnKtv+ZA3Fz6vqYDqs9FTtlSWE7J0xXoARQrADclPPi8ORzb4XE2CbEDd01zOPbH42IFMMG34x5AV6ArUHwPQFlFVTYcnvtMiwPANV1cgMPjPPfuOXC6Ans5sIRzG3MVDXe2CAcusrEKwO9W8GAdSTYaXFYuerZ59AOf1UYZflG4wAAAAABJRU5ErkJggg=="
                class="shop-search__clear-icon js-not-share"
              />
              清空历史搜索
            </a>
          </div>
        </div>
      </div>
      <div class="swiper-wrap">
        <swipe></swipe>
      </div>
      <div class="notice-wrap">
        <div class="notice-box">
          <div class="content-box">
            <p
              class="content"
            >亲爱的读者好！客服10:00~19:00为您服务，欢迎咨询。本店专营「精品爆款好书」，均为官仓正品发货（周末不发货；海南地区无法下单），本本都好看！祝您阅读愉快~</p>
            <!-- <div class="content">亲爱的读者好！客服10:00~19:00为您服务，欢迎咨询。本店专营「精品爆款好书」，均为官仓正品发货（周末不发货；海南地区无法下单），本本都好看！祝您阅读愉快~</div> -->
          </div>
        </div>
      </div>
      <div class="cap-wrap">
        <img
          src="https://img.yzcdn.cn/upload_files/2019/08/07/FmB3ExUJ0AuIdNNzSQ_l-3SUXavK.jpg!large.jpg"
          alt
        />
      </div>
      <div class="image-ad">
        <img
          src="https://img.yzcdn.cn/upload_files/2019/08/07/Fu6tcs604XLNcs1kAwH7IXnIEARO.png!large.png"
          alt
        />
        <a href="#" style="top: 0px; left: 0px; width: 375px; height: 115px;"></a>
      </div>
      <div class="showcase-tag">
        <!-- 内容区 -->
        <van-tabs v-model="active">
          <van-tab :title="item.month+'月好书'" v-for="(item, i) in data.list" :key="i">
            <div class="goods-wrap">
              <ul style="height:540px">
                <li v-for="(book, i) in item.books" :key="i" ref="bookul">
                  <a href="javascript:;">
                    <div class="img-box">
                      <img :src="book.img" alt /> 
                    </div>
                    <div class="info">
                      <h3 class="title">{{book.title}}</h3>
                      <div class="price-info">
                        <div class="price">
                          <span>￥</span>
                          {{book.price}}
                        </div>
                        <van-icon name="cart-circle" @click="addToCart(book)"></van-icon>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="tabbar">
      <ul class="tabbar-ul">
        <li class="tab-home">
          <van-icon name="wap-home" />
        </li>
        <router-link to="/cart" class="tab-cart" tag="li">购物车</router-link>
        <li class="tab-order">我的订单</li>
      </ul>
    </div>
  </div>
</template>
<script>
import swipe from "./swipe";
const data = {
  list: [
    {
      month: 8,
      books: [
        {
          id: 1,
          img:
            "https://img.yzcdn.cn/upload_files/2019/08/06/Fgdw-G1AayBme6OClJVYgDOQrkRa.jpg!middle.jpg",
          title:
            "《楚辞》2019全新版（爱美的人读《楚辞》，中华“美文学”的源头，直抵中国人的精神世界；特赠3份独家赠品",
          price: "108",
          count:'1',
          selected: false
        }
      ]
    },
    {
      month: 7,
      books: [
        {
          id: 2,
          img:
            "https://img.yzcdn.cn/upload_files/2019/07/23/Fj9PsuexbqJDLk-tVcra3fo54saT.jpg!middle.jpg",
          title:
            "《漫威：绝密档案》（漫威官方正版授权，首部互动解谜游戏书；现在下单，才能最快收货）",
          price: "238",
          count:1,
          selected: false
        },
        {
          id: 3,
          img:
            "https://img.yzcdn.cn/upload_files/2019/07/14/FhYsLm_Lzqystxf-mVpZr4sThSyh.jpg!middle.jpg",
          title:
            "《最后的访谈》「帆布袋赠品版」（六位文学大师生前的最后访谈，展现人类最优异大脑留给世界的文学遗嘱）",
          price: "132",
          count:1,
          selected: false
        },
        {
          id: 4,
          img:
            "https://img.yzcdn.cn/upload_files/2019/07/03/FiDFkCZ3eY5T8_GFrdtqVvL8_1xA.jpg!middle.jpg",
          title:
            "《双城记》2019权威译本版（狄更斯代表作；送人物关系表+珍藏明信片）",
          price: "49",
          count:1,
          selected: false
        }
      ]
    },
    {
      month: 6,
      books: [
        {
          id: 5,
          img:
            "https://img.yzcdn.cn/upload_files/2019/06/28/Fhaapf9AnLO9tsGS1ARghU7TgPKz.jpg!middle.jpg",
          title:
            "《故宫里的博物学》系列全三册（来自故宫的百科图鉴，有趣有料的动物传奇）",
          price: "188",
          count:1,
          selected: false
        }
      ]
    },
    {
      month: 5,
      books: [
        {
          id: 5,
          img:
            "https://img.yzcdn.cn/upload_files/2019/06/28/Fhaapf9AnLO9tsGS1ARghU7TgPKz.jpg!middle.jpg",
          title:
            "《故宫里的博物学》系列全三册（来自故宫的百科图鉴，有趣有料的动物传奇）",
          price: "188",
          count:1,
          selected: false
        }
      ]
    },
    {
      month: 4,
      books: [
        {
          id: 5,
          img:
            "https://img.yzcdn.cn/upload_files/2019/06/28/Fhaapf9AnLO9tsGS1ARghU7TgPKz.jpg!middle.jpg",
          title:
            "《故宫里的博物学》系列全三册（来自故宫的百科图鉴，有趣有料的动物传奇）",
          price: "188",
          count:1,
          selected: false
        }
      ]
    },
    {
      month: 3,
      books: [
        {
          id: 5,
          img:
            "https://img.yzcdn.cn/upload_files/2019/06/28/Fhaapf9AnLO9tsGS1ARghU7TgPKz.jpg!middle.jpg",
          title:
            "《故宫里的博物学》系列全三册（来自故宫的百科图鉴，有趣有料的动物传奇）",
          price: "188",
          count:1,
          selected: false
        }
      ]
    },
    {
      month: 2,
      books: [
        {
          id: 5,
          img:
            "https://img.yzcdn.cn/upload_files/2019/06/28/Fhaapf9AnLO9tsGS1ARghU7TgPKz.jpg!middle.jpg",
          title:
            "《故宫里的博物学》系列全三册（来自故宫的百科图鉴，有趣有料的动物传奇）",
          price: "188",
          count:1,
          selected: false
        }
      ]
    },
    {
      month: 1,
      books: [
        {
          id: 5,
          img:
            "https://img.yzcdn.cn/upload_files/2019/06/28/Fhaapf9AnLO9tsGS1ARghU7TgPKz.jpg!middle.jpg",
          title:
            "《故宫里的博物学》系列全三册（来自故宫的百科图鉴，有趣有料的动物传奇）",
          price: "188",
          count:1,
          selected: false
        }
      ]
    }
  ]
};
let setLocal = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  }
};
let searchHistory = setLocal.get("sh") || [];
export default {
  data() {
    return {
      active: 0,
      data: data,
      search: false, //搜索界面
      value: "", //搜索input
      searchHistory: searchHistory, 
      hasHis: false,
      ulheight: 0
    };
  },
  mounted(){
      if(this.searchHistory.length != 0){
          this.hasHis = true;
      };
  },
  watch: {
    //监听搜索历史
    searchHistory() {
      setLocal.set("sh", this.searchHistory);
      if (this.searchHistory == 0) {
        this.hasHis = false;
      } else {
        this.hasHis = true;
      }
    }
  },
  methods: {
    onSearch() {
      this.searchHistory.push(this.value);
      this.value = "";
    },
    clearHis() {
      this.searchHistory = [];
      //   this.hasHis  = false;
    },
    addToCart(book) {
        //调用store 中的addToCar
        //默认勾选
        this.$store.commit("addToCar",book);
        this.$toast({
          message: '加入购物车成功~',
          duration : 1500
        });
    }
  },
  components: {
    swipe
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}
.wrapper {
  max-width: 540px;
  margin: 0 auto;
  min-height: 100vh;
  margin-bottom: 49px;
}
.content {
  overflow: hidden;
  .search-wrap {
    height: 40px;
    background-color: rgba(222, 222, 222, 0.3);
    padding: 5px 15px 5px 15px;
    box-sizing: border-box;
    .search-content {
      height: 30px;
      background-color: #fff;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      vertical-align: bottom;
      .van-icon {
        padding-right: 10px;
        font-size: 16px;
        &::before {
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
    .shop-search {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: #fff;
      overflow: hidden;
      z-index: 999;
      .search-list-wrap {
        text-align: center;
        .search-title {
          padding: 15px;
          text-align: left;
          font-size: 12px;
          line-height: 1;
          color: #999;
        }
        .searh-history-list {
          padding: 0 10px;
          overflow: hidden;
          li {
            float: left;
            margin: 0 10px 10px 0;
            padding: 0 10px;
            height: 32px;
            line-height: 32px;
            border-radius: 2px;
            border: none;
            background: #f6f6f6;
            font-size: 12px;
            color: #666;
            text-align: center;
          }
        }
        .shop-search__button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          margin-top: 10px;
          width: 140px;
          height: 32px;
          border: 1px solid #e5e5e5;
          border-radius: 16px;
          font-size: 12px;
          color: #666;
          .shop-search__clear-icon {
            width: 16px;
            height: 16px;
            margin-right: 5px;
          }
        }
      }
    }
  }
  .notice-wrap {
    .notice-box {
      position: relative;
      height: 40px;
      display: flex;
      padding: 0 15px 0 35px;
      overflow: hidden;
      line-height: 40px;
      &::before {
        content: "";
        position: absolute;
        left: 10px;
        top: 13px;
        width: 16px;
        height: 16px;
        background-image: url(https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png);
        background-size: 16px 16px;
      }
      .content-box {
        overflow: hidden;
        position: relative;
        width: 100%;
        .content {
          position: absolute;
          font-size: 100%;
          white-space: nowrap;
          animation: notice-roll 24s linear infinite;
          font-weight: 200;
        }
      }
    }
  }
  .cap-wrap {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .image-ad {
    width: 100%;
    position: relative;
    img {
      width: 100%;
    }
    a {
      position: absolute;
    }
  }
  .showcase-tag {
    .goods-wrap {
      ul {
        li {
          width: 50%;
          float: left;
          a {
            display: block;
            box-sizing: border-box;
            margin: 5px;
            img {
              width: 100%;
            }
            .info {
              .title {
                font-size: 14px;
                line-height: 20px;
                height: 40px;
                max-height: 40px;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #000;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
              .price-info {
                position: relative;
                height: 40px;
                font-weight: bold;
                padding-right: 25px;
                padding-left: 7px;
                color: #f44;
                line-height: 40px;

                .price {
                  display: inline-block;
                  span {
                    font-size: 11px;
                  }
                }
                .van-icon {
                  position: absolute;
                  right: 15px;
                  top: 10px;
                  font-size: 20px;
                  vertical-align: sub;
                }
              }
            }
          }
        }
      }
    }
  }
}
.tabbar {
    max-width: 540px;
  position: fixed;
  bottom: 0;
  z-index: 101;
  height: 49px;
  background-color: #fafafa;
  width: 100%;
  .tabbar-ul {
    display: flex;
    font-size: 14px;
    .tab-home {
      flex: 1;
      font-size: 18px;
      .van-icon {
        vertical-align: middle;
      }
    }
    li {
      color: #4b4b4b;
      flex: 3;
      line-height: 49px;
      text-align: center;
    }
  }
}
@keyframes notice-roll {
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
