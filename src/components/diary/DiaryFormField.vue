<script setup lang="ts">
import Message from 'primevue/message'

defineProps<{ label: string; inputId?: string; required?: boolean; error?: string }>()
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <component :is="inputId ? 'label' : 'span'" :for="inputId" class="text-sm text-fg-secondary">
      {{ label }}<span v-if="required" class="text-fg-brand" aria-hidden="true"> *</span>
    </component>
    <slot />
    <Message v-if="error" severity="error" size="small" variant="simple">{{ error }}</Message>
  </div>
</template>
