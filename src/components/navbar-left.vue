<template>
  <div id="navbar" class="flex flex-col h-full gap-2 " :class="open_sidebar ? 'w-72' : 'w-14'">
    <div class="flex items-center justify-start bg-zinc-900 rounded-lg w-full h-32 ">
      <div class="flex flex-col items-start gap-5 m-2 p-2 ">
        <!-- Home icon -->
        <RouterLink to="/categories">
          <div class="flex items-center gap-4 hover:cursor-pointer">
            <img src="../assets/home_filled_24dp.svg" alt="" width="22px" color="blue">
            <p v-if="open_sidebar" class="text-gray-400 font-medium hover:text-gray-100 ">Home</p>
          </div>
        </RouterLink>
        <!-- Search icon -->
        <RouterLink to="/search">
          <div class="flex items-center gap-4 hover:cursor-pointer">
            <img src="../assets/search_24dp.svg" alt="" width="22px">
            <p v-if="open_sidebar" class="text-gray-400 font-medium hover:text-gray-100">Search</p>
          </div>
        </RouterLink>
      </div>
    </div>
    <div class="flex items-start bg-zinc-900 rounded-md w-full h-full  justify-start">
      <div class="flex items-start justify-center gap-5 m-2 p-2 w-full hover:cursor-pointer"
        :class="!open_sidebar ? 'flex-col ' : 'flex-row justify-between'">
        <!-- Library icon -->
        <div @click="open_sidebar = !open_sidebar" class="flex gap-4">
          <img src="../assets/bookmark_24dp.svg" alt="" width="22px">
          <p v-if="open_sidebar" class="text-gray-400 font-medium hover:text-gray-100">Your Library</p>
        </div>
        <!-- plus icon -->
        <div class="">
          <img src="../assets/add_24dp.svg" alt="" width="22px">
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const open_sidebar = ref(false)
</script>
