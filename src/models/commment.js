export default class Comment {
  /**
   * 评论模型
   * @param {string} id 标识符
   * @param {string} username 用户名
   * @param {string} userImg 用户头像
   * @param {Date} createTime 创建时间
   * @param {string} content 内容
   */
  constructor (id, username, userImg, createTime, content) {
    this.id = id
    this.username = username
    this.userImg = userImg
    this.createTime = createTime
    this.content = content
  }
}
