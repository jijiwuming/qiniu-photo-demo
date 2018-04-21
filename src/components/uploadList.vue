<template>
    <div class="upload-list-wraper">
        <el-table :data="list" style="width: 100%">
            <el-table-column type="index" width="50">
            </el-table-column>
            <el-table-column label="名称" class="img-summary-info">
                <template slot-scope="scope">
                    <div class="img-summary-info-content">
                    <img class="summary-info-img" :src="scope.row.img" />
                    <span class="summary-info-text" style="margin-left: 10px">{{ scope.row.name }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="size" label="大小" width="100">
            </el-table-column>
            <el-table-column label="进度">
                <template slot-scope="scope">
                    <el-progress :percentage="scope.row.process"></el-progress>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<style>
.upload-list-wraper {
    border: 1px solid gray;
}
.img-summary-info {
    width: 30%;
}
.summary-info-img {
    width: 40%;
}
.summary-info-text {
    width: 55%;
    margin-left: 5%;
}
.img-summary-info-content {
    height: 5%;
}
</style>
<script>
import UploadPhoto from '../models/uploadphoto.js'
export default {
  props: {
    list: {
      type: [UploadPhoto],
      required: true
    }
  }
}
</script>
