<template>
  <div class="p-[2rem] w-full flex justify-between">
    <div>
      <h1 class="text-[30px] font-bold">{{ currentRouteName }}</h1>
    </div>
    <div class="flex items-center gap-40 cursor-pointer">
      <div
        class="flex gap-10 bg-[#DFE5F0] py-[0.8rem] px-[1.2rem] rounded-full items-center"
      >
        <p>This Month</p>
        <font-awesome-icon icon="fa-solid fa-angle-down" />
      </div>
      <div
        class="w-14 h-14 rounded-full bg-slate-300 overflow-hidden cursor-pointer"
      >
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="profile"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style></style>
