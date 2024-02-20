<template> <div class="bg-gray-100 p-4">
  <!-- Header section -->
  <header id="key-events" class=" text-black p-4">
    <h1 class="text-4xl font-bold">Ключевые события</h1>
  </header>

  <!-- Workshop section -->
  <section class="mt-4 p-4 bg-white flex flex-col items-center lg:flex-row lg:justify-around lg:space-x-10">
  <!-- Qualifying Round Section -->
  <div class="flex flex-col items-center lg:items-start mt-4 lg:mt-0">
    <img src="./assets/checkin.png" alt="" class="h-auto w-60 rounded-lg">
    <h2 class="text-lg font-bold mt-2">Сбор участников (Check In)</h2>
    <p class="mb-3 ml-1">24 Февраля 2024, 10:00 – 10:45</p>
</div>
  <!-- Capture The Flag Challenge section -->
  <div class="flex flex-col items-center lg:items-start mt-4  lg:mt-0">
    <img src="./assets/mainpart.png" alt="Основной этап CTF" class="h-auto w-60 rounded-lg">
    <h2 class="text-xl font-bold mt-2 ml-4">Capture The Flag (CTF)</h2>
    <p class="ml-3">24 февраля 2024, 11:00 - 16:00</p>
  </div>
  <!-- Webinar and Award Presentation section -->
  
     <div class="flex flex-col items-center lg:items-start mt-4  lg:mt-0">
    <img src="./assets/awards.png" alt="Основной этап CTF" class="h-auto w-52  rounded-lg">
    <h2 class="text-lg font-bold mt-2">Церемония награждения</h2>
   <p class="ml-7 mb-4">24 Февраля 2024, 17:00</p>
  </div>
  </section>
    <header id="key-events" class="text-black p-4">
  <h1 class="text-4xl font-bold text-center">Примеры задач CTF</h1>
</header>

<section class="mt-4 p-4 bg-white">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <!-- OSINT Column -->
    <div class="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200 p-4 flex flex-col justify-between">
      <div class="flex items-center justify-center space-x-2">
        <a href="/OSINT.pdf" target="_blank"> 
        <span class="text-md text-black hover:text-blue-500 hover:underline">OSINT</span>
         </a>
          <img src="./assets/pdf-icon.png" alt="PDF" class="w-4 h-4">
      </div>
      <p class="text-md text-black mt-2">Сбор и анализ данных из общедоступных источников для выявления информации, которая поможет решить задачу.</p>
    </div>

    <!-- Web Exploitation Column -->
    <div class="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 p-4 flex flex-col justify-between">
      <div class="flex items-center justify-center space-x-2">
        <a href="/web.pdf" target="_blank">
        <span class="text-md text-black hover:text-blue-500 hover:underline">Web эксплуатация</span>
       </a>
          <img src="./assets/pdf-icon.png" alt="PDF" class="w-4 h-4">
      
      </div>
      <p class="text-md text-black mb-5">Использование уязвимостей в веб-приложениях для проникновения в систему.</p>
    </div>

    <!-- Reverse Engineering Column -->
    <div class="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 p-4 flex flex-col justify-between">
      <div class="flex items-center justify-center space-x-2">
        <span class="text-md text-black hover:text-blue-500 hover:underline">Reverse Engineering</span>
        <a href="/reverse.pdf" target="_blank">
          <img src="./assets/pdf-icon.png" alt="PDF" class="w-4 h-4">
        </a>
      </div>
      <p class="text-md text-black mb-5">Анализ закрытых программных решений с целью понимания их работы и выявления уязвимостей.</p>
    </div>
  </div>
</section>

<header id="speak" class="text-black p-4">
  <h1 class="text-4xl font-bold text-center">Cпикеры</h1>
</header>
      <!-- Speakers -->
      <section class="mt-4 p-4 bg-white">
  <div class="flex flex-wrap justify-center items-center mt-8 md:justify-center">
    <div v-for="person in people" :key="person.id" class="h-auto w-48 mb-12 ml-16 mr-16"
         :class="{'blur': person.id === 3}">
      <!-- Image with Tailwind CSS classes and conditional blur -->
      <img :src="person.imageSrc" :alt="person.name" class="rounded-xl md:block">
      <!-- Person's details -->
      <div class="text-center">
        <p class="text-lg underline">{{ person.theme }}</p>
        <p class="text-sm text-wrap">{{ person.position }}</p>
      </div>
    </div>
  </div>
