import { ref } from 'vue'

export const currentTab = ref("about")
export const setCurrentTab = (tab) => (currentTab.value = tab)
