<template>
  <ion-page>
    <ion-content>
      <div class="form-text mt-4 my-schedule-title">Current location</div>
        <div class="location-container">
          <ion-icon aria-hidden="true" :icon="locationOutline" class="medium"/> 
          <p style="color:black;">Wallace, Australia</p>
          <div class="notification-icon-wrapper">
            <ion-icon aria-hidden="true" :icon="notificationsOutline" class="small" />
            <div class="notification-dot"></div>
          </div>
        </div>

        <div class="tabs my-schedule-title" >
          <ion-segment value="hotel">
            <ion-segment-button value="hotel" >
              <span><ion-icon aria-hidden="true" :icon="businessOutline" class="hotel"></ion-icon>
              Hotel</span>
            </ion-segment-button>
            <ion-segment-button value="homestay">
              <span><ion-icon aria-hidden="true" :icon="homeSharp" class="hotel"></ion-icon>
              Homestay</span>
            </ion-segment-button>
            <ion-segment-button value="apart">
              <span><ion-icon aria-hidden="true" :icon="bedOutline" class="hotel"></ion-icon>
               Apart</span>
            </ion-segment-button>
          </ion-segment>
        </div>
        <div class="mt-3">
          <p class="my-schedule-title"> Near Location</p>
          <p class="small2">See all</p>
        </div>
        <div class="swiper-container">
          <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper">
            <swiper-slide>
              <ion-card @click="goToDetails" class="mt-1">
                <div>
                  <img class="banner" src="https://www.vinasconstructora.com/wp-content/uploads/2022/06/interior-and-exterior-design-of-pool-villa-which-features-living-area-300x200.jpg" />
                  <ion-icon aria-hidden="true" :icon="heart" class="heart" slot="start"/>
                  </div>
                    <ion-card-header>
                      <ion-card-subtitle>Alice Spring NT 0870, Australia</ion-card-subtitle>
                        <ion-card-title style="font-size: 20px;">
                          The Aston Vill Hotel
                          <span class="rate"><ion-icon aria-hidden="true" :icon="star" class="star"/> 5.0 </span></ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                      <h4><span class="price">$200.7</span> <span class="night">/night</span></h4>
                    </ion-card-content>
              </ion-card>
            </swiper-slide>
            <swiper-slide>
              <ion-card class="mt-1">
                <div>
                  <img class="banner" src="https://assets-news.housing.com/news/wp-content/uploads/2021/12/16005019/Tropical-House-Designs-shutterstock_1354913210-1200x700-compressed.jpg" />
                  <ion-icon aria-hidden="true" :icon="heart" class="heart" slot="start"/>
                </div>
                <ion-card-header>
                  <ion-card-subtitle>Northern</ion-card-subtitle>
                  <ion-card-title style="font-size: 20px;">
                    Golden Palace Hotel
                    <span class="rate"><ion-icon aria-hidden="true" :icon="star" class="star"/> 5.0 </span>
                  </ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <h4><span class="price">$175.9</span> <span class="night">/night</span></h4>
                </ion-card-content>
              </ion-card>
            </swiper-slide>
          </swiper> 
        </div>
        <div style="margin-top: -20px;">
          <p class="my-schedule-title"> Popular Hotel</p>
          <p class="small2">See all</p>
        </div>
        <ion-card>
          <ion-item>
            <ion-thumbnail slot="start">
              <img src="https://img.freepik.com/premium-photo/umbrella-chair-around-outdoor-swimming-pool-hotel-resort-with-sea-ocean-view-travel-vacation_74190-14746.jpg?w=826"></img>
            </ion-thumbnail>
            <ion-label>
              <h2>
                The Aston Vill Hotel
                <span class="rate"><ion-icon aria-hidden="true" :icon="star" class="star"/> 5.0 </span>
              </h2>
              <p>Wilora NT 0872, Australia</p>
              <h4><span class="price">$200.7</span> <span class="night">/night</span></h4>
            </ion-label>
          </ion-item>
        </ion-card>
        <ion-card >
          <ion-item>
            <ion-thumbnail slot="start">
              <img src="https://images.trvl-media.com/lodging/18000000/17380000/17373800/17373710/88c7311e.jpg?impolicy=resizecrop&rw=1200&ra=fit"></img>
            </ion-thumbnail>
            <ion-label>
              <h2>
                Golden Palace Hotel
                <span class="rate"><ion-icon aria-hidden="true" :icon="star" class="star"/> 5.0 </span>
              </h2>
              <p>Northern</p>
              <h4><span class="price">$175.9</span> <span class="night">/night</span></h4>
            </ion-label>
          </ion-item>
        </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonIcon, IonThumbnail, IonLabel, IonItem, IonCard, IonCardHeader, IonCardTitle, 
         IonCardSubtitle, IonCardContent, IonSegmentButton, IonSegment, IonToolbar, IonTitle, IonHeader, IonPage, IonContent } from '@ionic/vue';
