import { ref } from 'vue'

export const currentTab = ref("map")
export const setCurrentTab = (tab) => (currentTab.value = tab)
