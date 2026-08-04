export interface MioConfig {
    title: string,
    description: string,
    brand?: string,
    favicon?: string,
    author: MioAuthor,
    copyright: MioCopyright
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

import config from '@/../mio.config.ts'

export default config

export function defineConfig(config: MioConfig) {
    return config
}
