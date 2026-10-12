import { createRouter, createWebHistory } from 'vue-router'
import TabLayoutView from '@/views/TabLayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/onboarding',
      name: 'onboarding',
      component: () => import('@/views/onboarding/OnboardingView.vue'),
    },
    {
      path: '/diary/write',
      name: 'diary-write',
      component: () => import('@/views/diary/DiaryWriteView.vue'),
    },
    {
      path: '/',
      component: TabLayoutView,
      children: [
        { path: '', redirect: '/diary' },
        {
          path: 'diary',
          name: 'diary',
          component: () => import('@/views/diary/DiaryListView.vue'),
        },
        { path: 'match', name: 'match', component: () => import('@/views/match/MatchView.vue') },
        { path: 'chat', name: 'chat', component: () => import('@/views/chat/LockerRoomView.vue') },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/views/profile/ProfileView.vue'),
        },
      ],
    },
  ],
})

export default router
