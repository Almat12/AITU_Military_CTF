<template>
  <div class="relative flex flex-col h-screen m-0">
    <img src="./assets/bg.gif" alt="Background" class="absolute z-0 w-full h-full object-cover" />
    <div class="flex flex-1 items-end justify-center mt-16 pb-12 z-10">
      <div class="absolute bottom-0 mb-12 w-full flex flex-col items-center justify-center z-20">
        <template v-if="timeLeft">
          <div class="flex flex-wrap justify-center space-x-4 mb-4">
            <div class="flex flex-col items-center justify-center m-2">
              <p class="text-5xl text-white font-semibold">{{ days >= 0 ? days : 0 }}</p>
              <span class="text-xl md:text-3xl text-white">Days</span>
            </div>
            <div class="flex flex-col items-center justify-center m-2">
              <p class="text-5xl text-white font-semibold">{{ hours >= 0 ? hours % 24 : 0 }}</p>
              <span class="text-xl md:text-3xl text-white">Hours</span>
            </div>
            <div class="flex flex-col items-center justify-center m-2">
              <p class="text-5xl text-white font-semibold">{{ minutes >= 0 ? minutes % 60 : 0 }}</p>
              <span class="text-xl md:text-3xl text-white">Minutes</span>
            </div>
            <div class="flex flex-col items-center justify-center m-2">
              <p class="text-5xl text-white font-semibold">{{ seconds >= 0 ? seconds % 60 : 0 }}</p>
              <span class="text-xl md:text-3xl text-white">Seconds</span>
            </div>
          </div>
          <div class="justify-center flex">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 mr-4 rounded">
            <a href="https://forms.office.com/r/hcX0PDgALY" target="_blank">
              Регистрация команды
            </a>
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
            <a href="https://forms.office.com/r/hcX0PDgALY" target="_blank">
              Регистрация как гость
            </a>
          </button>
        </div>
        </template >
        <template v-else class="flex flex-wrap justify-end space-x-4">
        <div class="flex flex-wrap justify-center space-x-4 mb-4">
            <div class="flex flex-col items-center justify-center m-2">
              <p class="text-5xl text-white font-semibold">{{ days >= 0 ? days : 0 }}</p>
              <span class="text-xl md:text-3xl text-white">Days</span>
            </div>
            <div class="flex flex-col items-center justify-center m-2">
              <p class="text-5xl text-white font-semibold">{{ hours >= 0 ? hours % 24 : 0 }}</p>
              <span class="text-xl md:text-3xl text-white">Hours</span>
            </div>
            <div class="flex flex-col items-center justify-center m-2">
              <p class="text-5xl text-white font-semibold">{{ minutes >= 0 ? minutes % 60 : 0 }}</p>
              <span class="text-xl md:text-3xl text-white">Minutes</span>
            </div>
            <div class="flex flex-col items-center justify-center m-2">
              <p class="text-5xl text-white font-semibold">{{ seconds >= 0 ? seconds % 60 : 0 }}</p>
              <span class="text-xl md:text-3xl text-white">Seconds</span>
            </div>
          </div>
          <div>
            <p class="text-2xl md:text-2xl text-white font-bold">
              Регистрация закрыта
            </p> 
          </div>
        </template>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const timeLeft = ref(true);
    const LaunchDate = new Date('February 22, 2024 22:59:59');

    setInterval(() => {
      const currDate = new Date();
      const launchTime = LaunchDate - currDate;
      if (launchTime < 0) {
        timeLeft.value = false;
      } else {
        timeLeft.value = true;
        seconds.value = Math.floor((launchTime / 1000) % 60);
        minutes.value = Math.floor((launchTime / 1000 / 60) % 60);
        hours.value = Math.floor((launchTime / (1000 * 60 * 60)) % 24);
        days.value = Math.floor(launchTime / (1000 * 60 * 60 * 24));
      }
    }, 1000);

    return { days, hours, minutes, seconds, timeLeft };
  },
};
</script>
