<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <link rel="stylesheet" href="//at.alicdn.com/t/c/font_3681275_3m8kgp0meve.css">
  <div class="Container">
    <div class="ContainerLeft">
      <div class="ContainerLeftTop">
        <div>
          <button>
            <i class="iconfont icon-shezhi-copy"></i>
          </button>
        </div>
        <div>
          <button>
            <i class="iconfont icon-yonghu-copy"></i>
          </button>
        </div>
        <div>
          <button>
            <i class="iconfont icon-tongzhi-copy"></i>
          </button>
        </div>
      </div>
      <div class="ContainerLeftMiddle">
        <div>
          <button>
            我的发布
          </button>
        </div>
        <div>
          <button>
            我的申请
          </button>
        </div>
        <div>
          <button>
            我的参与
          </button>
        </div>
      </div>
      <!-- <el-divider /> -->
      <div class="ContainerLeftBottom">
        <button>更多tag</button>
      </div>
    </div>
    <div class="ContainerMiddle">
      <div class="ContainerMiddleTop">
        <div class="MiddleTop">
          <el-input></el-input>
          <el-button :icon="Search" circle />
        </div>
        <div class="MiddleBottom">
          <button>本地</button>
          <button>线上</button>
          <button>
            <i class="iconfont icon-chongnaiweishi"></i>
          </button>
        </div>
      </div>
      <div class="ContainerMiddleBottom">
        <div class="BottomItem" v-for="(item, i) in 10" :key="i">
          <Msg :msgitems="item"></Msg>
        </div>

      </div>
    </div>
    <div class="ContainerRight">

    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Search,
} from '@element-plus/icons-vue';
import Msg from '../../components/Msg.vue';

// let msgitems = ref('');
</script>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
}

.Container {
  width: 100%;
  background-color: #FFE76F;
  display: flex;

  .ContainerLeft {
    width: 25%;

    .ContainerLeftTop {
      display: flex;
      padding-left: 20px;
      padding-top: 20px;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: flex-start;

      div {
        width: 20%;
        display: inline;
      }

      button {
        cursor: pointer;
        border: none;
        background-color: #FFE76F;
        color: #002EA6;

        i {
          display: block;
          font-size: 55px;
          margin-top: 5px;
        }
      }
    }

    .ContainerLeftMiddle {
      padding-left: 20px;
      padding-top: 20px;
      margin-top: 20px;
      margin-bottom: 20px;

      button {
        cursor: pointer;
        border: none;
        background-color: #FFE76F;
        color: #002EA6;
        font-size: 30px;
        margin-top: 20px;

        i {
          display: block;
          margin-top: 5px;
        }
      }
    }

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
        margin-left: 70%;
      }
    }
  }

  .ContainerMiddle {

    width: 50%;
    margin-left: 10px;
    padding-top: 20px;

    .ContainerMiddleTop {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      width: 100%;
      background-color: #FFE76F;

      .MiddleTop {
        // border-radius: 10%;
        padding: 20px;
        display: flex;
        flex-wrap: nowrap;
      }

      .MiddleBottom {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          color: #002EA6;
          background-color: #FFE76F;
          font-size: 20px;
          border: none;
          border-radius: 20%;
          cursor: pointer;
        }

        button {
          margin-left: 100px;
        }
      }
    }

    .ContainerMiddleBottom {
      padding-left: 30px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      .BottomItem {
        width: 50%;
        margin-top: 20px;
      }
    }
  }

  .ContainerRight {
    width: 25%;
  }
}
</style>
