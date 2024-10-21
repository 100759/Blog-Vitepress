// 导出一个对象，包含write、deploy和image三个属性
module.exports = {
  // write属性，用于配置写入平台
  write: {
    platform: 'notion', // 平台为notion
    notion: {
      token: process.env.NOTION_TOKEN, // notion的token
      databaseId: process.env.NOTION_DATABASE_ID, // notion的databaseId
      filter: true, // 是否过滤，true表示过滤，false表示不过滤
      catalog: true,
      imgToBase64: true,
    },
  },
  // deploy属性，用于配置部署平台
  deploy: {
    platform: 'local', // 平台为本地
    local: {
      outputDir: './posts', // 输出目录
      filename: 'title', // 文件名
      format: 'markdown', // 格式为markdown
      catalog: true,
      frontMatter: {
        enable: true, // 是否启用frontMatter
        exclude: ['cover', 'status'], // 排除的属性
      }
    }
  },
  // image属性，用于配置图片平台
  image: {
    enable: false, // 是否启用图片平台，false表示不启用
    platform: '', // 平台为cos
    cos: {
      secretId: process.env.COS_SECRET_ID, // cos的secretId
      secretKey: process.env.COS_SECRET_KEY, // cos的secretKey
      bucket: process.env.COS_IMAGE_BUCKET, // cos的bucket
      region: process.env.COS_IMAGE_REGION, // cos的region
      host: process.env.COS_HOST, // cos的host
      prefixKey: '', // cos的prefixKey
      secretExt: '', // 可选，cos的secretExt
    }
  },
}