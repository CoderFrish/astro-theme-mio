import {defineConfig} from "@/config";

export default defineConfig({
    title: "Mio`s blog",
    description: "A Blog site powered by Mio Theme.",
    author: {
        name: "澪",
        email: "xxx@example.com",
        avatar: "/avatar.jpg",
        introduction: "A Frontend Developer.",
    },
    copyright: {
        start: "1970"
    },
    pagination: {
        home_per_page: 9
    }
});
