<template>
    <div class="login">
        <img class="bgImg" src="../assets/img/login/bg@2x.png" alt="">
        <div class="formBox">
            <div class="itemBox">
                <input type="text" v-model="phone" placeholder="请输入手机号">
            </div>
            <div class="itemBox">
                <input type="text" v-model="code" placeholder="请输入验证码">
                <div class="line"></div>
                <button class="codeBtn" @click="getCode" :class="{codeAct:codeBtn!=='获取验证码'}" type="button"
                        :disabled="disabled">{{ codeBtn }}
                </button>
            </div>
            <div class="subBtn" @click="login">提交</div>
        </div>
        <div class="maskBox" v-if="maskStatus">
            <div class="maskContent">
                <img src="../assets/img/login/close@2x.png" alt="" class="closeBtn" @click="maskStatus = !maskStatus">
                <img src="../assets/img/login/win@2x.png" alt="" class="winImg">
                <p v-if="isRegister==1">注册成功！<br> 欢迎您来到智围: {{ phone }}</p>
                <p v-else>{{ phone }}<br> 欢迎您来到智围！ </p>
                <div class="downBtn" @click="down">立即下载体验</div>
            </div>
        </div>
        <div class="downBox" @click="down"></div>
    </div>
</template>
<script>
    import { Toast } from 'vant';
    let reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
    export default {
        name: 'login',
        data() {
            return {
                inviteCode: 'QER10006',//邀请码
                token: '',//绑定邀请人凭证
                phone: '',//手机号
                code: '',//短信验证码
                codeBtn: '获取验证码',//获取验证码btn
                disabled: false,
                time: 0,
                maskStatus: false,//遮罩层-显示状态
                isRegister: '',//是否是新用户【1：新用户】
                bind_inviter: '',//是否绑定成功【0：未绑定】
            };
        },
        methods: {
            //下载按钮
            down(){
                console.log('去下载');
                downObj.toDown();
            },
            //获取验证码
            getCode: function () {
                if (this.phone.trim() == '') {
                    Toast("请输入手机号");
                    return false;
                }
                if(!reg.test(this.phone)){
                    Toast("请输入正确的手机号");
                    return false;
                }
                this.time = 60;
                this.disabled = true;
                this.timer();
                let postData = {
                    "phone": this.phone,
                    "token": '3',
                };
                console.log(postData);
                // postData = this.$qs.stringify(postData);
                console.log(postData);
                this.axios.post('/common/getCaptcha', postData).then(res => {
                    console.log(res);
                    if (res.data.code == 200) {
                        Toast('发送成功');
                        this.code = res.data.data;
                    } else {
                        Toast(res.data.desc);
                    }
                });
            },
            //封装一个函数，获取验证码部分：60s 或 重新发送
            timer: function () {
                if (this.time > 0) {
                    this.time--;
                    this.codeBtn = this.time + "s";
                    setTimeout(this.timer, 1000);
                } else {
                    this.time = 0;
                    this.codeBtn = "获取验证码";
                    this.disabled = false;
                }
            },
            //登录
            login(){
                if(this.phone==''){
                    Toast("请输入手机号");
                    return false;
                }
                if(!reg.test(this.phone)){
                    Toast("请输入正确的手机号");
                    return false;
                }
                if(this.code==''){
                    Toast("请输入验证码");
                    return false;
                }
                let postData = {
                    "phone": this.phone,
                    "captcha": this.code,
                    "token": '3',
                };
                console.log(postData);
                this.axios.post('/user/logIn',postData).then(res=>{
                    console.log(res);
                    if(res.data.code==200){
                        // Toast('登录成功');
                        this.token=res.data.body.token;
                        this.isRegister=res.data.body.isRegister;
                        this.bind_inviter=res.data.body.bind_inviter;
                        this.maskStatus = true;
                    }else {
                        Toast(res.data.desc);
                    }
                }).then(res=>{
                    console.log(res);
                    let postData1 = {
                        "inviteCode": this.inviteCode,
                        "token": this.token,
                    };
                    console.log(postData1);
                    if(this.bind_inviter==0){
                        this.axios.post('/user/bindInviteCode',postData1).then(res=>{
                            console.log(res);
                            if(res.data.code==200){
                                // Toast('绑定成功');
                                this.maskStatus = true;
                            }else {
                                // Toast(res.data.desc);
                                if(this.isRegister==1){
                                    Toast('绑定失败');
                                }
                            }
                        })
                    }
                });
            },
        },
        mounted(){
            if(this.$route.query.inviteCode){
                this.inviteCode = this.$route.query.inviteCode
            }
        }
    }
</script>

<style lang="scss">
    .login {
        min-width: 100vw;
        min-height: 100vh;
        position: relative;
        .bgImg {
            width: 100vw;
        }
        .formBox {
            position: absolute;
            top: 7.07rem;
            left: 50%;
            transform: translateX(-50%);
            .itemBox {
                width: 6.34rem;
                height: .94rem;
                display: flex;
                align-items: center;
                background: rgba(255,238,255,1);
                border-radius: .08rem;
                margin-bottom: .4rem;
                font-size: .3rem;
                input {
                    width: 4.02rem;
                    padding: 0 .3rem;
                    background: rgba(255,238,255,1);
                    line-height: 100%;
                }
                .line {
                    width: .02rem;
                    height: .43rem;
                    background: #E4263F;
                }
                .codeBtn {
                    width: 150px;
                    height: 42px;
                    font-size: .3rem;
                    font-weight: 500;
                    color: rgba(228,36,61,1);
                    line-height: .42rem;
                    background: transparent;
                }
                .codeAct {
                    color: #909090
                }
            }
            .subBtn {
                width: 6.34rem;
                line-height: .94rem;
                background: rgba(255,241,0,1);
                border-radius: .47rem;
                font-size: .36rem;
                font-weight: 500;
                color: rgba(228,38,63,1);
            }
        }
        .maskBox {
            width: 100vw;
            height: 100vh;
            background:rgba(0,0,0,.53);
            position: fixed;
            top: 0;
            left: 0;
            .maskContent {
                width: 5.05rem;
                height: 3.78rem;
                background: #fff;
                border-radius: .15rem;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                padding: .44rem 0 .33rem;
                .closeBtn {
                    width: .4rem;
                    height: .4rem;
                    position: absolute;
                    top: -.09rem;
                    right: -.09rem;
                }
                .winImg {
                    width: 2.1rem;
                    height: 1.25rem;
                }
                p {
                    font-size: .26rem;
                    font-weight:600;
                    color: rgba(51,51,48,1);
                    line-height: .38rem;
                    margin: .12rem 0 .23rem;
                }
                .downBtn {
                    width: 2.92rem;
                    line-height: .68rem;
                    margin: 0 auto;
                    background: rgba(231,46,64,1);
                    border-radius: .18rem;
                    font-size: .28rem;
                    font-weight: 500;
                    color: rgba(255,255,255,1);
                }
            }
        }
        .downBox {
            width: 100vw;
            height: 1.2rem;
            position: absolute;
            bottom: 0;
            left: 0
        }
    }
</style>