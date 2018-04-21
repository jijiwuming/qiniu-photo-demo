export default class Photo {
  /**
   * 照片模型
   * @param {string} id 标识符
   * @param {string} name 照片名
   * @param {string} img 照片地址
   * @param {number} love 喜爱数
   * @param {Date} createTime 创建时间
   * @param {string} authorName 作者名
   * @param {string} authorImg 作者头像
   */
  constructor (id, name, img, love, createTime, authorName, authorImg) {
    this.id = id
    this.name = name
    this.img = img
    this.love = love
    this.createTime = createTime
    this.authorName = authorName
    this.authorImg = authorImg
  }
}
