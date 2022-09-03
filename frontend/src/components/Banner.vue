<template>
  <div id="banner" class="w-10/12 h-[350px] bg-[#CBEBE6] rounded-2xl relative">
    <div class="banner-icon absolute h-full top-0 right-20 z-20">
      <img
        src="../assets/Morning-Routine.png"
        class="h-full w-auto"
        alt="banner-icon"
      />
    </div>
    <div class="banner-background absolute h-full z-10 top-0 right-0">
      <img
        src="../assets/Banner-Background.png"
        class="h-full w-auto"
        alt="banner-background"
      />
    </div>
    <div class="px-[64px] py-[40px] flex flex-col justify-between h-full">
      <h1 class="font-bold text-[30px]">Good Morning, <br />Samantha!</h1>
      <p class="font-medium">Have a good day!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style></style>
