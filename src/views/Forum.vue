<template>
      <div class="desktopchat">
        <DesktopChat />
      </div>
      <div class="mobilechat">
        <MobileChat />
      </div>
</template>
<script>
import DesktopChat from '@/components/DesktopChat.vue';
import MobileChat from '@/components/MobileChat.vue';  
export default {
    components: { DesktopChat, MobileChat },
  };
</script>
  