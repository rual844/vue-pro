<script setup lang="ts">
import evaCreator from '@/engine/evaluate-creator';
import { ref, reactive } from 'vue'
import { openService } from '../services/c-b-service'
var inputInfo = ref('')
var stroyStr = ref('this is the begin of your stroy')
var chatCompletionMessages = [{"role": "system", "content": "我们来合作编写一个故事的每个段落。我会给出主人公及事件。并发布好结果，坏结果，随机结果三种判定。每次请根据事件和判定描述出事件内容。在200字以内。"}];
var imageObj = reactive({
  src: 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg'
})
async function created() {
  const someData = await openService.getSomeData(inputInfo.value.toString());
  imageObj.src = someData
  console.log(someData)
}
async function callChatCompletionMessage() {
  chatCompletionMessages.push({'role':'user', 'content': inputInfo.value.toString()});
  const someDate = await openService.getNextPlace(chatCompletionMessages);
  chatCompletionMessages.push({'role':'assistant', 'content': someDate});
  stroyStr.value = someDate;
}
function testEvent() {
  let currentInput = inputInfo.value;
  stroyStr.value = evaCreator.getDate(currentInput);
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
            <el-button type="success" @click="testEvent()">2</el-button>
            <el-button type="warning" @click="created()">3</el-button>
          </el-row>
          <el-row justify="center">
            <el-input
              v-model="inputInfo"
              placeholder="Please input something describe yourself less then 500 words"
            />
          </el-row>
          <el-row justify="center">
            <el-button type="primary" @click="callChatCompletionMessage()">confirm</el-button>
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
