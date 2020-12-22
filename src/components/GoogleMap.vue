<template>
  <div>
   <!-- <iframe
      width="600px"
      height="450px"
      frameborder="0" style="border:0"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBd8P3I55UMnYB0Fu21Qx2xT-g2QiPLpNs&q=41.211785, 69.223903&zoom=16" allowfullscreen>
    </iframe> -->
    <div
      style="max-width: 800px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between"
    >
      <div>
        <h1>Your coordinates:</h1>
        <p>
          {{ myCoordinates.lat }} Latitude, {{ myCoordinates.lng }} Longitude
        </p>
      </div>
    </div>
    <GmapMap
      :center="{ lat: myCoordinates.lat, lng: myCoordinates.lng }"
      :zoom="15"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
    <GmapMarker
      :position="{ lat: myCoordinates.lat, lng: myCoordinates.lng }"
      :clickable="true"
      :draggable="true"
    />
    <GmapCircle
        :ref="circleRef" 
        :center="{ lat: myCoordinates.lat, lng: myCoordinates.lng }"
        :radius="500"
        :options="{fillColor:'#00ff66',fillOpacity:0.2, strokeColor: '#00897b', strokeOpacity: 0.8}"
      ></GmapCircle>
    </GmapMap>
  </div>
</template>


<script>

export default {
  name: "GoogleMap",
  data() {
    return {
      myCoordinates: {
        lat: 0,
        lng: 0,
      },
    };
  },
  computed:{},
  created() {
    //get user's coordinates from browser request
    this.$getLocation({})
      .then((coordinates) => {
        this.myCoordinates = coordinates;
      })
      .catch((error) => alert(error));
  },
  mounted(){
    this.$refs.circleRef.$circlePromise.then(() => {
        const {$circleObject} = this.$refs.circleRef; //get google.maps.Circle object
        const map = $circleObject.getMap();
        map.fitBounds($circleObject.getBounds());
    })
  },
  methods: {},
};
</script>
