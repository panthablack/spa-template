<template>
  <div class="loginPageContainer">
    <LoginForm @submit="onSubmit" />
  </div>
</template>

<script setup lang="ts">
import LoginForm from '@/components/auth/LoginForm.vue'
import { logIn } from '@/utilities/auth'

const onSubmit = (v: Record<string, string>) => logIn(v.email, v.password)
</script>

<style scoped lang="css">
/* ... */
.textInput {
  margin: 1rem 0;
  display: block;
}

.textInput label,
.textInput input {
  margin-right: 0.5rem;
}
</style>