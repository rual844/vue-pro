<script setup lang="ts">
import StoryItem from './StoryItem.vue'
import { storeToRefs } from "pinia";
import {useStoryStore} from '../stores/story.store'

const store = useStoryStore();
const {storyMessages} = storeToRefs(store);
</script>

<template>
  <el-scrollbar max-height="50vh">
  <div v-for="(item, index) in storyMessages" :key="index">
    <StoryItem>
      <template #heading>{{item.role}}</template>
      {{item.content}}.
    </StoryItem>
  </div>
  </el-scrollbar>
</template>
<style scoped>
@media (min-width: 1024px) {
}
</style>