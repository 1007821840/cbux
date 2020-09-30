<template>
  <div path="/login" id="MoneyLogin">
    <div class="login">
      <div class="login-less">
      <div class="inp1">
        <input type="text" value="" placeholder="请输入用户名密码" ref="inp1" @focus="inp1">
        <!-- <div class="flot">{{tel}}</div> -->
      </div>
      <div>
        <div class="inp2">
          <input type="password" value="" placeholder="密码" ref="inp2" @focus="inp2" >
          <!-- <div class="flot">{{password}}</div> -->
        </div>
      </div>
      <div class="login-checkbox">
        <input type="checkbox" id="login-remember" value="on" @click="toggleAutoLogin(false)" checked>
        <span>下次自动登陆</span>
        <div class="none" @click="pageRedir">忘记密码？</div>
      </div>
      <div class="tuo">
      </div>
      <transition name="plus-icon">
        <div class="blem" v-if="ble">
      <div v-if="ble" class="ble">
        <img src="">
        <span class="spanyz">已验证</span>
      </div>
        </div>
      </transition>
      <div class="huise">
      <page-slide ref="child" @out="outer($event)"></page-slide>
      </div>
      <div class="abled">
          <span>登录</span>
      </div>
      
      </div>
    </div>
  </div>
</template>

<script>
  import PageSlide from '@/components/content/sroll/PageSlide.vue'
  export default {
    name: "MoneyLogin",
    data() {
      return {
        tel: "用户名或电子邮箱",
        password: '密码',
        autoLogin: true,
        outerVisible: false,
        ble:false
        

      };
    },
    components: {
      PageSlide
    },
    mounted() {
      
    },
    methods: {
      pageRedir(){
        this.$router.push('./forgot-password');
      },
      outer(sif){
        this.ble=!sif;
      },
      inp1(){
        this.$refs.inp1.placeholder=""
      },
      inp2(){
        this.$refs.inp2.placeholder=""
      },
      toggleAutoLogin(init){
				if(!init){
					this.autoLogin = !this.autoLogin;
        }
      }

    }
  }
</script>
<style scoped>
   .plus-icon-enter-active{
    transition: opacity .5s;
  }
  .plus-icon-enter{
     opacity: 0;
  }
  .plus-icon-leave-active{
    transition: opacity .5s;
  }
  .plus-icon-leave-to{
    opacity: 0;
    
  }
  
  .huise{
    background-color: #F7F7F7;
    width: 100%;
    height: 500px;

  }
  input::-webkit-input-placeholder {
        color:  #999999;
      }
      input::-moz-input-placeholder {
        color: #999999;
      }
      input::-ms-input-placeholder {
        color:  #999999;
      }
  #MoneyLogin {
    width: 100%;
   background-color: #F7F7F7;
  }

  .login {
    margin:0 20px 0;
    background-color: #F7F7F7;
   
   
  }
  .login-less{
    padding-top: 38px;
   
  
  
  }
  #login-remember{
    margin-top: 20px;
    width: 28px;
    height: 28px;
  }
  .login-checkbox span{
   position: relative;
   top: -8px;
    margin-left: 10px;
    font-size: 15px;

  }
  .inp1 input,.inp2 input{
    color: #999999;
    outline: none;
    border: 0px ;
    border-bottom: 1px solid #d9d9d9;
    width: 100%;
    height: 34px;
    background-color: #F7F7F7;
  }
  .ble{
    box-shadow:0 0 2px #000;
    width: 330px;
    margin: auto;
    text-align: center;
    line-height: 48px;
    font-size: 20px;
    height: 48px;
    background-color: #ffffff;
    border-radius: 40px;
   
  }
  .tuo{
    width: 100%;
    height: 20px;

  }
  .abled{
    text-align: center;
    line-height: 51px;
    width: 82px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.38);
    height: 51px;
    position: fixed;
    bottom: 170px;
    right: 35px;
    border-radius:48px ;
    background: #f7f7f7;
    border-color: #f7f7f7;
    color: rgba(0, 0, 0, 0.38);
    cursor: not-allowed;
    
  }
  .spanyz{
    color: #00A862;
  }
  .blem{
    height: 52px;
  }
  .none{
    /* display:flex; */
    float: right;
    margin-top: 25px;
    color: #00A862;
    

  }
  .inp2 input{
    margin-top: 23px;
  }
</style>