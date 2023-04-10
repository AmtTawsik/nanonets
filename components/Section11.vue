<script setup>
import p1 from '../assets/photo/section11/p1.svg'
import p2 from '../assets/photo/section11/p2.svg'
import p3 from '../assets/photo/section11/p3.svg'
import p4 from '../assets/photo/section11/p4.svg'
</script>

<template>
    <div class="w-10/12 mx-auto md:flex items-center justify-between py-16">
        <div class="flex items-center md:w-fit md:pr-16 mb-5 md:mb-0 md:border-r-2">
            <img class="mr-2" :src="p1" alt="">
            <p class="text-lg"><span class="font-bold">>1B</span> Documents processed</p>
        </div>
        <div class="flex items-center md:w-fit md:pr-16 mb-5 md:mb-0 md:border-r-2">
            <img class="mr-2" :src="p2" alt="">
            <p class="text-lg"><span class="font-bold">>90%</span> Time savings</p>
        </div>
        <div class="flex items-center md:w-fit md:pr-16 mb-5 md:mb-0 md:border-r-2">
            <img class="mr-2" :src="p3" alt="">
            <p class="text-lg"><span class="font-bold">>10x</span> Productivity increase</p>
        </div>
        <div class="flex items-center md:w-fit md:pr-16 mb-5 md:mb-0 md:border-r-2">
            <img class="mr-2" :src="p4" alt="">
            <p class="text-lg"><span class="font-bold">GDPR</span> Compliant</p>
        </div>
    </div>
</template>
