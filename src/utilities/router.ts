import {getEntry} from "astro:content";

const about_entry = await getEntry("spec", "about");

export const about = () => {
    return about_entry
}
