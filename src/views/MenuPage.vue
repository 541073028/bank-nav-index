<template>
    <div class="menuPageBox">
        <div class="menuPage">
            <div class="content">
                <div v-if="pageIndex==1">
                    <div class="item ly-flex-center-between" v-for="(ele,i) in menuList1" :key="i"
                         :style="{'backgroundImage': 'url(' + ele.bg + ')'}" @click="jumpPage(ele)">
                        <div class="itemTitle ly-flex-center">
                            <div class="imgBox">
                                <img :src="ele.icon" alt="">
                            </div>
                            <div>
                                <p>{{ele.title}}</p>
                                <span>{{ele.egTitle}}</span>
                            </div>
                        </div>
                        <div class="signImg">
                            <img :src="ele.sign" alt="">
                        </div>
                    </div>
                </div>
                <div v-if="pageIndex==2">
                    <div class="item ly-flex-center-between" v-for="(ele,i) in menuList2" :key="i"
                         :style="{'backgroundImage': 'url(' + ele.bg + ')'}" @click="jumpPage(ele)">
                        <div class="itemTitle ly-flex-center">
                            <div class="imgBox">
                                <img :src="ele.icon" alt="">
                            </div>
                            <div>
                                <p>{{ele.title}}</p>
                                <span>{{ele.egTitle}}</span>
                            </div>
                        </div>
                        <div class="signImg">
                            <img :src="ele.sign" alt="">
                        </div>
                    </div>
                </div>
                <div v-if="pageIndex==3">
                    <div class="item ly-flex-center-between" v-for="(ele,i) in menuList3" :key="i"
                         :style="{'backgroundImage': 'url(' + ele.bg + ')'}" @click="jumpPage(ele)">
                        <div class="itemTitle ly-flex-center">
                            <div class="imgBox">
                                <img :src="ele.icon" alt="">
                            </div>
                            <div>
                                <p>{{ele.title}}</p>
                                <span>{{ele.egTitle}}</span>
                            </div>
                        </div>
                        <div class="signImg">
                            <img :src="ele.sign" alt="">
                        </div>
                    </div>
                </div>
                <div v-if="pageIndex==4">
                    <div class="item ly-flex-center-between" v-for="(ele,i) in menuList4" :key="i"
                         :style="{'backgroundImage': 'url(' + ele.bg + ')'}" @click="jumpPage(ele)">
                        <div class="itemTitle ly-flex-center">
                            <div class="imgBox">
                                <img :src="ele.icon" alt="">
                            </div>
                            <div>
                                <p>{{ele.title}}</p>
                                <span>{{ele.egTitle}}</span>
                            </div>
                        </div>
                        <div class="signImg">
                            <img :src="ele.sign" alt="">
                        </div>
                    </div>
                </div>
                <div v-if="pageIndex==5">
                    <div class="item ly-flex-center-between" v-for="(ele,i) in menuList5" :key="i"
                         :style="{'backgroundImage': 'url(' + ele.bg + ')'}" @click="jumpPage(ele)">
                        <div class="itemTitle ly-flex-center">
                            <div class="imgBox">
                                <img :src="ele.icon" alt="">
                            </div>
                            <div>
                                <p>{{ele.title}}</p>
                                <span>{{ele.egTitle}}</span>
                            </div>
                        </div>
                        <div class="signImg">
                            <img :src="ele.sign" alt="">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MenuPage",
        data() {
            return {
                pageIndex: '5',
                menuList1: [
                    {
                        icon: require('../assets/img/menuPage/yewudaquan@2x.png'),
                        title: '业务大全',
                        egTitle: 'ALL BUSINESS',
                        bg: require('../assets/img/menuPage/bluebg.png'),
                        sign: require('../assets/img/menuPage/blueSign@2x.png'),
                        link: 'http://m.ccb.com/cn/home/indexv3m.html'
                    },
                    {
                        icon: require('../assets/img/menuPage/wangdianchaxun@2x.png'),
                        title: '网点查询',
                        egTitle: 'BRANCHES QUERY',
                        bg: require('../assets/img/menuPage/zibg.png'),
                        sign: require('../assets/img/menuPage/zijiantou@2x.png'),
                        link: 'https://mp.weixin.qq.com/s/30Lop0fhqx5x3nFvm_xccw'
                    },
                    {
                        icon: require('../assets/img/menuPage/yueshenghuo@2x.png'),
                        title: '悦生活缴费',
                        egTitle: 'YUE LIFE PAY COST',
                        bg: require('../assets/img/menuPage/redbg.png'),
                        sign: require('../assets/img/menuPage/redSign@2x.png'),
                        link: 'http://life.ccb.com/cn/paymentv3/mobilev3/indexv3.html'
                    },
                    {
                        icon: require('../assets/img/menuPage/yukaihu@2x.png'),
                        title: '企业预开户',
                        egTitle: 'ENTERPRISE OPEN AN ACCOUNT',
                        bg: require('../assets/img/menuPage/greenbg.png'),
                        sign: require('../assets/img/menuPage/greenSign@2x.png'),
                        link: 'http://umq.cn/AocC'
                    }
                ],
                menuList2: [
                    {
                        icon: require('../assets/img/menuPage/cardApply@2x.png'),
                        title: '信用卡申请',
                        egTitle: 'CREDIT CARD APPLY FOR',
                        bg: require('../assets/img/menuPage/bluebg.png'),
                        sign: require('../assets/img/menuPage/blueSign@2x.png'),
                        link: 'http://m.ccb.com/cn/creditcard/mobilev3/cards/product_list.html'
                    },
                    {
                        icon: require('../assets/img/menuPage/cardFen@2x.png'),
                        title: '信用卡分期',
                        egTitle: 'CREDIT CARD INSTALLMENT',
                        bg: require('../assets/img/menuPage/zibg.png'),
                        sign: require('../assets/img/menuPage/zijiantou@2x.png'),
                        link: 'http://ccbh5.uncle-ad.com/jhfqf/index.html'
                    },
                    {
                        icon: require('../assets/img/menuPage/cardQuan@2x.png'),
                        title: '信用卡权益',
                        egTitle: 'CREDIT CARD RIGHTS',
                        bg: require('../assets/img/menuPage/redbg.png'),
                        sign: require('../assets/img/menuPage/redSign@2x.png'),
                        link: 'http://m.ccb.com/cn/mobilev3/nonfinance_mobilev3/index.html'
                    }
                ],
                menuList3: [
                    {
                        icon: require('../assets/img/menuPage/zu@2x.png'),
                        title: '住房租赁',
                        egTitle: 'RENTAL HOUSING',
                        bg: require('../assets/img/menuPage/bluebg.png'),
                        sign: require('../assets/img/menuPage/blueSign@2x.png'),
                        link: 'https://mp.weixin.qq.com/s/WxlY--CuhMQIPNv3_g0YOg'
                    },
                    {
                        icon: require('../assets/img/menuPage/huipujinrong@2x.png'),
                        title: '普惠金融',
                        egTitle: 'INCLUSIVE FINANCE',
                        bg: require('../assets/img/menuPage/zibg.png'),
                        sign: require('../assets/img/menuPage/zijiantou@2x.png'),
                        link: 'https://mp.weixin.qq.com/s/4Rf3xuP6mKhcdXFMnnLm5Q'
                    },
                    {
                        icon: require('../assets/img/menuPage/laodongzhe@2x.png'),
                        title: '劳动者港湾',
                        egTitle: 'LABORER HOME',
                        bg: require('../assets/img/menuPage/redbg.png'),
                        sign: require('../assets/img/menuPage/redSign@2x.png'),
                        link: 'https://mp.weixin.qq.com/s/80HOMiL0PA3RJOOI9yIBGA'
                    }
                ],
                menuList4: [
                    {
                        icon: require('../assets/img/menuPage/bankETC@2x.png'),
                        title: '建行ETC',
                        egTitle: 'CONSTRUCTION ETC',
                        bg: require('../assets/img/menuPage/bluebg.png'),
                        sign: require('../assets/img/menuPage/blueSign@2x.png'),
                        link: 'https://mp.weixin.qq.com/s/vzP1WkIEUs8hTiMpNsnE6A'
                    },
                    {
                        icon: require('../assets/img/menuPage/bankBanKe@2x.png'),
                        title: '建行班克',
                        egTitle: 'CONSTRUCTION BANK BANKE',
                        bg: require('../assets/img/menuPage/zibg.png'),
                        sign: require('../assets/img/menuPage/zijiantou@2x.png'),
                        link: 'https://sinfo.ccb.com/3dbank/banke/dist/index.html?source=101id=welcomeMessage'
                    },
                    {
                        icon: require('../assets/img/menuPage/wuganpay@2x.png'),
                        title: '无感支付',
                        egTitle: 'NON-INDUCTIVE PAY',
                        bg: require('../assets/img/menuPage/redbg.png'),
                        sign: require('../assets/img/menuPage/redSign@2x.png'),
                        link: 'https://mp.weixin.qq.com/s/OXJ7JxFiZYjDh12gLRIhrQ'
                    }
                ],
                menuList5: [
                    {
                        icon: require('../assets/img/menuPage/shoujiyinhang@2x.png'),
                        title: '手机银行',
                        egTitle: 'MOBILE BANKING',
                        bg: require('../assets/img/menuPage/bluebg.png'),
                        sign: require('../assets/img/menuPage/blueSign@2x.png'),
                        link: 'https://mp.weixin.qq.com/s/uSe6x-GWTnjFpw6o0PbcKg'
                    },
                    {
                        icon: require('../assets/img/menuPage/shanrongshangwu@2x.png'),
                        title: '善融商务',
                        egTitle: 'SHANRONG BUSINESS',
                        bg: require('../assets/img/menuPage/zibg.png'),
                        sign: require('../assets/img/menuPage/zijiantou@2x.png'),
                        link: 'https://mp.weixin.qq.com/s/Evky_XOXxx3V8DXICy5cLg'
                    },
                    {
                        icon: require('../assets/img/menuPage/longzhifu@2x.png'),
                        title: '龙支付',
                        egTitle: 'DRAGON PAY',
                        bg: require('../assets/img/menuPage/redbg.png'),
                        sign: require('../assets/img/menuPage/redSign@2x.png'),
                        link: 'https://mp.weixin.qq.com/s/lJvQhNkHcy3Sq9TPpTCi5g'
                    },
                    {
                        icon: require('../assets/img/menuPage/guandou@2x.png'),
                        title: '官抖',
                        egTitle: 'OFFICIAL VIDEO',
                        bg: require('../assets/img/menuPage/greenbg.png'),
                        sign: require('../assets/img/menuPage/greenSign@2x.png'),
                        link: 'https://mp.weixin.qq.com/s/sq29MLsz2xgN2JCUUNvCqg'
                    }
                ],
            }
        },
        methods: {
            jumpPage(data) {
                console.log(data);
                window.location.href = data.link
            }
        },
        mounted(){
            if(this.$route.query) {
                this.pageIndex = this.$route.query.pageIndex;
                console.log(this.pageIndex)
            }
        }
    }
</script>

<style scoped lang="scss">
    .menuPageBox {
        width: 100vw;
        height: 100vh;
        .menuPage {
            width: 100%;
            height: 100%;
            background: url("../assets/img/menuPage/bg@3x.png");
            background-size: 100% 100%;
            padding: .04rem .5rem;
            color: #fff;
            .content {
                .item {
                    width: 100%;
                    height: 1.8rem;
                    border-radius: .1rem;
                    /*background: linear-gradient(90deg,rgba(0,199,254,1) 0%,rgba(3,105,213,1) 100%);*/
                    background-size: 100% 100%;
                    padding: 0 .36rem 0 .4rem;
                    font-weight: bold;
                    text-align: left;
                    margin: .7rem auto;
                    .imgBox {
                        width: 1rem;
                        height: 1rem;
                        background: #fff;
                        border-radius: 50%;
                        padding: .1rem .08rem .08rem .1rem;
                        margin-right: .38rem;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    p {
                        font-size: .36rem;
                        margin-bottom: .04rem;
                    }
                    span {
                        font-size: .22rem;
                    }
                    .signImg {
                        width: .44rem;
                        height: .44rem;
                        background: #fff;
                        border-radius: 50%;
                        padding: .04rem .01rem .04rem .07rem;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
</style>