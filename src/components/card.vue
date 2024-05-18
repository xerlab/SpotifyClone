<template>
  <RouterLink to="/playlist">
    <div class="hover:bg-zinc-800 w-44 rounded-lg overflow-hidden relative group">
      <div class="h-32  overflow-hidden">
        <img src="https://fastly.picsum.photos/id/152/200/200.jpg?hmac=jxm74qVoEmDIDdKJ1_I2QT6AhtYcq-KN75l_iotKiOw"
          alt="">
      </div>
      <div class="opacity-0 absolute right-4 bottom-14 group-hover:opacity-100 transition-opacity duration-300 ">
        <img src="../assets/play_circle_filled_24dp.svg" alt="" width="45px"
          class="transition-transform duration-300 transform hover:scale-110">
      </div>
      <div class="p-3 ">
        <p class="text-white font-medium text-sm pb-1">Surat Qaf</p>
        <p class="text-gray-400 font-light text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router' 
</script>