<template>
    <div>
      <el-dialog :visible.sync="outerVisible" >  
        <slide-verify
          ref="slideblock"
          @again="onAgain"
          @fulfilled="onFulfilled"
          @success="onSuccess"
          @fail="onFail"
          @refresh="onRefresh"
          :slider-text="text"
          :accuracy="accuracy"
          id="el-dialog"
        ></slide-verify>
        <!-- <button @click="handleClick">在父组件可以点我刷新哦</button> -->
        <div class="msg">{{ msg }}</div>
      </el-dialog>
    </div>
  </template>
  <script>
  export default {
    name: 'PageSlide',
    data() {
      return {
        msg: '',
        text: '向右滑动->',
        outerVisible: true,
        // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
        accuracy: 5,
      }
    },
    methods: {
      onSuccess() {
        console.log('验证通过')
        this.msg = '验证通过'
        //滑动验证成功之后关闭弹的窗口
        this.outerVisible = false
        this.$emit('out', this.outerVisible)
        this.$refs.slideblock.reset()
      },
      onFail() {
        console.log('验证不通过')
        this.msg = '验证不通过'
      },
      onRefresh() {
        console.log('点击了刷新小图标')
        this.msg = ''
      },
      onFulfilled() {
        console.log('刷新成功啦！')
      },
      onAgain() {
        console.log('检测到非人为操作的哦！')
        this.msg = 'try again'
        // 刷新
        this.$refs.slideblock.reset()
      },
      handleClick() {
        this.$refs.slideblock.reset()
      },
    },
  }
  </script>
  <style scoped>
    .msg{
      color: red;
      margin-left: 14px;
      margin-top: 10px;
    }
    #el-dialog{
     margin-top: -15vh!important;
     margin: auto;
    
    }
   .el-dialog__wrapper{
     width: 90%;
   }
  </style>