</section>

      <!-- Organization -->
      <header id="org" class="text-black p-4">
      <h1 class="text-4xl font-bold justify-center items-center flex">Организаторы</h1>
    </header>
    <section class="mt-4 p-4 bg-white">
      <div class="flex flex-wrap justify-center items-center mt-8 md:justify-center">
        <!-- The first image will be centered on medium devices and up, and left-aligned on smaller screens -->
        <img src="./assets/ctfkaf.png" alt="" class="h-auto w-48 mb-10 block md:hidden mx-auto">
        <img src="./assets/Astana_IT_University.png" alt="" class="h-auto w-44 mb-10">
        <img src="./assets/ctfkaf.png" alt="" class="h-auto w-48 mb-12 ml-10 mr-10 hidden md:block">
        <img src="./assets/logo.png" alt="" class="h-auto w-48 mb-9 rounded-lg">
      </div>
    </section>
    </div>
    <!-- FAQ -->
    <section id="FAQ" class="bg-black text-white p-8">
    <h2 class="text-2xl font-bold mb-6 text-center">FAQ</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Display each FAQ item within the grid -->
      <div v-for="(item, index) in faqItems" :key="index" class="relative border border-white rounded">
        <button @click="toggleFaq(index)" class="w-full text-left p-4 flex justify-between items-center ">
          <span>{{ item.question }}</span>
          <span>{{ item.open ? '-' : '+' }}</span>
        </button>
        <div v-show="item.open" class="absolute left-0 w-full z-10 bg-white text-black p-4 border border-white">
          <p>{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { ref } from 'vue';
  export default {
    name: 'PeopleList',
  data() {
    return {
          people: [
        {
          id: 1,
          name: 'Иманбердиев Абулхаир Ерболович',
          theme: 'Тема выступления',
          position: 'Актуальные тенденции в сфере исследования вредоносных файлов',
          imageSrc: './first.jpg'
        },
        {
          id: 2,
          name: 'Оразбеков Шокан Сансызбаевич',
          theme: 'Тема выступления',
          position: 'О деятельности АФМ РК и возможностях трудоустройства/стажировок',
          imageSrc: '/second.jpg'
        },
        {
          id: 3,
          name: '???',
          position: 'XXX',
          imageSrc: '/unknown.jpeg'
        }
      ],
      faqItems: [
        {
          question: 'Сколько команд примет участие в CTF?',
          answer: 'В зависимости от количества участников, предварительно на CTF примут участие 15 команд.',
          open: false
        },
        // Добавьте дополнительные вопросы и ответы здесь
        {
          question: 'Сколько участников должно быть в команде?',
          answer: 'В каждой команде должно быть 3 участника.',
          open: false
        },
      
        {
          question: 'Как долго продлится CTF?',
          answer: 'CTF будет длиться 5 часов.',
          open: false
        },
        {
          question: 'Когда и где пройдет оффлайн CTF?',
          answer: 'CTF состоится 24 февраля в Astana IT University в OpenSpace в оффлайн формате.',
          open: false
        },
        {
          question: 'Есть ли возможность изменения состава команды после регистрации?',
          answer: 'Нет, после регистрации состав команды изменять нельзя, поэтому рекомендуем внимательно формировать команду перед регистрацией.',
          open: false
        },
        {
          question: 'Какие призы предусмотрены для победителей оффлайн CTF?',
          answer: 'Призовых будет 3 места и каждому участнику CTF будет начисление SOC GPA.',
          open: false
        },
        {
          question: 'Каким образом будут оцениваться решения задач?',
          answer: 'Оценка решений задач будет проводиться с использованием определенных критериев, которые будут объявлены перед началом CTF.',
          open: false
        },
        {
          question: 'Какие технические требования необходимы для участия в отборочном CTF?',
          answer: 'Для участия в CTF необходим ноутбук с установленными необходимыми инструментами, а также желание решать задачи в команде.',
          open: false
        },
        {
          question: 'Будут ли предоставлены подсказки или поддержка во время соревнования?',
          answer: 'В течение CTF предусмотрено предоставление подсказок в зависимости от решения задач, также будет обеспечена техническая поддержка для решения проблем связанных с платформой.',
          open: false
        },
        // Продолжайте добавлять вопросы и ответы по аналогии
      ],
  };
},
methods: {
  toggleFaq(index) {
      // Close all items
      this.faqItems.forEach((item, i) => {
        if (i !== index) item.open = false;
      });
      // Toggle the clicked item
      this.faqItems[index].open = !this.faqItems[index].open;
    },
},
}

</script>
<style>

/* Ensure that the answer divs do not interfere with each other */
.faq-answer {
  transition: all 0.3s ease;
  max-height: 0;
  overflow: hidden;
  z-index: 10; /* Ensure it stacks above other content */

}

/* Set a max-height when the answer is shown */
.faq-answer[style*="display: block;"],
.faq-answer[style*="display: block"] {
  max-height: 20rem; /* Adjust as needed for your content */
}
</style>
