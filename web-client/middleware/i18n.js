export default function ({ app, store, route, params, error, redirect, hotReload }) {
  // If middleware is called from hot-reloading, ignore it
  if (hotReload) return

  // Get locale from params
  const locale = params.lang || 'de'

  if (store.state.locales.indexOf(locale) === -1) {
    return error({ message: 'This page could not be found, wrong language parameter.', statusCode: 404 })
  }

  // Set locale
  store.commit('setLocale', locale)
  app.i18n.locale = locale
}
