<template>
  <div path="/forgot-password" id="forgot">
    <div class="forgot">
      <nav-baro class="sy-nav">
        <div slot="center" class="center1">
          <img src='../../../assets/icons/icon-chevron-left.svg' @click="back">
          忘记密码
        </div>
      </nav-baro>
      <div class="hh">
        <h2>请输入您的注册邮箱或已认证手机号码。</h2>
      </div>
      <div>
        <div class="main">
          <div class="inp1">
            <input type="text" value="" placeholder="注册邮箱或认证手机号" ref="inp3" @focus="inp1">
            <!-- <div class="flot">{{tel}}</div> -->
          </div>
        </div>
        <div class="abled">
          <span>提交</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBaro from '@/components/common/navbar/NavBaro.vue'
  export default {
    name: "MoneyForgot",
    data() {
      return {

      };
    },
    components: {
      NavBaro
    },
    mounted() { },
    methods: {
      back() {
        this.$router.back();
      },
      inp1() {
        this.$refs.inp3.placeholder = ""
      },
    }
  }
</script>
<style scoped>
  #forgot {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background-color: #F7F7F7;
  }

  .forgot {
    width: 100%;
    height: 60px;
    background-color: #FFFFFF !important;
  }

  .center1 img {
    width: 22px;
    height: 22px;
    margin-left: 18px;
    vertical-align: middle;


  }

  .hh {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    height: 93px;
    background-color: #f7f7f7;
    line-height: 93px;

  }

  .inp1 input {
    color: #999999;
    outline: none;
    border: 0px;
    border-bottom: 1px solid #d9d9d9;
    width: 90%;
    height: 34px;
    margin: 0 20px 0;
    background-color: #F7F7F7;
  }

  .abled {
    text-align: center;
    line-height: 51px;
    width: 82px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.38);
    height: 51px;
    position: fixed;
    top: 300px;
    right: 35px;
    border-radius: 48px;
    background: #f7f7f7;
    border-color: #f7f7f7;
    color: rgba(0, 0, 0, 0.38);
    cursor: not-allowed;

  }

  .main {
    width: 100%;

    background-color: #F7F7F7;
  }

  .hh h2 {
    font-size: 22px;
    margin-left: 20px;
  }
</style>