<script setup>
import p1 from '../assets/photo/section10/p1.png'
import p2 from '../assets/photo/section10/p2.png'
import p3 from '../assets/photo/section10/p3.png'
import p4 from '../assets/photo/section10/p4.png'
import p5 from '../assets/photo/section10/p5.png'
import p6 from '../assets/photo/section10/p6.png'
import p7 from '../assets/photo/section10/p7.png'
import p8 from '../assets/photo/section10/p8.png'
</script>

<template>
  <div class="w-10/12 mx-auto grid grid-cols-12 gap-5 mt-10 items-center">
    <div class="md:col-span-4 col-span-12">
        <h3 class="text-3xl text-gray-900 font-bold">Ready to get started?</h3>
        <p class="text-lg my-3">We have ready to use solutions for most common document types. Create and set up your own custom model in a few clicks.</p>
        <div>
            <button class="font-semibold px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white border-2 rounded-lg mr-3">GET A DEMO</button>
            <button class="font-semibold px-5 py-2 hover:bg-blue-700 text-blue-600 hover:text-white border-2 rounded-lg">TRY FOR FREE</button>
        </div>
    </div>
    <div class="md:col-span-8 col-span-12">
      <div class="grid grid-cols-12 gap-5">
        <img class="col-span-6 md:col-span-3 rounded-lg cursor-pointer" :src="p1" alt="">
        <img class="col-span-6 md:col-span-3 rounded-lg cursor-pointer" :src="p2" alt="">
        <img class="col-span-6 md:col-span-3 rounded-lg cursor-pointer" :src="p3" alt="">
        <img class="col-span-6 md:col-span-3 rounded-lg cursor-pointer" :src="p4" alt="">
        <img class="col-span-6 md:col-span-3 rounded-lg cursor-pointer" :src="p5" alt="">
        <img class="col-span-6 md:col-span-3 rounded-lg cursor-pointer" :src="p6" alt="">
        <img class="col-span-6 md:col-span-3 rounded-lg cursor-pointer" :src="p7" alt="">
        <img class="col-span-6 md:col-span-3 rounded-lg cursor-pointer" :src="p8" alt="">
      </div>
    </div>
  </div>
</template>
