module.exports = {
  // 写入配置
  write: {
    // 平台为notion
    platform: 'notion',
    // notion配置
    notion: {
      // 从环境变量中获取token
      token: process.env.NOTION_TOKEN,
      // 从环境变量中获取数据库ID
      databaseId: process.env.NOTION_DATABASE_ID,
      // 过滤条件
      filter: false, // {property: 'status', select: {equals: '已发布'}}
    }
  },
  // 部署配置
  deploy: {
    // 部署平台
    platform: 'local',
    // 部署配置
    local: {
      // 输出目录
      outputDir: './posts',
      // 文件名
      filename: 'title',
      // 格式
      format: 'markdown',
      // 是否生成目录
      catalog: true,
      // // 格式扩展
      // formatExt: './elog.format.js',
      // 前言
      frontMatter: {
        // 是否启用
        enable: true,
        // 包含的属性
        include: ['title','catalog','category','tags','top','status','sticky','publish','tag','description',
          'recommend','hiddenCover','author','comment','date','recommend'], // 只输出include包含的属性
        // 不包含的属性
        exclude: ['cover'], // 不输出exclude包含的属性
        // 格式扩展
        formatExt: './elog.format.js'
      }
    }
  },
  // 图片配置
  image: {
    // 是否启用
    enable: false,
    // 平台为local
    platform: 'local',
    local: {
      // 输出目录为./docs/images
      outputDir: './docs/images',
      // 前缀key为/images
      prefixKey: '/images',
      // 是否路径跟随文档
      pathFollowDoc: false,
    },
    // github配置
    github: {
      // 从环境变量中获取token
      token: process.env.GITHUB_TOKEN,
      // 从环境变量中获取user
      user: process.env.ELOG_GITHUB_USER,
      // 从环境变量中获取repo
      repo: process.env.ELOG_GITHUB_REPO,
      // 前缀key为空
      prefixKey: '',
    }
  }
}
