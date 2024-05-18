<template>
  <div class="flex flex-col h-full">

    <!-- current playlist Title -->
    <div class="h-fit mt-32 pb-6 shadow-sm ">
      <div class=" h-fit mx-8 flex gap-2 w-full items-center">
        <div class="rounded-lg overflow-hidden w-40 h-full">
          <img :src="artist.albumCover" alt="" width="175px">
        </div>
        <div class="p-2 ">
          <p class="text-gray-200 font-extrabold text-8xl overflow-clip h-28 ">{{ artist.name }}</p>
          <p class="text-gray-500 font-light text-lg pl-4">{{ artist.name }}</p>
        </div>
      </div>
    </div>

    <!-- playlist area -->
    <div class="h-full mx-6 overflow-scroll no-scrollbar ">

      <!-- Playpause -->
      <div class="px-4 my-2 flex items-center gap-4 ">
        <!-- play -->
        <div @click="currentTrack ? useAudio.playpauseAudio() : useAudio.playFirst()">
          <div v-if="!playing" class="transition-transform duration-300 transform hover:scale-110">
            <img src="../assets/play_circle_filled_24dp.svg" alt="" width="60px">
          </div>
          <div v-else="playing" class="transition-transform duration-300 transform hover:scale-110">
            <img src="../assets/pause_circle_24dp.svg" alt="" width="60px">
          </div>
        </div>
        <!-- plus icon -->
        <div class="">
          <img src="../assets/add_24dp.svg" alt="" width="30px">
        </div>
      </div>


      <div class="p-4 h-full">
        <!-- playlist header -->
        <div class="flex text-gray-500 text-sm px-6 ">
          <div class="flex gap-6 w-full pl-2 ">
            <p>#</p>
            <p class="pl-2">Title</p>
          </div>
          <div class="flex items-center w-full text-sm ">
            <div class=" w-1/3 ">
              <p>Artist name</p>
            </div>
            <div class="w-1/3 flex justify-center">
              <p>Release Date</p>
            </div>
            <div class="w-1/3 flex justify-end">
              <p>Time</p>
            </div>

          </div>
        </div>
        <hr class="mt-2 opacity-15 pb-4">


        <!-- playlist -->
        <div class="flex flex-col " v-for="track, index in artist.tracks" :key="track">
          <audiofile :artist="artist" :index="index" :track="track" :selected="currentTrack?.id == track.id" />
        </div>
      </div>


    </div>
  </div>
</template>

<script setup>
import { useAudioStore } from '../stores/Audio'
import { storeToRefs } from 'pinia'
const useAudio = useAudioStore()
const { playing, audio, currentTrack, currentArtist } = storeToRefs(useAudio)
import artist from '../artist.json'
</script>
