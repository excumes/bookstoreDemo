import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//获取购物车缓存数据
let cart = JSON.parse(localStorage.getItem('cart')) || [];
// let allSel = JSON.parse(localStorage.getItem('selAll')) || false;
// console.log(allSel);
export default new Vuex.Store({
  state: {
    //购物车商品
    cart: cart,
    selectAll: false,
    allPrice :0
  },
  mutations: {
    addToCar(state, goods) {
      //把商品信息保存到入购物车
      var flag = true;
      console.log(goods);
      state.cart.some(item => {
        if (item.id == goods.id) {
          // console.log(goods.count);
          item.count++;
          flag = false; //商品已存在, 只用增加数量。
          return true;
        }
      })
      if (flag) {
        // cart.push(goods)
        // Vue.set(state,'cart',cart);
        state.cart.push(goods);
      }
      // 缓存到localStorage
      console.log(state.cart);
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeFormCart(state, id) {
      //删除购物车商品
      state.cart.some((item, i) => {
        if (item.id == id) {
          state.cart.splice(i, 1)
          return true;
        }
      })
      // 缓存到localStorage
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    //更新选择状态
    updateSelected(state, info) {
      console.log('更新勾选状态')
      console.log(info);
      state.cart.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected; //
        }
        return true;
      })
      console.log(state.cart);
      let flag = true;
      state.cart.forEach(item => {
        // console.log(item.selected)
        // console.log(item.selected);
        if(item.selected == false){
          flag = false;
        }
      })
      // console.log(flag);
      if(flag){
        state.selectAll = true; //更新全选按钮
      }else{
        state.selectAll = false;
      }
      // localStorage.setItem('selAll',state.selectAll);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    //全选
    selectAll(state) {
      // console.log(state.selectAll);
      if (state.selectAll) {
        state.cart.forEach(item => {
          item.selected = false;
        })
      }else{
        state.cart.forEach(item => {
          item.selected = true;
        })
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  },
  getters: {
    getBookSelected(state) {
      //商品勾选情况
      var o = {}
      state.cart.forEach(item => {
        o[item.id] = item.selected;
      })
      return o;
    },
    //获取勾选商品价格总价格
    getTotalPrice(state) {
      var TotPrice = 0;
      console.log('执行了getTotalPrice')
      state.cart.forEach(item => {
        if (item.selected) {
          TotPrice += item.price * item.count;
        }
      })
      return TotPrice;
    }

  },
  actions: {

  }
})
