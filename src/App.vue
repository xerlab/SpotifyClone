<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar-left.vue'
import songs from './components/songs.vue'
import musicplayer from './components/musicplayer.vue'
import { ref, onMounted } from 'vue'

import { useAudioStore } from './stores/Audio'
import { storeToRefs } from 'pinia'
const useAudio = useAudioStore()
const { playing, currentTrack } = storeToRefs(useAudio)

onMounted(() => {
  playing.value = false
})

</script>



<template>
  <div class="flex flex-col gap-2 m-2 h-full no-scrollbar">
    <div class="flex gap-x-2 " :class="currentTrack ? 'h-[calc(100vh-7.5rem)]' : 'h-full'">
      <navbar />
      <songs />
    </div>
    <musicplayer v-show="currentTrack" />
  </div>
</template>
