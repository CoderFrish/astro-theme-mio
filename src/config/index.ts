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
}

interface MioCopyright {
    start: string,
    end?: string
}

export function defineConfig(config: MioConfig) {
    return config
}
