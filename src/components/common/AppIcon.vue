<script setup lang="ts">
import { computed } from 'vue'
import { iconPaths, type IconName } from './icon-paths'

const props = withDefaults(defineProps<{ name: IconName; size?: number; label?: string }>(), {
  size: 20,
  label: undefined,
})

const paths = computed(() => iconPaths[props.name])
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="shrink-0"
    :role="label ? 'img' : undefined"
    :aria-label="label"
    :aria-hidden="label ? undefined : true"
  >
    <path v-for="(d, i) in paths" :key="i" :d="d" />
  </svg>
</template>
