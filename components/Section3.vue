<script setup>
import p1 from '../assets/photo/section3/p1.svg'
import p2 from '../assets/photo/section3/p2.svg'
import p3 from '../assets/photo/section3/p3.svg'
</script>

<template>
  <div class="w-10/12 mx-auto grid grid-cols-12 gap-5 py-16">
    <div class="col-span-12 md:col-span-4">
        <img :src="p1" alt="">
        <h5 class="font-bold text-xl my-2">Understand documents</h5>
        <p class="text-lg text-gray-600">Use AI to read unseen, semi-structured documents that don't follow a standard template like generic OCR software.</p>
    </div>
    <div class="col-span-12 md:col-span-4">
        <img :src="p2" alt="">
        <h5 class="font-bold text-xl my-2">Slash turn around time</h5>
        <p class="text-lg text-gray-600">Use AI to read unseen, semi-structured documents that don't follow a standard template like generic OCR software.</p>
    </div>
    <div class="col-span-12 md:col-span-4">
        <img :src="p3" alt="">
        <h5 class="font-bold text-xl my-2">Validate extracted data</h5>
        <p class="text-lg text-gray-600">Use AI to read unseen, semi-structured documents that don't follow a standard template like generic OCR software.</p>
    </div>
  </div>
</template>
