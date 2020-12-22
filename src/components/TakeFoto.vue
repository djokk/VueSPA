<template>
  <div class="ml-16 mt-16">
    <video ref="video" @canplay="initCanvas" style="display: none;">Stream</video>
    <canvas ref="canvas" />
    <!-- <v-btn @click="takePicture">Take</v-btn> -->
  </div>
</template>

<script>
export default {
  name: "TakeFoto",
  data() {
    return {
      video: null,
      canvas: null,
    };
  },
  mounted(){
    this.canvas = this.$refs.canvas
    this.video = this.$refs.video
    this.startCapture()
  },
  methods: {
    startCapture(){
      navigator.mediaDevices.getUserMedia({video: true, audio: false}).then(stream => {
        this.video.srcObject = stream
        this.video.play()
      }).catch(error => {
        console.log(error)
      })
      setTimeout(()=>{
        this.takePicture();
      },2000);
    },
    takePicture(){
      let context = this.canvas.getContext('2d')
      context.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight)
      // this.$emit('picture-taken', this.canvas.toDataURL('image/png'))
      const taskFoto = {
        url: this.canvas.toDataURL('image/png')
      }
      // this.$store.dispatch('SETFOTO', this.canvas.toDataURL('image/png'));
      this.$store.dispatch('SETFOTO', taskFoto);
      this.$emit('taken', true)
      this.stopCapture()
    },
    initCanvas(){
      this.canvas.setAttribute('width', this.video.videoWidth)
      this.canvas.setAttribute('height', this.video.videoHeight)
    },
    stopCapture() {
      let tracks = this.video.srcObject.getTracks();

      tracks.forEach(track => track.stop());
      this.video.srcObject = null;
    }
  },
  computed: {
  }
};
</script>