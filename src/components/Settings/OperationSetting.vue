<template>
  <q-card class="q-mt-xs">
    <q-card-section class="q-pa-sm">
      Operating Hour
    </q-card-section>
    <q-card-section class="q-pa-sm">
      <div class="q-col-gutter-sm row">
        <div class="col-2 q-pa-md">Start</div>
        <div class="col-4">
          <q-input
            filled
            dense
            v-model="setting.time_period.start_time"
            mask="time"
            :rules="['time']"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="setting.time_period.start_time" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="col q-pa-md">End</div>
        <div class="col-4">
          <q-input
            filled
            dense
            v-model="setting.time_period.end_time"
            mask="time"
            :rules="['time']"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="setting.time_period.end_time" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="q-pa-sm">
      Operating Hour
    </q-card-section>
    <q-card-section class="q-pa-sm">
      <div class="q-col-gutter-sm row">
        <div class="col checkbox">
          <input
            type="checkbox"
            id="checkbox_1"
            v-model="setting.day_period.sun"
          />
          <label for="checkbox_1" class="text-caption">SUN</label>
        </div>
        <div class="col checkbox">
          <input
            type="checkbox"
            id="checkbox_2"
            v-model="setting.day_period.mon"
          />
          <label for="checkbox_2" class="text-caption">MON</label>
        </div>
        <div class="col checkbox">
          <input
            type="checkbox"
            id="checkbox_3"
            v-model="setting.day_period.tue"
          />
          <label for="checkbox_3" class="text-caption">TUE</label>
        </div>
        <div class="col checkbox">
          <input
            type="checkbox"
            id="checkbox_4"
            v-model="setting.day_period.wed"
          />
          <label for="checkbox_4" class="text-caption">WED</label>
        </div>
        <div class="col checkbox">
          <input
            type="checkbox"
            id="checkbox_5"
            v-model="setting.day_period.thu"
          />
          <label for="checkbox_5" class="text-caption">THU</label>
        </div>
        <div class="col checkbox">
          <input
            type="checkbox"
            id="checkbox_6"
            v-model="setting.day_period.fri"
          />
          <label for="checkbox_6" class="text-caption">FRI</label>
        </div>
        <div class="col checkbox">
          <input
            type="checkbox"
            id="checkbox_7"
            v-model="setting.day_period.sat"
          />
          <label for="checkbox_7" class="text-caption">SAT</label>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: ["setting"]
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
