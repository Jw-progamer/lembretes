import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'md',
  primary: colors.cyan.base,
  secondary: colors.lime.base,
  accent: colors.orange.base,
  error: colors.red.base,
  warning: colors.deepOrange.base,
  info: colors.lightGreen.base,
  success: colors.green.base
})
