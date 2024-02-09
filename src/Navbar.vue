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
      <Button class="ml-4">
        <a href="https://t.me/+eqMCR0QQamQ2YWQy" target="_blank">
          <svg class="h-7 w-7 align-center" fill="sky" viewbox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
            <path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.840.869,-4.084 2.977,-14.421 3.768,-18.136.06,-0.28 -0.04,-0.571 -0.26,-0.758-.22,-0.187 -0.525,-0.241 -0.797,-0.14-4.193,1.552 -17.106,6.397 -22.384,8.35-.335,0.124 -0.553,0.446 -0.542,0.799.012,0.354 0.25,0.661 0.593,0.764 2.367,0.708 5.474,1.693 5.474,1.693 0,0 1.452,4.385 2.209,6.615.095,0.28 0.314,0.5 0.603,0.576.288,0.075 0.596,-0.004 0.811,-0.207 1.216,-1.148 3.096,-2.923 3.096,-2.923 0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" />
          </svg>
        </a>
      </Button>
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
