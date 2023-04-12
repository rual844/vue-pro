import { defineStore } from 'pinia'

// 定义一个名为todos的store
export const useStoryStore = defineStore('story', {
  // 定义store的初始状态
  state: () => ({
    storyMessages: [] as {'role':string, 'content': string}[]
  }),
  getters: {
    getMessages: (state)=>{
        return state.storyMessages
    }
  },
  // 定义store的actions，可以是异步的
  actions: {
    addMessage (newMessages: {'role':string, 'content': string}) {
      this.storyMessages.push(newMessages)
    },
    removeTodo (index: number) {
      this.storyMessages.splice(index, 1)
    }
  }
})