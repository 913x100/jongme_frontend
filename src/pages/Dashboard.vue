<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-card flat>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="approve" label="Approve" />
          <q-tab name="wating" label="Wating" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel flat name="approve">
            <q-card class="my-card row">
              <div class="row">
                <div class="col-auto">
                  <q-card-section class="q-pa-xs">
                    <img src="https://cdn.quasar.dev/img/mountains.jpg" width="120px" />
                  </q-card-section>
                </div>
                <div class="col">
                  <q-card-section class="q-pa-xs">
                    <div class="row items-center no-wrap">
                      <div class="col-11">
                        <div class="text-body">Service Type</div>
                      </div>
                      <div class="col-auto">
                        <q-chip dense square color="green" class="text-white">Approve</q-chip>
                      </div>
                    </div>
                  </q-card-section>
                  <q-card-section class="q-pa-xs">
                    <div class="text-caption">End-User name</div>
                  </q-card-section>
                </div>
              </div>
            </q-card>
          </q-tab-panel>

          <q-tab-panel name="waiting">
            <q-card class="my-card row">
              <div class="row">
                <div class="col-auto">
                  <q-card-section class="q-pa-xs">
                    <img src="https://cdn.quasar.dev/img/mountains.jpg" width="120px" />
                  </q-card-section>
                </div>
                <div class="col">
                  <q-card-section class="q-pa-xs">
                    <div class="row items-center no-wrap">
                      <div class="col">
                        <div class="text-body">Service Type</div>
                      </div>
                      <div class="col-auto">
                        <q-chip dense square color="green" class="text-white">Approve</q-chip>
                      </div>
                    </div>
                  </q-card-section>
                  <q-card-section class="q-pa-xs">
                    <div class="text-caption">End-User name</div>
                  </q-card-section>
                </div>
              </div>
            </q-card>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageDashboard",
  data() {
    return {
      tab: "approve"
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
