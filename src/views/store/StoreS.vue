<template>
    <div path="/stores" id="stores">
        <div class="stores">
            <div class="back" @click="back">X</div>
            <div class="head">{{stores.StoreName}}</div>
            <div class="font head2">{{stores.StreetAddress}}</div>
            <div class="font">
                <div>{{stores.City}},{{stores.StoreNumber}}</div>
                <div class="herf">
                    <a
                        href="https://ditu.amap.com/regeo?lng=120.155901&lat=30.276766&name=%E6%9D%AD%E5%B7%9E%E8%8B%8F%E5%AE%81%E7%94%9F%E6%B4%BB%E5%B9%BF%E5%9C%BA%E5%BA%97&src=mypage&innersrc=uriapi">获取路线</a>
                </div>
                <div class="time">营业时间</div>
                <div class="mainn">
                    <div class="main1">
                        <div>今天</div>
                        <div class="font">07:30上午至21:30下午</div>
                    </div>
                    <div class="main">
                        <div>星期一</div>
                        <div class="font">07:30上午至21:00下午</div>
                    </div>
                    <div class="main">
                        <div>星期二</div>
                        <div class="font">07:30上午至22:00下午</div>
                    </div>
                    <div class="main">
                        <div>星期三</div>
                        <div class="font">07:30上午至22:30下午</div>
                    </div>
                    <div class="main">
                        <div>星期四</div>
                        <div class="font">07:30上午至21:30下午</div>
                    </div>
                    <div class="main">
                        <div>星期五</div>
                        <div class="font">07:30上午至22:30下午</div>
                    </div>
                    <div class="main">
                        <div>星期六</div>
                        <div class="font">07:30上午至22:00下午</div>
                    </div>

                </div>
                <div class="time">门店特色</div>
                <div class="cf">
                    <span>Origami™便携式滴滤咖啡</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StoreS",
        data() {
            return {

            };
        },
        computed: {
            stores() {
                return this.$store.state.items[this.$store.state.index]
            }
        },
        components: {},
        mounted() { },
        methods: {
            back() {
                this.$router.back()
            }
        }
    }
</script>
<style scoped>
    .time{
        font-size: 14px;
        height: 44px;
        line-height: 44px;
        border-bottom: 1px solid #cccc;
    }
    .main,.main1{
        height: 34px;
        line-height: 34px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
    }
    .main1{
        font-weight: 600;
    }
    .mainn{
        margin-top: 15px;
    }
    #stores {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #ffffff;

        z-index: 9 !important;
    }
    .font{
        font-family: "Gotham", Helvetica, Arial, PingFangSC-Regular, "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif!important;
    }
    .stores{
        width: 88%;
        margin: auto;
    }
    .herf{
        height: 50px;
        line-height: 50px;
    }
    .head{
        font-size: 18px;
        font-weight: 600;

    }
    .head2{
        margin-top: 15px;
    }
    .back{
        height: 60px;
    }
    .cf{
        font-size: 19px;
       margin-top: 20px;
        width: 140px;
        height: 50px;
    }
</style>