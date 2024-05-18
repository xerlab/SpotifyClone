<template>
  <div id="songs" class="w-full bg-zinc-900 rounded-lg overflow-hidden relative flex-grow h-full">
    <topmenu />
    <RouterView />
  </div>
</template>

<script setup>
import card from '../components/card.vue'
import topmenu from '../components/topmenu.vue'
import categories from '../views/categories.vue'
import audiofile from '../components/audiofile.vue'
import playlist from '../views/playlist.vue'

import { RouterView } from 'vue-router'
</script>