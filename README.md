<template>
    <nav class="bg-white border-b sm:px-4 h-[7.5vh] rounded  min-w-[1200px]">
        <div class="flex items-center justify-between">
            <a href="#" class="flex items-center">
                <span class="self-center text-xl font-semibold whitespace-nowrap ">Contacts</span>
            </a>

            <div class="items-center justify-between flex w-auto" id="navbar-cta">
                <ul class="flex px-4 py-2 border-gray-100 rounded-lg  flex-row space-x-8 mt-0 text-sm font-medium border-0">

                    <form>
                        <label for="default-search" class="text-sm font-medium text-gray-900 sr-only ">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input type="search" id="default-search"
                                class="block w-full pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
                                placeholder="Search PipeDrive" required>
                        </div>
                    </form>

                    <div class="border rounded-full h-fit w-fit p-1.5 cursor-pointer hover:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                </ul>
            </div>

            <div class="flex items-center gap-2">
                <div class="rounded-full h-fit w-fit p-1.5 cursor-pointer hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                    </svg>
                </div>
                <div class="rounded-full h-fit w-fit p-1.5 cursor-pointer hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                </div>
                <div class="rounded-full h-fit w-fit p-1.5 cursor-pointer hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                </div>
                <div class="rounded-full h-fit w-fit p-1.5 cursor-pointer font-semibold bg-gray-100">
                    AM
                </div>
            </div>
        </div>
    </nav>


    <div class="grid grid-cols-12 w-full h-[92.5vh]  overflow-hidden">
        <div class="border-r bg-stone-200 h-[92.5vh] col-span-2">
            <ul class="space-y-2 flex-wrap -mb-px text-sm font-medium mx-1" id="myTab1" data-tabs-toggle="#myTabContent1"
                role="tablist">
                <li role="presentation">
                    <button class="w-full" id="people-tab" data-tabs-target="#people" type="button" role="tab"
                        aria-controls="people" aria-selected="true">
                        <a href="#"
                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100  w-full whitespace-nowrap">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <span class="ml-3 font-bold">People</span>
                        </a>
                    </button>
                </li>
                <li role="presentation">
                    <button class="w-full" id="organizations-tab" data-tabs-target="#organizations" type="button" role="tab"
                        aria-controls="organizations" aria-selected="false"><a href="#"
                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100  w-full whitespace-nowrap">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                            </svg>
                            <span class="ml-3 font-bold">Organizations</span>
                        </a>
                    </button>
                </li>
                <li role="presentation">
                    <button class="w-full" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab"
                        aria-controls="contacts" aria-selected="false"><a href="#"
                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100  w-full whitespace-nowrap">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            <span class="ml-3 font-bold">Contacts timeline</span>
                        </a>
                    </button>
                </li>
            </ul>
        </div>

        <div id="myTabContent1" class="col-span-10 w-full overflow-y-scroll scrollbar-hide">
            <div class="hidden rounded-lg  w-full" id="people" role="tabpanel" aria-labelledby="people-tab">
                <div class="">
                    <ContactPeople></ContactPeople>
                </div>
            </div>
            <div class="hidden rounded-lg " id="organizations" role="tabpanel" aria-labelledby="organizations-tab">
                <div class="">
                    <ContactOrganization></ContactOrganization>
                </div>
            </div>
            <div class="hidden rounded-lg  " id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                <div class="">
                    <LiveChat></LiveChat>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>