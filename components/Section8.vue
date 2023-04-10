<script setup>
import p1 from '../assets/photo/section8/p1.svg'
import p2 from '../assets/photo/section8/p2.png'
import p3 from '../assets/photo/section8/p3.jpeg'
import p4 from '../assets/photo/section8/p4.jpeg'
import p5 from '../assets/photo/section8/p5.png'
import p6 from '../assets/photo/section8/p6.png'
</script>

<template>
    <div class="lg:flex w-10/12 mx-auto gap-10 py-16">

        <div class="p-5 shadow-lg rounded-lg w-full">
            <img class="w-[200px] h-[80px] mb-3" :src="p1" alt="">
            <h3 class="text-xl font-bold text-gray-900">Maryland based Remediation Contractor</h3>
            <p class="text-gray-500 mb-5"><small>RYAN HESS, HEAD OF ACCOUNTS PAYABLE</small></p>
            <p class="text-lg text-gray-600">Building Smarter:</p>
            <p class="text-lg text-gray-600">ACM Services saves 90% time for its Accounts Payable Team with Nanonets Invoice Extraction</p>
            <button class="flex items-center text-blue-700 mt-8">
                Read Story
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4 ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

            </button>
        </div>
        <div class="p-5 shadow-lg rounded-lg w-full">
            <img class="w-[200px] h-[80px] mb-3" :src="p4" alt="">
            <h3 class="text-xl font-bold text-gray-900">Expatrio Global Services is the GmbHHRT</h3>
            <p class="text-gray-500 mb-5"><small>TAY KIM, PRODUCT OPERATIONS MANAGER</small></p>
            <p class="text-lg text-gray-600">Passport to success:</p>
            <p class="text-lg text-gray-600">Expatrio achieves 95% reduction in time for Manual Data Entry eduction in time with Nanonets OCR</p>
            <button class="flex items-center text-blue-700 mt-8">
                Read Story
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4 ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

            </button>
        </div>
        <div class="p-5 shadow-lg rounded-lg w-full">
            <img class="w-[200px] h-[80px] mb-3" :src="p3" alt="">
            <h3 class="text-xl font-bold text-gray-900">Tapi Property is the Maintenance Software</h3>
            <p class="text-gray-500 mb-5"><small>DAVID GIOVANNI, CEO</small></p>
            <p class="text-lg text-gray-600">Growing exponentially:</p>
            <p class="text-lg text-gray-600">Tapi is processing invoices in seconds instead of hours through Nanonets AI which has helped them.</p>
            <button class="flex items-center text-blue-700 mt-8">
                Read Story
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4 ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

            </button>
        </div>
    </div>
</template>
