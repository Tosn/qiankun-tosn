import { reactive } from 'vue'
import { initGlobalState } from 'qiankun'

// vue2 使用 observable
const initState = reactive({
  user: {
    name: ''
  }
})

const actions = initGlobalState(initState)
actions.onGlobalStateChange((newValue, prev) => {
  for (let key in newValue) {
    initState[key] = newValue[key]
  }
})

actions.getGlobalState = (key) => {
  return key ? initState[key] : initState
}

export default actions