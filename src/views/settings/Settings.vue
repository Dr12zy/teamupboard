<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <link rel="stylesheet" href="//at.alicdn.com/t/c/font_3681275_mv4aw2fkxk.css">
    <div class="Container">
        <div class="ContainerLeft">
            <div class="ContainerLeftTop">
            </div>
            <div class="ContainerLeftBottom">
                <Rankings></Rankings>
            </div>
        </div>
        <div class="ContainerMiddle">
            <div class="MiddlesTop">
                <Nav></Nav>
            </div>
            <div class="MiddleBottom">
                <div class="MiddleBottomT">
                    <img src="https://img.enzemky.com/swiper2.jpg" alt />
                </div>
                <div class="MiddleBottomB">
                    <el-form :model="form" label-width="1.2rem">
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
                            <el-date-picker v-model="form.birthday"
                            type="date" placeholder="Pick a Date"
                                format="YYYY/MM/DD" value-format="YYYY-MM-DD" />
                        </el-form-item>
                    </el-form>
                    <el-form :model="form" label-width="1.2rem">
                        <el-form-item label="夜间模式">
                            <el-switch v-model="form.delivery" />
                        </el-form-item>
                        <el-form-item label="关于我们">
                            <el-input v-model="form.name" />
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import Rankings from '../../components/Rankings.vue';
import Nav from '../../components/Nav.vue';
// import router from '../../router';
// let msgitems = ref('');

const form = reactive({
  name: '',
  sex: '',
  birthday: '',
  delivery: '',
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
    background-color: #ffd464;
    display: flex;

    .ContainerLeft {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .ContainerLeftTop {
            margin-top: .05rem;

            button {
                border: solid;
                background-color: #FFE76F;
                color: #002EA6;
                font-size: .2rem;
                font-weight: bold;
                margin-top: .2rem;
                margin-left: 70%;
                cursor: pointer;
            }
        }

        .ContainerLeftBottom {
            margin-left: .2rem;
        }
    }

    .ContainerMiddle {
        width: 50%;
        margin-left: .1rem;
        padding-top: .2rem;

        .MiddleTop {
            display: flex;
        }

        .MiddleBottom {
            display: flex;
            flex-direction: column;
            .MiddleBottomT{
                margin-top: .4rem;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                }
            }
            .MiddleBottomB{
                .el-form {
                    .el-form-item {
                        margin-top: .5rem;
                        width: 90%;
                    }
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
            margin-top: 1rem;

            button {
                cursor: pointer;
                border: solid;
                background-color: #FFE76F;
                color: #002EA6;
                font-size: .2rem;
                font-weight: bold;
                margin-top: .2rem;
                margin-left: 1rem;
            }
        }

        .ContainerRightBottom {
            margin-left: .2rem;
        }
    }
}

.el-input__wrapper {
    background-color: #FFE76F;
}
</style>
