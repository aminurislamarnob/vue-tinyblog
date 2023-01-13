<template>
  <div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-100 min-h-[calc(100vh-10.5rem)]">
    <div class="w-full max-w-md space-y-8 bg-white px-8 py-10 rounded-lg">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600" alt="Your Company">
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <div>
          <label for="email-address">Email address <span class="text-red">*</span></label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary-green focus:outline-none focus:ring-primary-green" placeholder="Your email address">
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-primary-green focus:outline-none focus:ring-primary-green" placeholder="Enter password">
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
          </div>
        </div>
        <div>
          <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-primary-green py-3 px-4 font-medium text-white transition hover:bg-primary-green-light focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Sign in
          </button>
          <span class="block text-center my-2 text-gray-500 text-sm">Or</span>
          <button type="submit" class="group relative flex w-full justify-center rounded-md border border-primary-green bg-white py-3 px-4 font-medium text-primary-green transition focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 hover:bg-primary-green hover:text-white">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
