<template>
  <ion-page>
    <ion-content > 
      <ion-toolbar class="mt-4 no-bg">
        <ion-buttons slot="start">
         <!-- <ion-back-button default-href="/tabs/home"></ion-back-button> -->
         <!-- <ion-icon aria-hidden="true" :icon="chevronBackOutline" class="icon"></ion-icon> -->
          <ion-icon aria-hidden="true" :icon="chevronBackOutline" class="icon"></ion-icon>
        </ion-buttons>   
          <ion-title >Detail</ion-title>
          <ion-buttons slot="end">
            <ion-icon aria-hidden="true" :icon="ellipsisHorizontalOutline" class="settings-icon"></ion-icon>
          </ion-buttons>
      </ion-toolbar>
      <ion-card>
        <div>
          <img class="banner" src="https://www.vinasconstructora.com/wp-content/uploads/2022/06/interior-and-exterior-design-of-pool-villa-which-features-living-area-300x200.jpg" />
          <ion-icon aria-hidden="true" :icon="heart" class="heart" slot="start"/>
        </div>
      </ion-card>
      <div class="features">
        <ion-chip>
          <div class="chip-content">
            <ion-icon aria-hidden="true" :icon="wifiOutline" class="calendar-icon" slot="start"/>
            <span>Free Wifi</span>
          </div>
        </ion-chip>
        <ion-chip>
          <div class="chip-content">
            <ion-icon aria-hidden="true" :icon="cafeOutline" class="calendar-icon" slot="start"/>
            Free Breakfast
          </div>
        </ion-chip>
        <ion-chip>
          <div class="chip-content">
            <ion-icon aria-hidden="true" :icon="star" class="star" slot="start"/>
            5.0
          </div>
        </ion-chip>
      </div>
      <div>
        <h2>The Aston Vill Hotel <span class="price">$200.7</span> <span class="night">/night</span></h2>
        <div class="location-container">
          <ion-icon aria-hidden="true" :icon="locationOutline" class="medium"/> 
          <p style="color:grey;">Alice Spring NT 0870, Australia</p>
        </div>
      </div>
      <div>
        <h2>Description</h2>
        <p class="night" style="margin-left: 16px; margin-right: 16px; ">
            Aston Hotel, Alice Springs NT 0870, Australia is a modern hotel.
            Elegant 5-star hotel overlooking the sea. Perfect for a romantic, charming 
            <a href="details">Read More...</a>
        </p>
      </div>
      <h2>Preview</h2>
        <ion-grid>
          <ion-row>
            <ion-col size="4">
              <img src="https://moblbaros.com/wp-content/uploads/2024/10/%D8%A7%D8%AA%D8%A7%D9%82-%D8%AE%D9%88%D8%A7%D8%A8-%D9%85%D8%B3%D8%AA%D8%B1-%D8%A8%D8%B1%D9%86%D8%AF-%D8%A8%D8%A7%D8%B1%D9%88%D8%B3.webp" alt="Preview 1"></img>
            </ion-col>
            <ion-col size="4">
              <img src="https://www.urbanconnect.ae/wp-content/uploads/2024/01/Hotel-reception.jpg" alt="Preview 2"></img>
            </ion-col>
            <ion-col size="4">
              <img src="https://dosudebki.online/wp-content/uploads/2024/06/4obl.jpg" alt="Preview 3"></img>
            </ion-col>
          </ion-row>
        </ion-grid>
    </ion-content>
    <ion-toolbar class="p-3">
      <button slot="end" class="btn btn-primary w-100" style="height:14vw">Booking Now</button>
    </ion-toolbar>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonGrid, IonRow, IonCol, IonChip, IonCard, IonBackButton, IonList, IonItem, IonThumbnail, IonLabel, IonButtons, IonButton, IonIcon, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { ellipsisHorizontalOutline, chevronBackOutline, locationOutline, wifiOutline, cafeOutline, star, heart } from 'ionicons/icons';

export default defineComponent({
  name: "DetailsScreen",
  components: { IonGrid, IonRow, IonCol, IonChip, IonCard, IonBackButton, IonList, IonItem, IonThumbnail, IonLabel, IonButtons, IonButton, IonIcon, IonPage, IonHeader, IonToolbar, IonTitle, IonContent },
  setup() {
    return {
      ellipsisHorizontalOutline,
      chevronBackOutline,
      locationOutline,
      wifiOutline,
      cafeOutline,
      heart,
      star
    };
  }
});
</script>

<style scoped>
.banner{
    width: 100vw;
    height: 34vh;
    object-position: center;
    border-radius: 12px;
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
.heart{
 position: absolute; 
  top: 10px; 
  right: 10px; 
  font-size: 24px;
  color: red;
  background: white; 
  border-radius: 50%; 
  padding: 6px; 
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2); 
  cursor: pointer; 
}
/* Toolbar styling */
.no-bg {
  --background: transparent; 
  --color: #000; 
}
/* Toolbar Icons */
.settings-icon {
  font-size: 25px;
  color: black;
  margin-right: 16px;
  border: 2px solid grey;
  border-radius: 9px;
  padding: 2px;
}
.price {
  color: blue;
  font-size: 16px;
  font-weight: bold;
  margin-left: 65px;
}
.night {
  color: grey; 
  font-size: 16px;
}
/**features */
.features {
  display: flex;
  justify-content:space-around;
  margin: 10px;
}
.calendar-icon {
  font-size: 14px;
  color: black;
  border: 2px solid grey;
  border-radius: 9px;
  padding: 2px;
 
}
h2 {
  font-size: 20px;
  margin-left: 16px; 
}
.star{
  color: gold; 
}
.chip-content {
  display: flex;
  align-items: center; 
  gap: 8px; 
}
/**mid */
.medium {
  font-size: 20px;
  color: blue;
  margin-top: -15px;
}
.location-container {
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-size: 15px;
}
/* Preview Images */
ion-grid {
  padding: 0 16px;
}
img {
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 12px;
  overflow: hidden; 
}
</style>