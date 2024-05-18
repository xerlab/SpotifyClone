<template>
  <!-- :class="!currentTrack ? 'h-full' : 'h-[825px]'" -->
  <div class="h-full p-4 pt-40 overflow-y-scroll no-scrollbar ">
    <div v-for="x in 4" class=" flex flex-col justify-start ">
      <p class="font-semibold text-white p-3 px-4">Recently added {{ x }}</p>
      <div class="flex gap-3 p-3 mb-3 h-56">
        <card v-for="x in 7" />
      </div>
    </div>



  </div>
</template>