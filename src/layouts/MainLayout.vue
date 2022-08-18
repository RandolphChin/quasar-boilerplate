<template>
  <q-layout view="lHh Lpr lFf">
    <q-toolbar class="gt-xs">
      <q-toolbar-title  >
        <q-avatar class="q-pl-xl q-pr-xl"  size="68px">
          <img :src="require('assets/quasar-logo-vertical.svg')" alt="logo"  />
        </q-avatar>
        <strong class="q-pl-xl q-pr-xl">Tomatodo - pomodoro app</strong>

      </q-toolbar-title>

      <bottom-nav
        v-for="link in menu"
        :key="link.title"
        v-bind="link"
        class="gt-xs"
      />
    </q-toolbar>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="flex flex-center xs">
      <bottom-nav
        v-for="link in menu"
        :key="link.title"
        v-bind="link"
        class="text-white"
      />
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import BottomNav from '../components/BottomNav.vue'

const menu = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: '/contact'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: '/product'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: '/profile'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    BottomNav
  },

  setup () {
    return {
      menu: menu,
    }
  }
})
</script>
