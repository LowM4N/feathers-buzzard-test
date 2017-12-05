import Vue from 'vue'
import ElementUi from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'
import deLocale from 'element-ui/lib/locale/lang/de'
import locale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-default/index.css'

export default ctx => {
  const { store } = ctx

  store.watch(state => state.locale, l => {
    switch (l) {
      case 'de':
        locale.use(deLocale)
        break
      case 'en':
        locale.use(enLocale)
        break
      default:
        locale.use(enLocale)
    }
  }, {
    immediate: true
  })

  Vue.use(ElementUi)
}
