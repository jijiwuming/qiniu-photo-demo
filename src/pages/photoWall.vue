<template>
  <div class="photos-wrapper">
    <PhotoBlock v-for="photo in photos" :key="photo.id" :photo="photo" :showqName="showqName">
    </PhotoBlock>
    <el-button class="operation-button" icon="el-icon-plus" circle @click="uploadImg"></el-button>
    <UploadList class="upload-img-list" :list="list" v-show="showUploadList"></UploadList>
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
.operation-button {
  position: fixed;
  right: 10px;
  bottom: 80px;
  background-color: rgb(85, 203, 207)!important;
  color: white!important;
}
.operation-button:hover {
  background-color: rgb(118, 231, 235)!important;
}
.upload-img-list {
  position: fixed;
  width: 80%;
  height: 60%;
  margin-bottom: 60px;
}
</style>
<script>
import PhotoBlock from '../components/photoblock'
import UploadList from '../components/uploadList'
import UploadPhoto from '../models/uploadphoto.js'
import Photo from '../models/photo.js'
export default {
  components: {
    PhotoBlock,
    UploadList
  },
  mounted: function() {
  },
  data() {
    return {
      photos: [],
      showqName: false,
      showUploadList: false,
      list: [
        new UploadPhoto('1', 'dscaaa.jpg', require('../assets/test.jpg'), 10024, 70),
        new UploadPhoto('2', 'dscaaa.jpg', require('../assets/test.jpg'), 10024, 70),
        new UploadPhoto('3', 'dscaaa.jpg', require('../assets/test.jpg'), 10024, 70)
      ]
    }
  },
  methods: {
    uploadImg: function() {
      this.showUploadList = true
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
    }
  }
}
</script>
