// 导出配置
module.exports = {
  // 写入配置
  write: {
    // 平台为yuque
    platform: 'notion',
    yuque: {
      // 从环境变量中获取token
      token: process.env.YUQUE_TOKEN,
      // 从环境变量中获取登录名
      login: process.env.YUQUE_LOGIN,
      // 从环境变量中获取仓库
      repo: process.env.YUQUE_REPO,
      // 是否只写入公开内容
      onlyPublic: false,
      // 是否只写入已发布内容
      onlyPublished: true,
    },
    // yuque-pwd配置
    'yuque-pwd': {
      // 从环境变量中获取用户名
      username: process.env.YUQUE_USERNAME,
      // 从环境变量中获取密码
      password: process.env.YUQUE_PASSWORD,
      // 从环境变量中获取登录名
      login: process.env.YUQUE_LOGIN,
      // 从环境变量中获取仓库
      repo: process.env.YUQUE_REPO,
      // 是否只写入公开内容
      onlyPublic: false,
      // 是否只写入已发布内容
      onlyPublished: true,
    },
    // notion配置
    notion: {
      // 从环境变量中获取token
      token: process.env.NOTION_TOKEN,
      // 从环境变量中获取数据库ID
      databaseId: process.env.NOTION_DATABASE_ID,
      // 过滤条件
      filter: false, // {property: 'status', select: {equals: '已发布'}}
      catalog: true,
      },
    // 飞书配置
    feishu: {
      // 类型为space
      type: 'space',
      // 从环境变量中获取wikiID
      wikiId: process.env.FEISHU_WIKI_ID,
      // 从环境变量中获取文件夹token
      folderToken: process.env.FEISHU_FOLDER_TOKEN,
      // 从环境变量中获取appID
      appId: process.env.FEISHU_APP_ID,
      // 从环境变量中获取appSecret
      appSecret: process.env.FEISHU_APP_SECRET,
    },
    // flowus配置
    flowus: {
      // 从环境变量中获取tablePageID
      tablePageId: process.env.FLOWUS_TABLE_PAGE_ID,
      // 过滤条件
      filter: false, // {property: 'status',value: '已发布'}
    },
    // wolai配置
    wolai: {
      // 从环境变量中获取token
      token: process.env.WOLAI_TOKEN,
      // 从环境变量中获取pageID
      pageId: process.env.WOLAI_PAGE_ID,
    }
  },
  // 部署配置
  deploy: {
    // 平台为local
    platform: 'local',
    local: {
      // 输出目录为./docs
      outputDir: './posts',
      // 文件名为title
      filename: 'title',
      // 格式为markdown
      format: 'markdown',
      filter: true, // 表示将按照表中的【status】字段进行过滤，保留所有【已发布】的文档
      catalog: true,
      frontMatter: {
        // 是否启用
        enable: true,
        // 包含的属性
        include: ['title','catalog','tags','description','description','references','articleGPT'], // 只输出include包含的属性
        // 不包含的属性
        exclude: ['status'], // 不输出exclude包含的属性
      }},
    // halo配置
    halo: {
      // 从环境变量中获取endpoint
      endpoint: process.env.HALO_ENDPOINT,
      // 从环境变量中获取token
      token: process.env.HALO_TOKEN,
      // 从环境变量中获取policyName
      policyName: process.env.HALO_POLICY_NAME,
      // 行类型为html
      rowType: 'html',
      // 是否需要上传图片
      needUploadImage: true,
    },
    // confluence配置
    confluence: {
      // 从环境变量中获取用户名
      user: process.env.CONFLUENCE_USER,
      // 从环境变量中获取密码
      password: process.env.WORDPRESS_PASSWORD,
      // 从环境变量中获取endpoint
      endpoint: process.env.WORDPRESS_ENDPOINT,
      // 从环境变量中获取spaceKey
      spaceKey: process.env.CONFLUENCE_SPACE_KEY,
      // 从环境变量中获取rootPageID
      rootPageId: process.env.CONFLUENCE_ROOT_PAGE_ID, // 可选
    },
    // wordpress配置
    wordpress: {
      // 从环境变量中获取用户名
      username: process.env.WORDPRESS_USERNAME,
      // 从环境变量中获取密码
      password: process.env.WORDPRESS_PASSWORD,
      // 从环境变量中获取endpoint
      endpoint: process.env.WORDPRESS_ENDPOINT,
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
    // oss配置
    oss: {
      // 从环境变量中获取secretId
      secretId: process.env.OSS_SECRET_ID,
      // 从环境变量中获取secretKey
      secretKey: process.env.OSS_SECRET_KEY,
      // 从环境变量中获取bucket
      bucket: process.env.OSS_BUCKET,
      // 从环境变量中获取region
      region: process.env.OSS_REGION,
      // 从环境变量中获取host
      host: process.env.OSS_HOST,
      // 前缀key为空
      prefixKey: '',
    },
    // cos配置
    cos: {
      // 从环境变量中获取secretId
      secretId: process.env.COS_SECRET_ID,
      // 从环境变量中获取secretKey
      secretKey: process.env.COS_SECRET_KEY,
      // 从环境变量中获取bucket
      bucket: process.env.COS_BUCKET,
      // 从环境变量中获取region
      region: process.env.COS_REGION,
      // 从环境变量中获取host
      host: process.env.COS_HOST,
      // 前缀key为空
      prefixKey: '',
    },
    // qiniu配置
    qiniu: {
      // 从环境变量中获取secretId
      secretId: process.env.QINIU_SECRET_ID,
      // 从环境变量中获取secretKey
      secretKey: process.env.QINIU_SECRET_KEY,
      // 从环境变量中获取bucket
      bucket: process.env.QINIU_BUCKET,
      // 从环境变量中获取region
      region: process.env.QINIU_REGION,
      // 从环境变量中获取host
      host: process.env.QINIU_HOST,
      // 前缀key为空
      prefixKey: '',
    },
    // upyun配置
    upyun: {
      // 从环境变量中获取user
      user: process.env.UPYUN_USER,
      // 从环境变量中获取password
      password: process.env.UPYUN_PASSWORD,
      // 从环境变量中获取bucket
      bucket: process.env.UPYUN_BUCKET,
      // 从环境变量中获取host
      host: process.env.UPYUN_HOST,
      // 前缀key为空
      prefixKey: '',
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