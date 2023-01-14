<template>
  <div class="py-6 bg-white shadow-sm">
    <div>
      <div class="container mx-auto px-5">
        <nav class="flex h-9 items-center justify-between" aria-label="Global">
          <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600" alt="">
            </a>
          </div>
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Open main menu</span>
              <!-- Heroicon name: outline/bars-3 -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
            <a href="#" class="text-gray-900 hover:text-gray-900">Product</a>

            <a href="#" class="text-gray-900 hover:text-gray-900">Features</a>

            <a href="#" class="text-gray-900 hover:text-gray-900">Marketplace</a>

            <a href="#" class="text-gray-900 hover:text-gray-900">Company</a>
          </div>
          <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end items-center gap-3">
            <router-link :to="{ name: 'login' }" class="inline-block rounded-lg px-3 py-1.5 text-sm font-medium leading-6 bg-primary-green text-white border border-primary-green transition hover:bg-primary-green-light hover:border-primary-green-light">Log in</router-link>
            <span class="text-gray-400">or</span>
            <router-link :to="{ name: 'register' }"  class="inline-block rounded-lg px-3 py-1.5 text-sm font-medium leading-6 text-gray-900 border border-gray-900/10 transition hover:bg-primary-green hover:text-white hover:border-primary-green">Register</router-link>
          </div>
        </nav>
      </div>

      <!-- Mobile menu, show/hide based on menu open state. -->
      <div role="dialog" aria-modal="true">
        <div focus="true" class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
          <div class="flex h-9 items-center justify-between">
            <div class="flex">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
              </a>
            </div>
            <div class="flex">
              <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x-mark -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base leading-7 text-gray-900 hover:bg-gray-400/10">Product</a>

                <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base leading-7 text-gray-900 hover:bg-gray-400/10">Features</a>

                <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base leading-7 text-gray-900 hover:bg-gray-400/10">Marketplace</a>

                <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base leading-7 text-gray-900 hover:bg-gray-400/10">Company</a>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg py-2.5 px-3 text-base leading-6 text-gray-900 hover:bg-gray-400/10">Log in</a>
                <button class="bg-primary-green text-white rounded-xl h-12 w-20 mt-2 mb-2 transition hover:bg-primary-green-light">Go</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
