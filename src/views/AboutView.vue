<script setup lang="ts">
import { ref, reactive } from 'vue'
import { openService } from '../services/c-b-service'
var inputInfo = ref('')
var stroyStr = ref('this is the begin of your stroy')
var imageObj = reactive({
  src: 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg'
})
async function created() {
  const someData = await openService.getSomeData()
  imageObj.src = someData
  console.log(someData)
}
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <h1>Let start you trip!</h1>
    <div
      :style="{
        boxShadow: `var(--el-box-shadow-lighter)`
      }"
    >
      <el-row :gutter="20" align="middle">
        <el-col :span="10"
          ><el-row justify="center" align="middle">
            <el-image v-bind="imageObj" lazy>
              <template #error>
                <div class="image-slot">
                  <el-icon><icon-picture /></el-icon>
                </div>
              </template>
            </el-image>
          </el-row>
        </el-col>

        <el-col :span="14" class="el-col-row-margin-10">
          <el-row :span="4" justify="center"
            ><div class="story-area">{{ stroyStr }}</div></el-row
          >
          <el-row justify="center">
            <el-button type="primary">1</el-button>
            <el-button type="success">2</el-button>
            <el-button type="warning">3</el-button>
          </el-row>
          <el-row justify="center">
            <el-input
              v-model="inputInfo"
              placeholder="Please input something describe yourself less then 500 words"
            />
          </el-row>
          <el-row justify="center">
            <el-button type="primary" @click="created()">confirm</el-button>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .hero-image-area {
    width: 100%;
  }
  .story-area {
    width: 300px;
    max-height: 500px;
    border-bottom: 1px solid var(--el-border-color);
  }

  .el-col-row-margin-10 .el-row {
    margin-top: 10px;
  }
}
</style>
