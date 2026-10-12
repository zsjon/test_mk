<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import Button from 'primevue/button'
import Message from 'primevue/message'
import AppIcon from '@/components/common/AppIcon.vue'

const MAX_FILE_SIZE = 10 * 1024 * 1024

const image = defineModel<string | null>({ required: true })

const fileInput = useTemplateRef<HTMLInputElement>('fileInput')
const error = ref<string | null>(null)

const onFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  input.value = ''
  if (!file) return

  if (file.size > MAX_FILE_SIZE) {
    error.value = '10MB 이하의 사진만 올릴 수 있어요.'
    return
  }
  error.value = null
  image.value = URL.createObjectURL(file)
}

const removeImage = () => {
  if (image.value) URL.revokeObjectURL(image.value)
  image.value = null
}
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <div v-if="image" class="relative aspect-4/3 overflow-hidden rounded-2xl">
      <img :src="image" alt="선택한 직관 사진" class="size-full object-cover" />
      <Button
        rounded
        size="small"
        severity="contrast"
        aria-label="사진 삭제"
        class="absolute top-2 right-2"
        @click="removeImage"
      >
        <template #icon><AppIcon name="x" :size="18" /></template>
      </Button>
    </div>
    <button
      v-else
      type="button"
      class="flex w-full flex-col items-center gap-2 rounded-xl border border-dashed border-line-strong bg-elevated px-4 py-6 text-fg-tertiary"
      @click="fileInput?.click()"
    >
      <span
        class="grid size-10 place-items-center rounded-full bg-muted text-fg-secondary ring-6 ring-subtle"
      >
        <AppIcon name="camera" />
      </span>
      <span class="text-sm"><span class="text-fg-brand">사진 추가</span> 또는 촬영</span>
      <span class="text-xs">JPG, PNG · 최대 10MB</span>
    </button>
    <input ref="fileInput" type="file" accept="image/*" hidden @change="onFileChange" />
    <Message v-if="error" severity="error" size="small" variant="simple">{{ error }}</Message>
  </div>
</template>
