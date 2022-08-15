<script setup lang="ts">
  import { useAuth } from '@/composables/auth/auth.composable'
  import { onBeforeMount, onUnmounted } from 'vue'

  const auth = useAuth()

  onBeforeMount(() => {
    auth.watchAuthState()
  })

  onUnmounted(() => {
    auth.unwatchAuthState()
  })

  const handleLoginWithGoogleClick = () => {
    auth.loginInWithGoogle()
  }
</script>

<template>
  <div>
    <button @click="handleLoginWithGoogleClick">Login with Google</button>

    <br />
    <br />
    <br />

    <ul>
      <li>hasFailed: {{ auth.hasFailed }}</li>
      <li>isLoading: {{ auth.isLoading }}</li>
      <li>error: {{ auth.error }}</li>
    </ul>

    <pre>
        {{ auth.user }}
    </pre>
  </div>
</template>