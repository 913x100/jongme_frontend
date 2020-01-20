<template>
  <div class="q-pa-md">
    <div class="column items-center text-h5">SELECT PAGE</div>
    <div class="column items-center text-subtitle1">
      select page for managing with Jongme
    </div>
    <div class="q-col-gutter-sm q-mt-md q-pa-md column">
      <div v-for="page in pages" :key="page.page_id" class="col">
        <router-link :to="{ path: '/setting/1' }">
          <q-btn
            outline
            rounded
            color="primary"
            :label="page.page_name"
            v-on:click="setPage(page)"
            class="full-width"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageSelect",
  data() {
    return {
      pages: []
    };
  },
  mounted() {
    this.getPages();
  },
  computed: {
    // mix the getters into computed with object spread operator
  },
  methods: {
    getPages() {
      this.$store.dispatch("pages").then(res => {
        this.pages = res.data.pages;
      });

      return this;
    },
    setPage(page) {
      console.log(page);
      this.$store.commit("setPage", page);
    }
  }
};
</script>
