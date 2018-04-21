<template>
    <div class="photos-wrapper">
        <PhotoBlock v-for="photo in photos" :key="photo.id" :photo="photo">
        </PhotoBlock>
    </div>
</template>
<style>
.photos-wrapper {
  display: -webkit-flex;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 0 0 20px;
  width: 100%;
  margin: 0 auto;
}
</style>
<script>
import PhotoBlock from '../components/photoblock'
import Photo from '../models/photo.js'
export default {
  components: {
    PhotoBlock
  },
  mounted: function() {
    window.setInterval(() => {
      this.photos.push(
        new Photo(
          '1',
          '哈哈哈',
          require('../assets/test.jpg'),
          100,
          new Date(),
          '籍籍无名',
          ''
        )
      )
    }, 1000)
  },
  data() {
    return {
      photos: []
    }
  }
}
</script>
