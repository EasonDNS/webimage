import { defineStore } from 'pinia'

const usePublicStore = defineStore('public', {
  state: () => ({
    isExpand: true,
    isShowBubble: true,
    asideWidth: 300,
  }),
})
const a = 1
console.log(a );

export default usePublicStore
