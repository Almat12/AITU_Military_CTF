<template>
  <section class="mt-4 p-4 bg-white">
      <div class="p-6 max-w-2xl mx-auto bg-white flex flex-col items-center space-y-4" id="reg">
      <div class="text-xl font-medium text-black">
        Регистрация на CTF
      </div>
      <div v-for="(member, index) in teamMembers" :key="index" class="flex items-center space-x-3 mt-4 p-4">
        <input v-model="member.name" type="text" placeholder="Имя участника" class="block w-full px-4 py-2 text-sm border rounded">
        <button @click="removeMember(index)" class="text-red-500 hover:text-red-700">Удалить</button>
      </div>
      <button @click="addMember" class="px-6 py-2 border rounded text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500">
        Добавить участника
      </button>
      <button @click="submitApplication" class="px-6 py-2 border rounded text-green-500 border-green-500 hover:text-white hover:bg-green-500">
        Подать заявку
      </button>
      <a href="https://vpn.example.com/download" class="text-blue-500 hover:underline">
      Скачать VPN
    </a>
    </div>
    </section>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const teamMembers = ref([{ name: '' }]); // Стартовое состояние с одним пустым участником
  
      function addMember() {
        teamMembers.value.push({ name: '' }); // Добавляет нового участника с пустым именем
      }
  
      function removeMember(index) {
        teamMembers.value.splice(index, 1); // Удаляет участника по индексу
      }
  
      function submitApplication() {
        // Здесь будет логика для отправки заявки
        alert('Заявка отправлена!');
      }
  
      return { teamMembers, addMember, removeMember, submitApplication };
    }
  };
  </script>
  