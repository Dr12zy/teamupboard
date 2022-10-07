<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <link rel="stylesheet" href="//at.alicdn.com/t/c/font_3681275_cdbew6650ea.css">
    <div class="NavContainer" >
        <button @click="GoToUser()">
            <i class="iconfont icon-yonghu"></i>
        </button>
        <button @click="GoToHome()">
            <i class="iconfont icon-zhuye"></i>
        </button>
        <button @click="TaskItem = true">
            <i class="iconfont icon-chuangjian"></i>
        </button>
        <button>
            <i class="iconfont icon-tongzhi"></i>
        </button>
        <button @click="GoToSettings()">
            <i class="iconfont icon-shezhi"></i>
        </button>

        <el-dialog v-model="TaskItem" title="创建活动" width="30%" class="TaskDialog">
            <div class="MsgDialogTop">
                <el-form :model="form" label-width="1.2rem">
                        <el-form-item label="标题">
                            <el-input v-model="form.title" />
                        </el-form-item>
                        <el-form-item label="开始和截至时间">
                            <el-date-picker
                              v-model="value1"
                              type="datetimerange"
                              range-separator="To"
                              start-placeholder="Start date"
                              end-placeholder="End date"
                            />
                        </el-form-item>
                        <el-form-item label="人数">
                            <el-input v-model="form.num" />
                        </el-form-item>
                        <el-form-item label="内容">
                            <el-input
                             v-model="textarea"
                             :rows="2"
                             type="textarea"
                             placeholder="在此输入文字"
                            />
                        </el-form-item>
                        <el-form-item label="图片">
                            <el-upload class="avatar-uploader" list-type="picture-card"
                                action="" :auto-upload="false"
                                :http-request="upload" :before-upload="beforeAvatarUpload"
                                :limit="1" v-model="form.img"
                                :on-change="GetImg">
                                <i class="iconfont icon-shangchuan"></i>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="标签(tag)">
                            <el-input v-model="form.tag" />
                        </el-form-item>
                        <el-form-item>
                            <el-button @click="AddTask()">添加</el-button>
                            <el-button @click="TaskItem = false" >取消</el-button>
                        </el-form-item>
                    </el-form>
            </div>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import axios from 'axios';
import router from '../router';

const TaskItem = ref(false);
const form = reactive({
  title: '',
  num: '',
  img: '',
  tag: '',
});
const GoToSettings = () => {
  router.push('./Settings');
};

const GoToHome = () => {
  router.push('./');
};

const GoToUser = () => {
  router.push('./Published');
};

const AddTask = () => {
  axios.post('url', form).then((res) => {
    if (res.data === 'success') {
      // eslint-disable-next-line no-undef
      ElMessage.success({
        message: '添加任务成功',
      });
    }
  });
};
</script>

<style scoped lang="scss">
.NavContainer{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 1rem;
    button{
        margin-left: .6rem;
        margin-right: .6rem;
        // font-size: 40px;
        border: none;
        background-color: white;
        cursor: pointer;
        i{
            color: #F26964;
            font-size: .6rem;
        }
    }
}
</style>
