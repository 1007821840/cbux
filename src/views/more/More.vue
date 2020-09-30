<template>
  <div id="more">
      <div class="more">
          <div>
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/logo.svg">
          </div>
          <div @click="back">
              <a href="/home">X</a></div>
      </div>
      <div>
          <ul class="one">
              <li class="oneone">
                  <a href="http://localhost:8081/store">
                      {{list[0]}}
                  </a>
              </li>
              <li>
                <a href="http://localhost:8081/money/starbucks-rewards">
                    {{list[1]}}
                </a>
            </li>
            <li>
                <a href="http://localhost:8081/menu">
                    {{list[2]}}
                </a>
            </li>
          </ul>
          <ul class="two">
            <li class="twone">
                <a href="">
                    {{last[0]}}
                </a>
            </li>
            <li>
              <a href="">
                  {{last[1]}}
              </a>
          </li>
          <li>
              <a href="">
                  {{last[2]}}
              </a>
          </li>
          <li>
              <a href="">
                  {{last[3]}}
              </a>
          </li>
          <li>
              <a href="">
                  {{last[4]}}
              </a>
          </li>
          <li>
              <a href="">
                  {{last[5]}}
              </a>
          </li>
          <li>
              <a href="">
                  {{last[6]}}
              </a>
          </li>
          <li>
            <a href="">
                {{last[7]}}
            </a>
        </li>
        <li>
            <a href="">
                {{last[8]}}
            </a>
        </li>
        </ul>
      </div>
      <div class="foot">
      <div class="foot1">
        <a href="http://localhost:8081/money">
          <img src="../../assets/icons/icon-account.svg" class="img">
        </a>
          <span>登录</span>
         
      </div>
      <div class="foot2">
          <a href="http://localhost:8081/money/register">
          <span>注册</span>
          </a>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"More",
  data () {
    return {
        list:[
            '门店','星享俱乐部','菜单'
        ],
        last:[
            '星巴克移动应用','星礼卡','星巴克臻选™','啡快™ － 在线点 到店取','专星送™','咖啡星讲堂','上海烘培工坊','关于星巴克','帮助中心'
        ]
      
    };
  },
  components: {},
  mounted () {},
  methods: {
      back(){
          console.log(1)
          
      }
  }
}
</script>
<style scoped>
   
    li{
        height: 32px;
        font-size: 18px;
        font-weight: 700;
        color: #212121;
        line-height: 32px;
        }
    
    .more div{
        width: 68px;
        height: 68px;
        text-align: center;
        line-height: 68px;
        justify-content:space-between;
    }
    .more img{
        display: inline-block;
        margin-top: 16px;
        width: 36px;
        height: 36px;
    }
    .more{
        height: 68px;
        display: flex;
        justify-content:space-between;
      
    }
    #more{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        height: 100vh;
        background-color: #ffffff;
    }
    .foot{
        display: flex;
        height: 50px;
        line-height: 50px;
    }
    .foot1{
        display: flex;
        height: 50px;
        line-height: 50px;
        margin-left: 20px;
    }
    .foot2{
    border: 1px solid #00A862;
    border-radius: 48px;
    box-sizing: border-box;
    color: #00A862;
    display: inline-block;
    font-weight: 500;
    overflow: hidden;
    width: 58px;
    height: 31px;
    text-align: center;
   line-height: 31px;
   position: relative;
   top: 10px;
   left: 15px;
    }
    .oneone{
        position: relative;
    height: 130px;
    }
    .oneone a{
        position: absolute;
        bottom: 0;
    }
    .one{
        width: 90%;
        height:204px;
        margin: 0 20px 0;
        border-bottom: 1px solid #cccc;
    }
    .two{
        width: 90%;
        height: 302px;
        margin: 0 20px 0;
        border-bottom: 1px solid #cccc;
    }
    .img{
        margin-top: 10px;
    }
    .twone{
        margin-top: 20px;
    }
</style>