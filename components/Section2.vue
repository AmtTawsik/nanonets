<script setup>
import vide from '../assets/photo/brand/vide.png'
import p2 from '../assets/photo/brand/p2.svg'
import p3 from '../assets/photo/brand/p3.svg'
import p4 from '../assets/photo/brand/p4.svg'
import p5 from '../assets/photo/brand/p5.svg'
import p6 from '../assets/photo/brand/p6.svg'
import p7 from '../assets/photo/brand/p7.svg'
import p8 from '../assets/photo/brand/p8.svg'
import p9 from '../assets/photo/brand/p9.svg'
import p10 from '../assets/photo/brand/p10.svg'
import p11 from '../assets/photo/brand/p11.svg'
import p12 from '../assets/photo/brand/p12.svg'
</script>
<template>
    <div class="bg-gray-50 pt-16">
        <div class="w-10/12 mx-auto">
            <h5 class="text-xl text-center">Trusted by 10,000+ customers across the globe</h5>
            <section class="grid grid-cols-12 items-center gap-5 my-5 mx-auto">
                <img class="col-span-6 md:col-span-2" :src="p8" alt="">
                <img class="col-span-6 md:col-span-2" :src="p2" alt="">
                <img class="col-span-6 md:col-span-2" :src="p3" alt="">
                <img class="col-span-6 md:col-span-2" :src="p4" alt="">
                <img class="col-span-6 md:col-span-2" :src="p5" alt="">
                <img class="col-span-6 md:col-span-2" :src="p6" alt="">
                <img class="col-span-6 md:col-span-2" :src="p7" alt="">
                <img class="col-span-6 md:col-span-2" :src="p8" alt="">
                <img class="col-span-6 md:col-span-2" :src="p9" alt="">
                <img class="col-span-6 md:col-span-2" :src="p10" alt="">
                <img class="col-span-6 md:col-span-2" :src="p11" alt="">
                <img class="col-span-6 md:col-span-2" :src="p12" alt="">
            </section>
            <h5 class="text-xl font-semibold flex justify-center items-center text-blue-700 my-10">
                Read Customer Stories
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="w-5 h-5 ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
            </h5>
            <div>
                <img :src="vide" alt="">
            </div>
        </div>
    </div>
</template>
