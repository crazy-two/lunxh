<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

defineOptions({
  name: 'IndexPage',
})

const router = useRouter()
function go() {
  router.push(`/new`)
}

const store = useUserStore()
</script>

<template>
  <div>
    <Button :class="store.savedStores.length ? 'fixed right-8 bottom-8' : ''" variant="outline" size="icon" @click="go">
      <ChevronRight class="h-4 w-4" />
    </Button>

    <div v-if="store.savedStores.length" class="mx-auto w-screen">
      <div class="h-screen snap-y snap-mandatory overflow-auto">
        <div
          v-for="(item, index) in store.savedStores.toSorted(() => Math.random() > 0.5 ? 1 : -1)"
          :key="index" class="box-border h-[100vh] flex snap-center items-center justify-center p-4"
        >
          <Card
            class="min-h-[80vh] w-[350px] shadow-[10px_10px_0_0_black]"
          >
            <CardHeader>
              <CardTitle>{{ item.name }}</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                v-for="(food, index) in item.foods" :key="index"
                class="grid grid-cols-[25px_1fr] mb-4 items-start pb-4 last:mb-0 last:pb-0"
              >
                <span class="h-2 w-2 flex translate-y-1 rounded-full bg-sky-500" />
                <div class="space-y-1">
                  <p class="text-left text-sm font-medium leading-none">
                    {{ food }}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <route lang="yaml">
meta:
  layout: home
</route> -->
