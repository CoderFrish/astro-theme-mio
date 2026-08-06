export interface MioConfig {
    title: string,
    description: string,
    brand?: string,
    favicon?: string,
    author: MioAuthor,
    copyright: MioCopyright,
    pagination?: MioPagination
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

/* 关于分页的设置 */
interface MioPagination {
    home_per_page?: number,
}

import config from '@/../mio.config.ts'

export default config

export function defineConfig(config: MioConfig) {
    return config
}
