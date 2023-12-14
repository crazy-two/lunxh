<script setup lang="ts">
import { Label } from 'radix-vue'
import { cn } from '~/lib/utils'

const props = defineProps<{ class?: string }>()
</script>

<template>
  <Label
    v-bind="props"
    :class="
      cn(
        'block text-sm tracking-tight font-medium text-foreground text-left',
        props.class,
      )
    "
  >
    <slot />
  </Label>
</template>
