import { ref, watch } from 'vue'

const STORAGE_KEY = 'sportagram-theme'

function readInitial(): boolean {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return saved === 'dark'
  } catch {
    // 저장소를 못 쓰면 시스템 설정을 따른다
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const isDark = ref(readInitial())

watch(
  isDark,
  (dark) => {
    document.documentElement.classList.toggle('app-dark', dark)
    try {
      localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
    } catch {
      // 저장 실패는 무시한다
    }
  },
  { immediate: true },
)

export function useDarkMode() {
  const toggle = () => {
    isDark.value = !isDark.value
  }
  return { isDark, toggle }
}
