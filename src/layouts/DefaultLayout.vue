<script setup lang="ts">
import NavBar from '@/components/nav/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="defaultLayoutContainer">
    <header class="navBarContainer">
      <NavBar />
    </header>
    <main>
      <div class="routerViewContainer">
        <RouterView />
      </div>
    </main>
  </div>
</template>