import { locationOutline, notificationsOutline, homeSharp, bedOutline, businessOutline, star, heart } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default defineComponent({
  name: "HomeScreen",
  components: { IonIcon, IonThumbnail, IonLabel, IonItem, Swiper, SwiperSlide, IonCard, IonCardHeader, IonCardTitle,
                IonCardSubtitle, IonCardContent, IonSegmentButton, IonSegment, IonToolbar, IonTitle, IonHeader, IonPage, IonContent
  },
 setup() {
    return {
      locationOutline, 
      notificationsOutline,
      businessOutline,
      bedOutline,
      homeSharp,
      heart,
      star
    };
  },
  data() {
    return {
      swiper: {} as any
    };
  },
   methods: {
    async goToDetails() {
      this.$router.push("/details");
    },
    async onSwiper(event: any) {
      this.swiper = event;
    }
  }
});
</script>

<style scoped>
.location-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  font-size: 15px;
  color: gray;
}
/*star*/
.star{
  color: gold; 
}
.rate{
  color: black; 
  font-size: 15px; 
  float:right;
}
/* Tabs Styling */
.tabs ion-segment-button {
  --indicator-color: transparent;
  --background: white;
  --background-checked: blue; 
  --color-checked: white;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 0;
}
.hotel{
  font-size: 20px;
  --indicator-color: transparent;
  --background: white;
  --background-checked: blue; 
  --color-checked: white;
  margin-top: 2px;
  margin-right: 2px;
}
.tabs {
  display: flex; 
  margin-top: 8px;
}
.medium {
  font-size: 20px;
  color: blue;
  margin-top: -15px;
}
.small {
  font-size: 25px;
  color: black;
  margin-left: 160px;
  margin-top: -27px;
  float: right;
  border: 2px solid grey;
  border-radius: 9px;
  padding: 2px;
}
.my-schedule-title {
  margin-left: 16px; 
  margin-right: 16px;
}
.notification-icon-wrapper {
  position: relative;
  display: inline-block;
}
.notification-dot {
  position: absolute;
  top: -22px;
  right: 6px;
  width: 10px;
  height: 9px;
  background-color: rgb(255, 38, 0);
  border-radius: 90%;
}
/*near location*/
.banner{
  width: 100vw;
  height: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
}
.swiper-container {
  padding: 16px;
  margin-top: -10px;
}
.card-header {
  display: flex;
  align-items: left;
}
.heart{
 position: absolute; 
  top: 10px; 
  right: 10px; 
  font-size: 23px;
  color: red;
  background: white; 
  border-radius: 50%; 
  padding: 6px; 
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2); 
}
/*popular hotel*/
.small2{
  color: blue;
  margin-top: -42px;
  float: left;
  font-size: 15px;
  margin-left: 300px;
}
.ion-item {
  margin: 8px 16px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.ion-thumbnail {
  border-radius: 8px;
  overflow: hidden;
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