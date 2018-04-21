<template>
    <div class="photo-wrapper">
        <img class="photo" :src="photo.img">
        <div>{{photo.name}}</div>
    </div>
</template>
<script>
import Photo from '../models/photo.js'
export default {
  props: {
    photo: {
      type: Photo,
      required: true
    }
  },
  data() {
    return {
    }
  }
}
</script>
<style>
.photo-wrapper {
  width: 20%;
  padding: 0 20px 20px 0;
}
.photo {
  width: 100%;
}
</style>
