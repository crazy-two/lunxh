import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const savedStores = ref<{
    name: string
    foods: string[]
  }[]>([])
  function newStore(name: string, foods: string[]) {
    savedStores.value.push(
      {
        name,
        foods,
      },
    )
  }

  return {
    savedStores,
    newStore,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))
