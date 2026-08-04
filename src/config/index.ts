export interface MioConfig {
    title: string,
    description: string,
    brand?: string,
    favicon?: string,
    author: MioAuthor,
    copyright: MioCopyright,
    icp?: MioICP
}

interface MioAuthor {
    name: string,
    email: string,
    avatar?: string
    introduction: string
}

interface MioCopyright {
    start: string,
    end?: string
}

/* 预留给中国大陆服务器网站的备案配置 */
interface MioICP {
    id: string,
    link: string
}

import config from '@/../mio.config.ts'

export default config

export function defineConfig(config: MioConfig) {
    return config
}
