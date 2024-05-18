<template>
  <!-- v-if="audio" -->
  <div id="musicplayer" class="h-24 col-span-full bg-zinc-900 rounded-lg flex items-center ">
    <div class="flex items-center justify-between m-2 p-2  h-full w-full">
      <!-- Info about the audio file playing -->
      <div class="flex gap-2 max-w-1/5 items-center = h-full">
        <div class="rounded-md overflow-hidden w-28">
          <img :src="currentArtist?.albumCover">
        </div>
        <div class="p-2 w-full ">

          <p class="text-white font-medium">{{ currentTrack?.name }}</p>
          <p class="text-white font-thin text-sm">{{ currentArtist?.name }}</p>
        </div>
      </div>

      <!-- Music player core -->
      <div class="flex flex-col items-center justify-center  w-2/3">
        <!-- Icons of control -->
        <div class="flex items-center justify-center gap-3 pb-1 w-full">
          <img src="../assets/favorite_24dp.svg" alt="" width="20px">
          <div @click="useAudio.prevAudio(currentTrack)" class="hover:bg-zinc-800 rounded-full p-1">
            <img src="../assets/skip_previous_24dp.svg" alt="">
          </div>
          <div @click="playAudio()">
            <div v-if="!playing" class="transition-transform duration-300 transform hover:scale-110">
              <img src="../assets/play_circle_filled_24dp.svg" alt="" width="40px">
            </div>
            <div v-else class="transition-transform duration-300 transform hover:scale-110">
              <img src="../assets/pause_circle_24dp.svg" alt="" width="40px">
            </div>
          </div>
          <div @click="useAudio.nextAudio(currentTrack)" class="hover:bg-zinc-800 rounded-full p-1">
            <img src="../assets/skip_next_24dp.svg" alt="">
          </div>
          <img src="../assets/replay_24dp.svg" alt="" width="20px">
        </div>
        <div class="flex items-center justify-center text-sm font-light text-white  w-full">
          <p>{{ trackTimeCurrent }}</p>
          <div class="mx-3 w-2/3 h-1 bg-white rounded-full">
            <div class=" h-1 bg-green-600 rounded-full relative" :style="`width: ${range}%;`">
            </div>

          </div>
          <p>{{ trackTimeTotal }}</p>
        </div>
      </div>

      <!-- Volume -->
      <div class="justify-end pt-10 pr-4">
        <div class="flex items-center gap-3 ">
          <img src="../assets/volume_up_24dp.svg" alt="">
          <div class=" w-24 h-1 bg-white rounded-full">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

import { useAudioStore } from '../stores/Audio'
import { storeToRefs } from 'pinia'
const useAudio = useAudioStore()
const { playing, audio, currentTrack, currentArtist } = storeToRefs(useAudio)

let hover = ref(false)
let trackTimeCurrent = ref(null)
let trackTimeTotal = ref(null)
let seeker = ref(null)
let seekerContainer = ref(null)
let range = ref(0)

onMounted(() => {
  if (audio.value) {
    setTimeout(() => {
      timeupdate()
      loadmetadata()
    }, 300);
  }

  if (currentTrack.value) {
    seeker.value.addEventListener('change', function () {
      const time = audio.value.duration * (seeker.value / 100)
      audio.value.currentTime = time
    })

    seeker.value.addEventListener('mousedown', function () {
      audio.value.pause()
      playing.value = false
    })

    seeker.value.addEventListener('mouseup', function () {
      audio.value.play()
      playing.value = true
    })

    seekerContainer.value.addEventListener('click', function (e) {
      const clickPosition = (e.pageX - seekerContainer.value.offsetLeft) / seekerContainer.value.offsetWidth
      const time = audio.value.duration * clickPosition
      audio.value.currentTime = time
      seeker.value = (100 / audio.value.duration) * audio.value.currentTime
    })

  }
})



const timeupdate = () => {
  audio.value.addEventListener('timeupdate', function () {
    var minutes = Math.floor(audio.value.currentTime / 60)
    var seconds = Math.floor(audio.value.currentTime - minutes * 60)

    trackTimeCurrent.value = minutes + ':' + seconds.toString().padStart(2, '0')
    const value = (100 / audio.value.duration) * audio.value.currentTime
    range.value = value
    seeker.value = value
  })
}


const loadmetadata = () => {
  audio.value.addEventListener('loadedmetadata', function () {
    const duration = audio.value.duration
    const minutes = Math.floor(duration / 60)
    const seconds = Math.floor(duration % 60)
    trackTimeTotal = minutes + ':' + seconds.toString().padStart(2, '0')
  })
}

watch(() => audio.value, () => {
  timeupdate()
  loadmetadata()
})

watch(() => trackTimeCurrent.value, (time) => {
  if (time && time === trackTimeTotal.value) {
    useAudio.nextAudio(currentTrack.value)
  }
})

const playAudio = () => {
  if (currentTrack.value) {
    useAudio.playpauseThisAudio(currentArtist.value, currentTrack.value)
    return
  }
  useAudio.playFirst()
}

</script>