<script setup lang="ts">
import NavBarLink from '@/components/nav/NavBarLink.vue'

type NavLinkType = {
  text: string,
  to: string,
}

const links: NavLinkType[] = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
  { text: 'Login', to: '/login' },
]
</script>

<template>
  <nav class="navBar p-4 flex flex-no-wrap gap-y-4 gap-x-6 bg-gray-700">
    <NavBarLink
      v-for="link in links"
      :key="link.to"
      :to="link.to"
    >{{ link.text }}</NavBarLink>
  </nav>
</template>