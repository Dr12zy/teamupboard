<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <link rel="stylesheet" href="//at.alicdn.com/t/c/font_3681275_mv4aw2fkxk.css">
    <div class="Container">
        <div class="ContainerLeft">
            <div class="LeftButton">
                <button @click="ChangeToUser">账号设置</button>
                <button @click="ChangeToSystem">系统设置</button>
            </div>
        </div>
        <div class="ContainerMiddle" v-show="UserSettings">
            <div class="MiddleTop">
                <div class="MiddleTopLeft">
                    <button @click="BackToHome">
                        <i class="iconfont icon-fanhui"></i>
                    </button>
                </div>
                <div class="MiddleTopRight">
                    <h1>账号设置</h1>
                </div>
            </div>
            <div class="MiddleBottom">
                <el-form :model="form" label-width="120px">
                    <el-form-item label="昵称">
                        <el-input v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="简介">
                        <el-input v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="所在地">
                        <el-input v-model="form.name" />
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-select v-model="form.sex" placeholder="选择性别">
                            <el-option label="男" value="male" />
                            <el-option label="女" value="female" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="生日">
                        <el-date-picker v-model="form.birthday" type="date"
                        placeholder="Pick a Date" format="YYYY/MM/DD"
                            value-format="YYYY-MM-DD" />
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="ContainerMiddle" v-show="SystemSettings">
            <div class="MiddleTop">
                <div class="MiddleTopLeft">
                    <button @click="BackToHome">
                        <i class="iconfont icon-fanhui"></i>
                    </button>
                </div>
                <div class="MiddleTopRight">
                    <h1>系统设置</h1>
                </div>
            </div>
            <div class="MiddleBottom">
                <el-form :model="form" label-width="120px">
                    <el-form-item label="夜间模式">
                        <el-switch v-model="form.delivery" />
                    </el-form-item>
                    <el-form-item label="关于我们">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="ContainerRight">
            <div class="ContainerRightTop">
                <button>更多tag</button>
            </div>
            <div class="ContainerRightBottom">
                <Rankings></Rankings>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import Rankings from '../../components/Rankings.vue';
import router from '../../router';
// let msgitems = ref('');

const UserSettings = ref(true);
const SystemSettings = ref(false);

const form = reactive({
  name: '',
  sex: '',
  birthday: '',
  delivery: '',
});

const BackToHome = () => {
  router.push('./Home');
};

const ChangeToUser = () => {
  SystemSettings.value = false;
  UserSettings.value = true;
};

const ChangeToSystem = () => {
  UserSettings.value = false;
  SystemSettings.value = true;
};
</script>

<style scoped lang="scss">
* {
    margin: 0;
    padding: 0;
}

.Container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: #FFE76F;
    display: flex;

    .ContainerLeft {
        width: 25%;

        .LeftButton {
            display: flex;
            flex-direction: column;
            margin-top: 30%;
            align-items: center;
        }

        button {
            border: solid #002EA6;
            background-color: #FFE76F;
            font-size: 25px;
            margin-top: 30px;
            cursor: pointer;
            border-radius: 15%;

            &:focus {
                background-color: #7599f4;
            }
        }
    }

    .ContainerMiddle {
        width: 50%;
        margin-left: 10px;
        padding-top: 20px;

        .MiddleTop {
            display: flex;

            .MiddleTopLeft {
                display: inline;

                button {
                    border: 0;
                    background-color: #FFE76F;
                    font-weight: bold;
                    font-size: large;
                    cursor: pointer;
                }
            }

            .MiddleTopRight {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .MiddleBottom {

            // display: flex;
            // justify-content: center;
            // align-items: center;
            // height: 100%;
            .el-form {
                .el-form-item {
                    margin-top: 50px;
                    width: 90%;
                }
            }
        }
    }

    .ContainerRight {
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        // justify-content: center;

        .ContainerRightTop {
            margin-top: 100px;

            button {
                cursor: pointer;
                border: solid;
                background-color: #FFE76F;
                color: #002EA6;
                font-size: 20px;
                font-weight: bold;
                margin-top: 20px;
                margin-left: 100px;
            }
        }

        .ContainerRightBottom {
            margin-left: 20px;
        }
    }
}

.el-input__wrapper {
    background-color: #FFE76F;
}
</style>
