<template>
  <ion-page >
    <ion-tabs >
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon aria-hidden="true" :icon="homeOutline"/>
          <ion-label v-if="$route.path === '/tabs/home'">Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="schedule" href="/tabs/schedule">
          <ion-icon aria-hidden="true" :icon="calendarOutline" />
          <ion-label v-if="$route.path === '/tabs/schedule'">Schedule</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="booking" href="/tabs/booking">
          <ion-icon aria-hidden="true" :icon="bookmarkOutline" />
          <ion-label v-if="$route.path === '/tabs/booking'">Booking</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="personal" href="/tabs/personal" >
          <ion-icon aria-hidden="true" :icon="personOutline" />
          <ion-label v-if="$route.path === '/tabs/personal'">Personal</ion-label>
        </ion-tab-button >
      </ion-tab-bar >
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { bookmarkOutline, calendarOutline, homeOutline, personOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Footer",
  components: { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      bookmarkOutline, homeOutline, calendarOutline, personOutline,
    }
  }
});
</script>
