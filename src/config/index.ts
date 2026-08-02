export interface MioConfig {
    title: string,
    description: string,
    brand?: string,
    favicon?: string,
    author: MioAuthor
}

interface MioAuthor {
    name: string,
    email: string,
    avatar?: string
}

export function defineConfig(config: MioConfig) {
    return config
}
