<template>
  <q-page class="q-pa-sm">
    <div class="row q-col-gutter-sm">
      <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12">
        <q-card class="card-bg text-white">
          <q-card-section class="text-center bg-transparent">
            <q-avatar size="100px" class="shadow-10">
              <img :src="require('src/assets/profile.svg')">
            </q-avatar>
            <div class="text-subtitle2 q-mt-lg"  v-if="currentUser">{{currentUser.user.username}}</div>
            <div class="text-h6 q-mt-md"></div>
          </q-card-section>
          <q-card-section>
            <div class="text-body2 text-justify" v-if="currentUser">
              {{currentUser.user.email}}
            </div>
          </q-card-section>
          <q-card-section>
            <div class="text-body2 text-justify" v-if="currentToken">
              {{currentToken}}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import {computed, defineComponent} from 'vue'
import {useStore} from "vuex";
import {useRouter} from "vue-router/dist/vue-router";

export default defineComponent({
  name: "Profile",
  setup() {
    const store = useStore()
    const router = useRouter();
    let currentUser = computed(() => {
      console.log(store.state.auth.user)
      return store.state.auth.user;
    })
    let currentToken = computed( () => {
      return store.state.auth.token;
    })
    let loggedIn = computed(() => {
      return store.state.auth.status.loggedIn
    })
    if (!loggedIn.value) {
      router.push('/login');
    }
    return {
      currentUser,
      currentToken
    }
  }
})
</script>

<style scoped>

.card-bg {
  background-color: #162b4d;
}
</style>
