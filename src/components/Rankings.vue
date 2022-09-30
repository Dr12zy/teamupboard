<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="RankContainer" >
        <div class="RankHead">
            <h2>热度榜</h2>
        </div>
        <template v-if="RankMsg">
            <div class="RankBody" v-for="( item,i ) in RankMsg" :key="i" >
                <div class="RankLeft"
                :class="[item.count==1||item.count==2||item.count==3?Red:Yellow]">
                    {{item.count}}
                </div>
                <div class="RankMiddle">
                    {{item.tag}}
                </div>
                <div class="RankRight">
                    {{item.num}}
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const RankMsg = ref('');
const Red = 'Red';
const Yellow = 'Yellow';
const GetAllRank = () => {
  RankMsg.value = [
    {
      tag: '终端联系生课程',
      count: '1',
      num: '10000',
    },
    {
      tag: '从零开始学前端书籍',
      count: '2',
      num: '7000',
    }, {
      tag: '零基础学java课',
      count: '3',
      num: '5000',
    },
    {
      tag: '考研考前速成课',
      count: '4',
      num: '3000',
    }, {
      tag: '考公拼团课',
      count: '5',
      num: '2000',
    },
    {
      tag: 'ITO洗脸巾',
      count: '6',
      num: '1050',
    }, {
      tag: '今年疫情导致经济下行',
      count: '7',
      num: '1000',
    },
    {
      tag: '哈利波特魔法周边',
      count: '8',
      num: '500',
    }, {
      tag: '可爱小蛋糕三人成团',
      count: '9',
      num: '200',
    }, {
      tag: '湿厕纸100片+迷你装湿厕纸7抽*1包',
      count: '10',
      num: '100',
    },
  ];
};

onMounted(() => {
  GetAllRank();
  console.log(RankMsg);
});

</script>

<style scoped lang="scss">
.RankContainer {
    .RankBody {
        display: flex;
        width: 100%;
        margin-top: 20px;
        .RankLeft {
            display: flex;
            width: 10%;
            font-size: 18px;
            justify-content: center;
            align-items: center;
        }

        .RankMiddle {
            width: 60%;
            font-size: 14px;
        }

        .RankRight {
            width: 30%;
        }
    }
}

.Red{
    color: red;
}

.Yellow{
    color: #f5b066;
}
</style>
