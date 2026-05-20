import { ref, computed, watch } from 'vue'

/**
 * Чек-лист с автосохранением прогресса в localStorage.
 *
 * @param {string} storageKey — ключ для localStorage (уникальный на каждый список)
 * @param {Array<{text: string}>} initialItems — стартовый список пунктов
 * @returns {{ items, doneCount, total, progress, reset }}
 */
export function useChecklist(storageKey, initialItems) {
  // Восстанавливаем состояние «done» из localStorage по индексам пунктов.
  // Тексты пунктов лежат в коде — храним только массив true/false той же длины.
  const loadDone = () => {
    try {
      const raw = localStorage.getItem(storageKey)
      if (!raw) return null
      const parsed = JSON.parse(raw)
      if (!Array.isArray(parsed) || parsed.length !== initialItems.length) return null
      return parsed.map(Boolean)
    } catch {
      return null
    }
  }

  const savedDone = loadDone()
  const items = ref(
    initialItems.map((item, i) => ({
      ...item,
      done: savedDone ? savedDone[i] : false
    }))
  )

  // Автосохранение при любом изменении
  watch(
    items,
    (val) => {
      try {
        localStorage.setItem(storageKey, JSON.stringify(val.map((i) => i.done)))
      } catch { /* localStorage недоступен — молча игнорируем */ }
    },
    { deep: true }
  )

  const total = computed(() => items.value.length)
  const doneCount = computed(() => items.value.filter((i) => i.done).length)
  const progress = computed(() => (total.value ? (doneCount.value / total.value) * 100 : 0))

  const reset = () => {
    items.value.forEach((item) => { item.done = false })
  }

  return { items, doneCount, total, progress, reset }
}
