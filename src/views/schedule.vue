<template>
  <ion-page>
    <ion-content > 
      <ion-toolbar class="mt-4 no-bg">
        <ion-icon aria-hidden="true" :icon="chevronBackOutline" class="icon"></ion-icon>
        <ion-title >Schedule</ion-title>
          <ion-buttons slot="end">
            <ion-icon aria-hidden="true" :icon="settingsOutline" class="settings-icon"></ion-icon>
          </ion-buttons>
      </ion-toolbar>
      <div class="calendar-container mt-4">
        <ion-datetime presentation="date" value="2024-12-19"></ion-datetime>
      </div>
      <div class="mt-4 ">
        <p class="my-schedule-title"> My Schedule</p>
        <p class="small2">See all</p>
      </div>
      <ion-list class="mt-4">
        <ion-card style="margin-top: -2px;">
          <ion-item routerLink="">
            <ion-thumbnail slot="start">
              <img src="https://www.vinasconstructora.com/wp-content/uploads/2022/06/interior-and-exterior-design-of-pool-villa-which-features-living-area-300x200.jpg"></img>
            </ion-thumbnail>
            <ion-label>
              <h2>The Aston Vill Hotel</h2>
              <p>
                <ion-icon aria-hidden="true" :icon="calendarOutline" class="calendar-icon" />
                19 March, 2024
              </p>
              <h4><span class="price">$200.7</span> <span class="night">/night</span></h4>
            </ion-label>
          </ion-item>
        </ion-card>
        <ion-card>
          <ion-item routerLink="">
            <ion-thumbnail slot="start">
              <img src="https://assets-news.housing.com/news/wp-content/uploads/2021/12/16005019/Tropical-House-Designs-shutterstock_1354913210-1200x700-compressed.jpg"></img>
            </ion-thumbnail>
            <ion-label>
              <h2>Golden Palace Hotel</h2>
              <p>
                <ion-icon aria-hidden="true" :icon="calendarOutline" class="calendar-icon" />
                25 March, 2024
              </p>
              <h4><span class="price">$175.9</span> <span class="night">/night</span></h4>
            </ion-label>
          </ion-item>
        </ion-card>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonCard, IonDatetime, IonBackButton, IonList, IonItem, IonThumbnail, IonLabel, IonButtons, IonButton, IonIcon, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { settingsOutline, calendarOutline, chevronBackOutline } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default defineComponent({
  name: "ScheduleScreen",
  components: { IonCard, IonDatetime, Swiper, SwiperSlide, IonBackButton, IonList, IonItem, IonThumbnail, IonLabel, IonButtons, IonButton, IonIcon, IonPage, IonHeader, IonToolbar, IonTitle, IonContent },
 setup() {
    return {
      settingsOutline,
      calendarOutline,
      chevronBackOutline
    };
  }
});
</script>

<style scoped>
.small {
  font-size: 25px;
  color: black;
  margin-right: 20px;
  margin-top: -10px;
  float: right;
}
.my-schedule-title {
  margin-left: 16px; 
}
/* Calendar */
.calendar-container {
  padding: 0 16px;
}
/* Toolbar */
.no-bg {
  --background: transparent; 
  --color: #000; 
}
/* Toolbar Icons */
.settings-icon {
  font-size: 26px;
  color: black;
  margin-right: 16px;
  border: 2px solid grey;
  border-radius: 9px;
  padding: 2px;
}
.icon{
  float:left;
  font-size: 26px;
  color: black;
  margin-left: 16px;
  border: 2px solid grey;
  border-radius: 9px;
  padding: 2px;
}
/* Calendar styling */
.ion-datetime {
  margin: 16px;
  --color: #4a90e2;
  --highlight-color: #4a90e2;
}
/* My Schedule list items */
.ion-item {
  margin: 8px 16px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.ion-thumbnail {
  border-radius: 8px;
  overflow: hidden;
}
.small2{
  color: blue;
  margin-top: -45px;
  float: left;
  font-size: 15px;
  margin-left: 300px;
}
h2 {
  font-size: 15px;
}
.calendar-icon {
  font-size: 18px;
  color: gray;
  margin-left: 8px;
  margin: 0;
}
.price {
  color: blue;
  font-size: 15px;
  font-weight: bold;
}
.night {
  color: grey; 
  font-size: 15px;
}
</style>