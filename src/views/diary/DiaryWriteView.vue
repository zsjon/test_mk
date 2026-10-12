<script setup lang="ts">
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import SelectButton from 'primevue/selectbutton'
import Textarea from 'primevue/textarea'
import AppIcon from '@/components/common/AppIcon.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import DiaryFormField from '@/components/diary/DiaryFormField.vue'
import DiaryImageUploader from '@/components/diary/DiaryImageUploader.vue'
import { REVIEW_MAX_LENGTH, useDiaryWrite } from '@/composables/diary/useDiaryWrite'

const { form, errors, today, stadiumOptions, resultOptions, save } = useDiaryWrite()
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <PageHeader title="직관 일기 작성" back compact />

    <form
      id="diary-form"
      class="flex flex-1 flex-col gap-5 px-4 pb-6"
      novalidate
      @submit.prevent="save"
    >
      <p class="text-md text-fg-tertiary">선수님이 직관한 경기를 기록해 보세요.</p>

      <DiaryFormField label="직관 경기의 이미지를 등록해 주세요">
        <DiaryImageUploader v-model="form.image" />
      </DiaryFormField>

      <DiaryFormField label="직관 경기 이름" input-id="diary-title" required :error="errors.title">
        <InputText
          id="diary-title"
          v-model="form.title"
          placeholder="ex) NC vs 한화"
          maxlength="30"
          :invalid="!!errors.title"
          fluid
        />
      </DiaryFormField>

      <DiaryFormField label="직관 날짜" input-id="diary-date" required :error="errors.date">
        <InputText
          id="diary-date"
          v-model="form.date"
          type="date"
          :max="today"
          :invalid="!!errors.date"
          fluid
        />
      </DiaryFormField>

      <DiaryFormField label="직관 경기장" input-id="diary-stadium" required :error="errors.stadium">
        <Select
          v-model="form.stadium"
          input-id="diary-stadium"
          :options="stadiumOptions"
          placeholder="경기장을 선택해 주세요"
          :invalid="!!errors.stadium"
          fluid
        >
          <template #value="{ value, placeholder }">
            <span class="flex items-center gap-2">
              <AppIcon name="map-pin" class="text-fg-tertiary" />{{ value ?? placeholder }}
            </span>
          </template>
        </Select>
      </DiaryFormField>

      <DiaryFormField label="직관 좌석" input-id="diary-seat">
        <InputText
          id="diary-seat"
          v-model="form.seat"
          placeholder="ex) B열 2층 13번"
          maxlength="30"
          fluid
        />
      </DiaryFormField>

      <DiaryFormField label="경기 결과">
        <SelectButton
          v-model="form.result"
          :options="resultOptions"
          option-label="label"
          option-value="value"
          :allow-empty="false"
          aria-label="경기 결과"
          fluid
        />
      </DiaryFormField>

      <DiaryFormField label="나만의 데일리 MVP" input-id="diary-mvp">
        <InputText
          id="diary-mvp"
          v-model="form.mvp"
          placeholder="ex) 이대형"
          maxlength="20"
          fluid
        />
      </DiaryFormField>

      <DiaryFormField label="경기 리뷰" input-id="diary-review">
        <Textarea
          id="diary-review"
          v-model="form.review"
          rows="4"
          :maxlength="REVIEW_MAX_LENGTH"
          placeholder="ex) 직관 경기에 대한 리뷰를 남겨 주세요."
          auto-resize
          fluid
        />
        <p class="text-right text-xs text-fg-tertiary">
          {{ form.review.length }}/{{ REVIEW_MAX_LENGTH }}
        </p>
      </DiaryFormField>
    </form>

    <div
      class="sticky bottom-0 border-t border-line bg-canvas p-4 pb-[calc(16px+env(safe-area-inset-bottom))]"
    >
      <Button type="submit" form="diary-form" label="저장" size="large" fluid />
    </div>
  </div>
</template>
