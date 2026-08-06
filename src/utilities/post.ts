import {type CollectionEntry, getCollection} from "astro:content";

const posts_list = await getCollection("posts");

export const posts = () => {
    return posts_list
}

export const tags = () => {
    const tags: string[] = []

    posts().forEach((post: {data: {tags: string[]}}) => {
        post.data.tags.forEach(tag => {
            if (!tags.includes(tag)) tags.push(tag)
        })
    })

    return tags
}

export const categories = () => {
    const categories: string[] = []

    posts().forEach((post: {data: {category?: string}}) => {
        const category = post.data.category;
        if (category && !categories.includes(category)) {
            categories.push(category)
        }
    })

    return categories
}

export const category_posts = (category: string) => {
    const category_posts: CollectionEntry<"posts">[] = []

    posts().forEach((post: CollectionEntry<"posts">) => {
        const post_category = post.data.category;
        if (post_category === category) {
            category_posts.push(post)
        }
    })

    return category_posts
}
