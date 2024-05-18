<template>
  <!-- playlist : Audio file -->
  <div :class="selected ? 'bg-zinc-800' : 'bg-none'" @mouseenter="hover = true" @mouseleave="hover = false"
    class="flex items-center text-white px-6 hover:bg-zinc-800 rounded-lg hover:cursor-pointer ">

    <!-- number area -->
    <div class="flex gap-6  items-center max-h-16 w-full ">
      <div>
        <div v-if="hover || selected" class="w-6 " @click="useAudio.playpauseThisAudio(artist, track)">
          <div v-if="!playing || !selected" class="transition-transform duration-300 transform hover:scale-110">
            <img src="../assets/play_.svg" alt="" width="30px" />
          </div>
          <div v-else class="transition-transform duration-300 transform hover:scale-110">
            <img src="../assets/pause_.svg" alt="" width="30px">
          </div>
        </div>
        <div v-else>
          <p class="font-bold w-6  flex justify-center">{{ ++index }}</p>
        </div>
      </div>

      <!-- Info about the audio file playing -->
      <div class="flex gap-2 w-full items-center pr-5">
        <div class="rounded-md overflow-hidden h-10 w-10">
          <img :src="artist.albumCover" alt="">
        </div>
        <div class="p-2 ">
          <p class="font-medium overflow-clip h-6 " :class="selected ? 'text-green-400' : 'text-white'">{{
    track.name }}</p>
          <p class="text-white font-thin text-sm" :class="selected ? 'text-green-300' : 'text-white'">{{ artist.name }}
          </p>
        </div>
      </div>
    </div>
    <div class=" flex items-center w-full text-sm ">
      <div class=" w-1/3 ">
        <p>{{ artist.name }}</p>
      </div>
      <div class=" w-1/3 flex justify-center">
        <p>{{ Audio }}</p>
      </div>
      <div class="w-1/3 flex justify-end">
        <p>1:52</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, toRefs, onMounted } from 'vue'

import { useAudioStore } from '../stores/Audio'
import { storeToRefs } from 'pinia'
const useAudio = useAudioStore()
const { playing, currentTrack } = storeToRefs(useAudio)

let hover = ref(false)
let trackTime = ref(null)

const props = defineProps({
  track: Object,
  artist: Object,
  index: Number,
  selected: Boolean,
})

const { track, artist, index } = toRefs(props)
</script>