<script setup lang="ts">
  import GoogleLogin from './components/GoogleLogin/GoogleLogin.vue';
  import { useAuth } from '@/composables/auth/auth.composable'

  const auth = useAuth()

  const handleLogoutClick = () => auth.logout()
</script>

<template>
  <div :class="$style.wrapper">
    <button @click="handleLogoutClick">Logout</button>

    <GoogleLogin />
  </div>
</template>

<style module>
  .wrapper {
    padding: 20px;
  }
</style>
