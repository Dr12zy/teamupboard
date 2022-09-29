<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="MsgContainer">
        <div class="MsgContainerTop">
            <div class="TopLeft">
                <!-- <img :src="msgitems.img"> -->
                <img src="https://img.enzemky.com/bgc1.jpg" alt="">
            </div>
            <div class="TopRight">
                <h2>并西西拼菜5人团</h2>
            </div>
        </div>
        <div class="MsgContainerBottom">
            <p>快递纸箱批发定做 彩色印刷logo发货纸箱订制定制纸盒子包装盒子</p>
        </div>
    </div>
</template>

<script setup>
// const props = defineProps({
//     msgitems: {
//         type: Object,
//         default: () => { }
//     }
// })
</script>

<style scoped lang="scss">
.MsgContainer {
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
            margin-left: 10px;

            h2 {
                color: #002EA6;
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
