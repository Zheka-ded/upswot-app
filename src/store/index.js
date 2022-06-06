import { createStore } from 'vuex'
import globalStore from '@/store/global'
import todoStore from '@/store/todo'

const store = createStore({
  modules: {
    global: globalStore,
    todo: todoStore,
  },
})

export default store
