<template>
  <q-layout view="hHh lpR fFf">
    <q-page>
      <q-page-container>
        <router-view/>
      </q-page-container>
    </q-page>
  </q-layout>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'LoginLayout'
})
</script>
