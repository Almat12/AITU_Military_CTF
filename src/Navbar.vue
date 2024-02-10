<template>
    <div class="bg-inherit text-black py-3.5 px-6 md:flex justify-between items-center z-20 relative">
    <div class="flex items-center cursor-pointer">
   
      <h1 class="justify-left">AITU Military CTF</h1>
    </div>
     <div
      class="fixed inset-0 z-10"
      @click="MenuOpen"
      v-show="link"
    ></div>
    <span @click="MenuOpen" class="absolute right-6 top-1.5 cursor-pointer text-4xl z-30 md:hidden">
        <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
      </span>
    <ul class="md:flex md:items-center md:px-0 px-3 md:pb-0 pb-10 md:static absolute bg-white md:w-auto w-full top-12 duration-700 ease-in" 
    :class="[open ? 'left-0' : 'left-[-100%]']">
      <li class="md:mx-4 md:my-0 my-6 ml-4" v-for="link in Links">
        <a :href="link.link" class="text-xl hover:text-green-500">{{link.name}}</a>
        
      </li>
      <li class="md:mx-4 md:my-0 my-6 ml-4" >
        <a href="https://forms.office.com/r/hcX0PDgALY" class="text-xl hover:text-green-500" target="_blank">Регистрация</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import Button from './Button.vue';

export default {
  components: {
    Button
  },
  setup() {
    let open = ref(false);
    
    let Links = [
      { name: "Ключевые события", link: "#key-events" },
      { name: "FAQ", link: "#FAQ" },

    ];

    function MenuOpen() {
      open.value = !open.value;
      let Links = [
      { name: "Ключевые события", link: "#key-events" },
      { name: "FAQ", link: "#FAQ" },

    ]
    }

    return { Links, open, MenuOpen };
  },
};
</script>
