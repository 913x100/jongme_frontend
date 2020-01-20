<template>
  <q-page class="q-pa-md">
    <div class="row justify-center text-h6 q-ma-md">SERVICE SETTINGS</div>
    <q-card class="q-mt-xs">
      <q-card-section class="q-pa-sm">
        <div class="row items-center">
          <div class="col">
            <div>Service type</div>
          </div>
          <div class="col-auto">
            <q-toggle v-model="notif1" />
          </div>
        </div>
      </q-card-section>

      <div v-if="notif1">
        <q-separator />
        <q-card-section v-if="notif1" class="q-pa-sm">
          <div class="row">
            <q-input
              filled
              v-model="text"
              placeholder="Enter service type"
              class="col"
            />
          </div>
        </q-card-section>
        <q-card-section v-if="notif1" class="q-pa-sm">
          <div class="row">Service type picture</div>
        </q-card-section>
        <q-card-section v-if="notif1" class="q-pa-sm">
          <div class="column items-center">
            <q-uploader
              label="Upload your picture"
              auto-upload
              url="http://localhost:4444/upload"
              class="vertical-middle"
            />
          </div>
        </q-card-section>
        <q-card-section class="q-pa-sm">
          <div class="row">
            <div class="col">Start point</div>
            <div class="col">Slot size</div>
          </div>
          <div class="row">
            <div class="col row">
              <div class="col checkbox">
                <input type="checkbox" id="checkbox_4" />
                <label for="checkbox_4" class="text-caption">:00</label>
              </div>
              <div class="col checkbox">
                <input type="checkbox" id="checkbox_4" />
                <label for="checkbox_4" class="text-caption">:15</label>
              </div>
              <div class="col checkbox">
                <input type="checkbox" id="checkbox_4" />
                <label for="checkbox_4" class="text-caption">:30</label>
              </div>
              <div class="col checkbox">
                <input type="checkbox" id="checkbox_4" />
                <label for="checkbox_4" class="text-caption">:45</label>
              </div>
            </div>
            <div class="col">
              <div class="q-col-gutter-sm row">
                <div class="col">
                  <q-input dense v-model="text" type="number" />
                </div>
                <div class="col">
                  <q-select dense v-model="model" :options="options" />
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
        <q-card-section class="q-pa-sm">
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-body">Allow user to book more than 1 slot</div>
            </div>
            <div class="col-auto">
              <q-toggle v-model="notif2" />
            </div>
          </div>
        </q-card-section>
        <q-card-section class="q-pa-sm">
          <div class="row">Amount ( unit )</div>
          <div class="q-col-gutter-sm row">
            <div class="col-5">
              <q-input dense v-model="text" type="text" />
            </div>
            <div class="col">
              <q-btn
                rounded=""
                color="primary"
                size="sm"
                label="Temporary mute per unit"
                @click="onClick"
                class="full-width full-height"
              />
            </div>
          </div>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-body">Allow user to book more than 1 unit</div>
            </div>
            <div class="col-auto">
              <q-toggle v-model="notif2" />
            </div>
          </div>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-body">Service Operating Hour</div>
            </div>
            <div class="col-auto">
              <q-toggle v-model="notif2" />
            </div>
          </div>
        </q-card-section>
        <q-card-actions vertical align="center">
          <q-btn flat label="Delete" />
        </q-card-actions>
      </div>
    </q-card>

    <q-card class="q-mt-sm">
      <q-card-actions vertical align="center">
        <q-btn flat label="Add service type" class="full-width" />
      </q-card-actions>
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
      notif1: true,
      notif2: false,
      text: "",
      options: ["Hr", "Min"],
      model: "Hr"
    };
  },
  methods: {
    nextSetting() {
      this.$router.push({ path: "/setting/3" });
    }
  }
};
</script>

<style lang="scss" scoped>
$primary: #027be3 !default;
$grey: #9e9e9e !default;
.checkbox {
  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    // left: -9999px;

    &:checked + label {
      border-color: $primary;
      color: $primary;
    }
  }
  label {
    position: relative;
    display: inline-block;

    min-width: 30px;
    max-width: 90px;
    display: inline-block;
    cursor: pointer;
    color: $grey;
    border: 2px solid $grey;
    border-radius: 100%;
    overflow: none;
    text-align: center;
    padding: 0;

    &::before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      padding-top: 100%;
    }
  }
}
</style>
