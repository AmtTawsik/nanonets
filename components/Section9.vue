<script setup>
import p1 from '../assets/photo/section9/p1.png'
import p2 from '../assets/photo/section9/p2.png'
</script>

<template>
    <div class="md:w-7/12 w-10/12 mx-auto">
        <div
            class="flex flex-col mb-8 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 bg-blue-900 justify-evenly items-center py-10 rounded-xl px-5 md:px-0">
            <div>
                <h2 class="text-3xl md:text-4xl font-semibold text-gray-50">Get a customised</h2>
                <h2 class="text-3xl md:text-4xl font-semibold text-gray-50">Demo on your own</h2>
                <h2 class="text-3xl md:text-4xl font-semibold text-gray-50">Workflow</h2>
                <p class="text-gray-50 mt-5">Book a free 30 minute consultation with our Experts!</p>
            </div>
            <div href="#"
                class="inline-flex justify-center items-center h-[60px] px-5 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
                Request a Demo
                <div class="flex ml-2 -space-x-4">
                    <img class="w-10 h-10 border-2 border-white rounded-full "
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="">
                    <img class="w-10 h-10 border-2 border-white rounded-full "
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="">
                    <img class="w-10 h-10 border-2 border-white rounded-full "
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="md:w-7/12 w-10/12 mx-auto grid grid-cols-12 gap-5">
        <p class="flex items-center col-span-12 md:col-span-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6 mr-1 text-green-600">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            GDPR Compliant
        </p>
        <p class="flex items-center col-span-12 md:col-span-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6 mr-1 text-green-600">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Extracted data validation
        </p>
        <p class="flex items-center col-span-12 md:col-span-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6 mr-1 text-green-600">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Model retraining
        </p>
        <p class="flex items-center col-span-12 md:col-span-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6 mr-1 text-green-600">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Fast API response time
        </p>
        <p class="flex items-center col-span-12 md:col-span-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6 mr-1 text-green-600">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            On Premises Deployment
        </p>
        <p class="flex items-center col-span-12 md:col-span-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6 mr-1 text-green-600">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Continuous learning
        </p>
    </div>
    <div class="flex flex-col md:flex-row items-center justify-center gap-5 mt-10">
        <img class="rounded-lg shadow-lg border-2" :src="p1" alt="">
        <img class="rounded-lg shadow-lg border-2" :src="p2" alt="">
    </div>
</template>
