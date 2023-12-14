<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next'
import { ref } from 'vue'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Button } from '~/components/ui/button'

const router = useRouter()
function go() {
  router.push(`/`)
}

const name = ref('')

const foods = ref([
  '',
])

function add() {
  foods.value.push('')
}

const store = useUserStore()
function save() {
  store.newStore(name, foods)
  go()
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <Button variant="outline" size="icon" @click="go">
      <ChevronLeft class="h-4 w-4" />
    </Button>
    <img width="350" src="/foods.png">
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle>我想吃点...</CardTitle>
        <CardDescription>输入公司附近的饭店名吧</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div class="grid w-full items-center gap-4">
            <div class="flex flex-col space-y-1.5">
              <Label for="name">饭店</Label>
              <Input id="name" v-model="name" autofocus placeholder="辣可可" />
            </div>
            <div class="flex flex-col space-y-1.5">
              <Label for="framework">套餐</Label>
              <Input
                v-for="(food, idx) in foods"
                :key="idx"
                :placeholder="idx === 0 ? 'like 辣椒炒肉' : '~'" :default-value="food" @update:model-value="v => foods[idx] = v"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex justify-between px-6 pb-6">
        <Button variant="outline" @click="add">
          增加菜品
        </Button>
        <Button @click="save">
          保存
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>
