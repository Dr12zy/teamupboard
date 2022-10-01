<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <link rel="stylesheet" href="//at.alicdn.com/t/c/font_3681275_8g65ggx4bl.css">
    <div class="Container">
        <div class="ContainerLeft">
            <div class="LeftButton">
                <button>账号设置</button>
                <button>系统设置</button>
            </div>
        </div>
        <div class="ContainerMiddle">
            <div class="MiddleTop">
                <div class="MiddleTopLeft">
                    <button>
                        <i class="iconfont icon-fanhui"></i>
                    </button>
                </div>
                <div class="MiddleTopRight">
                    <h1>账号设置</h1>
                </div>
            </div>
            <div>
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
                </el-form>
            </div>
        </div>
        <div class="ContainerRight">
            <div class="ContainerLeftBottom">
                <button>更多tag</button>
            </div>
            <div class="ContainerLeftDeep">
                <Rankings></Rankings>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import Rankings from '../../components/Rankings.vue';
// let msgitems = ref('');

const form = reactive({
  name: '',
  sex: '',
});
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
    }

    .ContainerRight {
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .ContainerLeftBottom {
            margin-top: 5px;

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

        .ContainerLeftDeep {
            margin-left: 20px;
        }
    }
}
</style>
