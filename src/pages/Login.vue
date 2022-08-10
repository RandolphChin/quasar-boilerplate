<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img :src="require('src/assets/profile.svg')"/>
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Log in
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form
              class="q-gutter-md"
              @submit="handleLogin"
            >
              <q-input
                filled
                v-model="user.username"
                label="Username"
                lazy-rules
              />

              <q-input
                type="password"
                filled
                v-model="user.password"
                label="Password"
                lazy-rules

              />

              <div>
<!--                <q-btn label="Login" to="/" type="button" color="primary"/>-->
                <q-btn label="Login"  type="submit" color="primary" :loading="loading"/>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import {defineComponent, computed} from 'vue'
import {ref} from 'vue'
import { useStore  } from 'vuex'
import { useRouter } from 'vue-router';
export default defineComponent({
  setup() {
    let loading = ref(false)
    const store = useStore()
    const router = useRouter();
    let user = ref({
      username: 'admin',
      password: '123456'
    })
    let handleLogin = () => {
      loading.value = true
      store.dispatch('auth/login', user.value).then(
        () => {
          router.push('/profile');
        },
        error => {
          loading.value= false;
        }
      );
    }

    let loggedIn = computed(() => {
      console.log(store.state.auth.user)
      console.log(store.state.auth.status.loggedIn)
      return store.state.auth.status.loggedIn
    })
    if (loggedIn.value) {
      router.push('/profile');
    }
    return {
      user,
      loading,
      loggedIn,
      handleLogin
    }
  },
})
</script>
<style>

.bg-image {
  background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
}
</style>
