<template>
  <q-page class="q-pa-md">
    <div class="row justify-center text-h6 q-ma-md">AVAILABILITY SETTINGS</div>
    <div v-for="setting in OperationSettings" :key="setting.id">
      <operation-setting :setting="setting"></operation-setting>
    </div>
    <q-card class="q-mt-sm">
      <q-card-actions vertical align="center">
        <q-btn
          flat
          label="Add operating hour"
          class="full-width"
          v-on:click="addOperation"
        />
      </q-card-actions>
    </q-card>
    <div class="row justify-center q-mt-lg">
      <q-btn color="primary" rounded label="DONE" @click="nextSetting" />
    </div>
  </q-page>
</template>

<script>
import OperationSetting from "@/components/Settings/OperationSetting";

export default {
  name: "PageDashboard",
  components: { OperationSetting },
  data() {
    return {
      OperationSettings: [
        {
          id: 1,
          pageId: 1,
          time_period: {
            start_time: "09:00",
            end_time: "16:00"
          },
          day_period: {
            sun: false,
            mon: false,
            tue: true,
            wed: true,
            thu: true,
            fri: true,
            sat: false
          }
        }
      ]
    };
  },
  methods: {
    addOperation() {
      let newOperation = {
        id: 1111111,
        pageId: 111111,
        time_period: {
          start_time: "00:00",
          end_time: "00:00"
        },
        day_period: {
          sun: false,
          mon: false,
          tue: false,
          wed: false,
          thu: false,
          fri: false,
          sat: false
        }
      };

      this.OperationSettings.push(newOperation);
    },
    nextSetting() {
      this.$router.push({ path: "/setting/2" });
    }
  }
};
</script>
