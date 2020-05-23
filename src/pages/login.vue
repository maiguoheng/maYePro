<template>
    <div class='main'>
        <div class="a">
            <div class="login">
                <div class="l">
                    <img class="logo" :src="$gbdata.logoUrl" />
                </div>
                <div class="r">
                    <input placeholder="输入账号" />
                    <input placeholder="输入密码" type="password" />
                    <div class="confirm" @click="confirm">
                        确认
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import abc from '@components/abc.vue'

export default {
    name: 'login',
    components: {
    },
    data() {
        return {
            bgImg: require('@assets/img/bg.jpg'),
            msg: '前修改'
        }
    },
    methods: {
        confirm() {
            this.$router.push('/home')
            // mgh 登录接口
            this.$message({
                message: '点击确定',
                type: 'success'
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.a {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    .login {
        position: absolute;
        width: 60%;
        height: 60%;
        top: 20%;
        left: 20%;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 20px;
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        .l {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            height: 100%;
            border-right: 1px solid #bbbbbb;
            .logo {
                display: block;
                width: 75%;
                height: 75%;
                border-radius: 20px;
                object-fit: cover;
            }
        }
        .r {
            flex: 1;

            padding: 10% 0;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            input {
                display: block;
                width: 300px;
                margin: 0 auto;
                height: 40px;
                padding: 0 20px;
                border-radius: 100px;
                border: 1px solid white;
                outline: none;
                &:hover {
                    border-color: #409eff;
                }
            }
            .confirm {
                width: 300px;
                padding: 10px 20px;
                margin: 0 auto;
                text-align: center;
                background: #409eff;
                color: white;
                border-radius: 300px;
                cursor: pointer;
            }
        }
    }
}
.main {
    width: 100vw;
    height: 100vh;
    background: url("../assets/img/bg.jpg") center/cover;
}
</style>
