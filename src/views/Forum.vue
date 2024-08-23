<template>
  <div class="forum main">
    <div class="desktopchat">
      <DesktopChat />
    </div>
    <div class="mobilechat">
      <MobileChat />
    </div>
  </div>
</template>
<script>
import DesktopChat from "@/components/DesktopChat.vue";
import MobileChat from "@/components/MobileChat.vue";
export default {
  components: { DesktopChat, MobileChat },
};
</script>
<style scoped></style>
l
