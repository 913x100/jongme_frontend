<template>
  <q-page class="q-pa-md">
    <div class="row justify-center text-h6 q-ma-md">BOOK RULE</div>

    <q-card class="q-mt-xs">
      <q-card-section class="q-pa-sm">
        <div class="q-col-gutter-sm row items-center">
          <div class="col">User must book in advance</div>
          <div class="col-2">
            <q-input dense v-model="text" type="number" />
          </div>
          <div class="col-auto">
            <q-select dense v-model="model" :options="options" />
          </div>
        </div>
      </q-card-section>
      <q-card-section class="q-pa-sm">
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-body">Automatic Confirmation</div>
          </div>
          <div class="col-auto">
            <q-toggle v-model="notif2" />
          </div>
        </div>
      </q-card-section>
      <q-card-section class="q-pa-sm">
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-body">Asking for Capcha if the account booked more than 5 in day</div>
          </div>
          <div class="col-auto">
            <q-toggle v-model="notif2" />
          </div>
        </div>
      </q-card-section>
      <q-card-actions vertical align="center">
        <q-btn flat label="Delete" />
      </q-card-actions>
    </q-card>
    <div class="row justify-center text-h6 q-ma-md">OPTIONAL FLOW</div>

    <q-card class="q-mt-sm">
      <q-card-section class="q-pa-sm">
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-body">Asking for phone number</div>
          </div>
          <div class="col-auto">
            <q-toggle v-model="notif2" />
          </div>
        </div>
      </q-card-section>
      <q-card-section class="q-pa-sm">
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-body">Asking for real name</div>
          </div>
          <div class="col-auto">
            <q-toggle v-model="notif2" />
          </div>
        </div>
      </q-card-section>
    </q-card>
    <div class="row justify-center q-mt-lg">
      <q-btn color="primary" rounded label="DONE" @click="nextSetting" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageDashboard",
  data() {
    return {
      options: ["day", "hr", "min"],
      model: "day"
    };
  },
  methods: {
    nextSetting() {
      this.$router.push({ path: "/dashboard" });
    }
  }
};
</script>
