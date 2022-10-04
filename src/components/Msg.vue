<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <link rel="stylesheet" href="//at.alicdn.com/t/c/font_3681275_mv4aw2fkxk.css">
    <div class="MsgContainer">
        <button class="MsgButton" @click="MsgItem = true"></button>
        <div class="MsgContainerTop">
            <div class="TopLeft">
                <!-- <img :src="msgitems.img"> -->
                <img :src="msgitems.img" alt/>
            </div>
            <div class="TopRight">
                <div class="TopRightT">
                    <h2>{{msgitems.title}}</h2>
                </div>
                <div class="TopRightB">
                    <p>{{msgitems.tag}}</p>
                </div>
            </div>
        </div>
        <div class="MsgContainerBottom">
            <p>{{msgitems.message}}</p>
        </div>

        <el-dialog v-model="MsgItem" title="详细信息" width="30%" class="MsgDialog">
            <div class="MsgDialogTop">
                <div class="DialogTopLeft">
                    <!-- <img :src="msgitems.img"> -->
                    <img :src="msgitems.img" alt/>
                </div>
                <div class="DialogTopRight">
                    <div class="DTopRightT">
                        <p>{{msgitems.title}}</p>
                        <button>
                            <i class="iconfont icon-fenxiang"></i>
                        </button>
                    </div>
                    <el-divider />
                    <div class="DTopRightB">
                        {{NowTime}}
                    </div>
                </div>
            </div>
            <div class="MsgDialogMiddle">
                <p>{{msgitems.message}}</p>
            </div>
            <div class="MsgDialogBottom">
                <div class="DialogBottomLeft">
                    <div class="BottomLeftT">
                        <img :src="msgitems.img" alt/>
                        <img :src="msgitems.img" alt/>
                        <img :src="msgitems.img" alt/>
                    </div>
                    <div class="BottomLeftB">
                        <p>({{msgitems.already}}/{{msgitems.total}})</p>
                    </div>
                </div>
                <div class="DialogBottomRight">
                    <button>Team UP!</button>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  msgitems: {
    type: Object,
    default: () => { },
  },
});
const MsgItem = ref(false);
const NowTime = ref('');
const GetNowTime = () => {
  const TwoDigits = (str) => {
    // eslint-disable-next-line no-unused-expressions, no-param-reassign, prefer-template
    str < 10 ? str = '0' + str : str;
    return str;
  };
  const date = new Date();
  const Hour = date.getHours();
  const Minute = date.getMinutes();
  const Second = date.getSeconds();
  // eslint-disable-next-line prefer-template
  NowTime.value = TwoDigits(Hour) + ':' + TwoDigits(Minute) + ':' + TwoDigits(Second);
};

const UseNowTime = () => {
  setInterval(GetNowTime, 1000);
  if (MsgItem.value === false) {
    clearInterval();
  }
};

onMounted(() => {
  UseNowTime();
});
</script>

<style scoped lang="scss">
.MsgContainer {
    position: relative;

    .MsgButton {
        position: absolute;
        width: 80%;
        height: 120px;
        border: none;
        background-color: rgba(0, 0, 0, 0);
        cursor: pointer;
    }

    .MsgDialog {
        display: flex;
        flex-direction: column;
        .MsgDialogTop {
            display: flex;
            flex-direction: row;
            .DialogTopLeft {
                margin-right: 10px;
                img {
                    border-radius: 50%;
                    width: 100px;
                    height: 100px;
                }
            }

            .DialogTopRight {
                width: 100%;
                .DTopRightT{
                    display: flex;
                    flex-direction: row;
                }
                .DTopRightB{

                }
            }
        }

        .MsgDialogMiddle {}

        .MsgDialogBottom {
            display: flex;
            flex-direction: row;
            .DialogBottomLeft{
                width: 100%;
                .BottomLeftT{
                    img {
                    width: 75px;
                    height: 75px;
                    margin-right: 10px;
                    margin-top: 20px;
                    }
                }
                .BottomLeftB{
                    p{
                        font-size: 20px;
                    }
                }
            }
            .DialogBottomRight{
                width: 70%;
                display: flex;
                justify-content: center;
                align-items: center;
                button{
                    width: 70%;
                    height: 70%;
                    font-size: 30px;
                    border-radius: 50%;
                }
            }
        }
    }

    .MsgContainerTop {
        display: flex;

        .TopLeft {
            img {
                border-radius: 50%;
                width: 100px;
                height: 100px;
            }
        }

        .TopRight {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-left: 10px;

            .TopRightT {
                display: flex;

                h2 {
                    color: #002EA6;
                }
            }

            .TopRightB {
                display: flex;
                flex-direction: row;

                p {
                    font-weight: bold;
                    margin-left: 10px;
                }
            }

        }
    }

    .MsgContainerBottom {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
            font-family: 'Courier New', Courier, monospace;
        }
    }
}
</style>
