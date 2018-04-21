export default class uploadphoto {
  /**
   * 上传图片模型
   * @param {string} id 标识符
   * @param {string} name 图片名
   * @param {string} img 图片地址
   * @param {number} size 大小
   * @param {number} process 进度
   */
  constructor(id, name, img, size, process) {
    this.id = id
    this.name = name
    this.img = img
    this.size = size
    this.process = process
  }
}
