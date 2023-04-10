<script setup>
import p1 from '../assets/photo/section7/p1.png'
import p2 from '../assets/photo/section7/p2.png'
import p3 from '../assets/photo/section7/p3.png'
import p4 from '../assets/photo/section7/p4.png'
</script>

<template>
  <div class="w-10/12 mx-auto py-16">
    <h5 class="text-center text-xl font-semibold text-gray-600 mb-3">TESTIMONIALS</h5>
    <h2 class="text-center text-3xl font-bold text-gray-900">Automation stories straight from our customers</h2>
    <div class="grid grid-cols-12 gap-5 items-center md:hidden mt-5">
        <img class="col-span-6 md:col-span-3 md:w-16" :src="p1" alt="">
        <img class="col-span-6 md:col-span-3 md:w-16" :src="p2" alt="">
        <img class="col-span-6 md:col-span-3" :src="p3" alt="">
        <img class="col-span-6 md:col-span-3 md:w-20" :src="p4" alt="">
    </div>
    <div class="md:flex gap-5 items-center justify-around hidden mt-5">
        <img class=" md:w-16" :src="p1" alt="">
        <img class=" md:w-16" :src="p2" alt="">
        <img class="" :src="p3" alt="">
        <img class=" md:w-20" :src="p4" alt="">
    </div>
    
  </div>
</template>
