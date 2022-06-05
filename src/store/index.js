import { createStore } from 'vuex'
import globalStore from '@/store/global'

const store = createStore({
  modules: {
    global: globalStore,
  },
})

export default store
