<template>
  <div>
    <a href="#" @click.prevent="fbConnect">เข้าใช้งานผ่าน Facebook</a>
  </div>
</template>

<script>
import { config } from "@/config";

export default {
  mounted() {
    // console.log(process.env.VUE_APP_URL);
  },
  methods: {
    popupCenter(url, title, w, h) {
      const dualScreenLeft =
        window.screenLeft != undefined ? window.screenLeft : window.screenX;
      const dualScreenTop =
        window.screenTop != undefined ? window.screenTop : window.screenY;

      const width = window.innerWidth
        ? window.innerWidth
        : document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : screen.width;
      const height = window.innerHeight
        ? window.innerHeight
        : document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : screen.height;

      const systemZoom = width / window.screen.availWidth;

      const left = (width - w) / 2 / systemZoom + dualScreenLeft;
      const top = (height - h) / 2 / systemZoom + dualScreenTop;

      const newWindow = window.open(
        url,
        title,
        `scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`
      );

      if (window.focus) newWindow.focus();
    },

    fbConnect() {
      this.popupCenter(
        `https://www.facebook.com/v4.0/dialog/oauth?client_id=${config.fb.appId}&redirect_uri=${config.fb.redirectUri}`,
        "Continue with Facebook",
        "600",
        "780"
      );
    }
  }
};
window.addEventListener(
  "message",
  e => {
    if (e.origin !== config.appUrl) return;

    const token = localStorage.getItem("token");
    if (e.data !== token) return;
    window.location.href = config.appUrl;
  },
  false
);
</script>

<style></style>

