import SearchSmth from "../../components/header/search/searchSmth";

import AddArticle from "./addArticle";
import styles from "./earth.module.scss"

import blackHoleImg from "@/imgs/blackHoleDesctop.svg"
import antImg from "@/imgs/antDesctop.svg"
import CardArticle from "../../smallCardArticle/cardArticle";
import { StaticImageData } from "next/image";


interface cards {
    title: string,
    image: StaticImageData,
    description: string
}

const cardData:cards[] = [
    {
        "title": "Black Hole",
        "image": blackHoleImg,
        "description": "They're extremely dense, with gravitational forces so strong, that nothing, not even lights, can escape once it crosses the boundary known as the event horizon.",
    },
    {
        "title": "Ant",
        "image": antImg,
        "description": "Ants are common insects, but they have some unique capabilities—including their legendary communication skills that allow their colonies to function as superorganisms.",
    },
    {
        "title": "Black Hole",
        "image": blackHoleImg,
        "description": "They're extremely dense, with gravitational forces so strong, that nothing, not even lights, can escape once it crosses the boundary known as the event horizon.",
    },
    {
        "title": "Ant",
        "image": antImg,
        "description": "Ants are common insects, but they have some unique capabilities—including their legendary communication skills that allow their colonies to function as superorganisms.",
    },
    {
        "title": "Black Hole",
        "image": blackHoleImg,
        "description": "They're extremely dense, with gravitational forces so strong, that nothing, not even lights, can escape once it crosses the boundary known as the event horizon.",
    },
    {
        "title": "Ant",
        "image": antImg,
        "description": "Ants are common insects, but they have some unique capabilities—including their legendary communication skills that allow their colonies to function as superorganisms.",
    },
    {
        "title": "Black Hole",
        "image": blackHoleImg,
        "description": "They're extremely dense, with gravitational forces so strong, that nothing, not even lights, can escape once it crosses the boundary known as the event horizon.",
    },
    {
        "title": "Ant",
        "image": antImg,
        "description": "Ants are common insects, but they have some unique capabilities—including their legendary communication skills that allow their colonies to function as superorganisms.",
    },
    {
        "title": "Black Hole",
        "image": blackHoleImg,
        "description": "They're extremely dense, with gravitational forces so strong, that nothing, not even lights, can escape once it crosses the boundary known as the event horizon.",
    },
    {
        "title": "Ant",
        "image": antImg,
        "description": "Ants are common insects, but they have some unique capabilities—including their legendary communication skills that allow their colonies to function as superorganisms.",
    },
    {
        "title": "Black Hole",
        "image": blackHoleImg,
        "description": "They're extremely dense, with gravitational forces so strong, that nothing, not even lights, can escape once it crosses the boundary known as the event horizon.",
    },
    {
        "title": "Ant",
        "image": antImg,
        "description": "Ants are common insects, but they have some unique capabilities—including their legendary communication skills that allow their colonies to function as superorganisms.",
    },
    {
        "title": "Black Hole",
        "image": blackHoleImg,
        "description": "They're extremely dense, with gravitational forces so strong, that nothing, not even lights, can escape once it crosses the boundary known as the event horizon.",
    },
    {
        "title": "Ant",
        "image": antImg,
        "description": "Ants are common insects, but they have some unique capabilities—including their legendary communication skills that allow their colonies to function as superorganisms.",
    },
    {
        "title": "Black Hole",
        "image": blackHoleImg,
        "description": "They're extremely dense, with gravitational forces so strong, that nothing, not even lights, can escape once it crosses the boundary known as the event horizon.",
    },
    {
        "title": "Ant",
        "image": antImg,
        "description": "Ants are common insects, but they have some unique capabilities—including their legendary communication skills that allow their colonies to function as superorganisms.",
    },
    {
        "title": "Black Hole",
        "image": blackHoleImg,
        "description": "They're extremely dense, with gravitational forces so strong, that nothing, not even lights, can escape once it crosses the boundary known as the event horizon.",
    },
    {
        "title": "Ant",
        "image": antImg,
        "description": "Ants are common insects, but they have some unique capabilities—including their legendary communication skills that allow their colonies to function as superorganisms.",
    },
    {
        "title": "Black Hole",
        "image": blackHoleImg,
        "description": "They're extremely dense, with gravitational forces so strong, that nothing, not even lights, can escape once it crosses the boundary known as the event horizon.",
    },
    {
        "title": "Ant",
        "image": antImg,
        "description": "Ants are common insects, but they have some unique capabilities—including their legendary communication skills that allow their colonies to function as superorganisms.",
    },
    {
        "title": "Black Hole",
        "image": blackHoleImg,
        "description": "They're extremely dense, with gravitational forces so strong, that nothing, not even lights, can escape once it crosses the boundary known as the event horizon.",
    },
    {
        "title": "Ant",
        "image": antImg,
        "description": "Ants are common insects, but they have some unique capabilities—including their legendary communication skills that allow their colonies to function as superorganisms.",
    },
    {
        "title": "Black Hole",
        "image": blackHoleImg,
        "description": "They're extremely dense, with gravitational forces so strong, that nothing, not even lights, can escape once it crosses the boundary known as the event horizon.",
    },
    {
        "title": "Ant",
        "image": antImg,
        "description": "Ants are common insects, but they have some unique capabilities—including their legendary communication skills that allow their colonies to function as superorganisms.",
    },
    {
        "title": "Black Hole",
        "image": blackHoleImg,
        "description": "They're extremely dense, with gravitational forces so strong, that nothing, not even lights, can escape once it crosses the boundary known as the event horizon.",
    },
    {
        "title": "Ant",
        "image": antImg,
        "description": "Ants are common insects, but they have some unique capabilities—including their legendary communication skills that allow their colonies to function as superorganisms.",
    },
    {
        "title": "Black Hole",
        "image": blackHoleImg,
        "description": "They're extremely dense, with gravitational forces so strong, that nothing, not even lights, can escape once it crosses the boundary known as the event horizon.",
    },
    {
        "title": "Ant",
        "image": antImg,
        "description": "Ants are common insects, but they have some unique capabilities—including their legendary communication skills that allow their colonies to function as superorganisms.",
    },
]



export default function page() {
    return(
        <>
            <h2 className={styles.mainHeader}>Neture of Earth</h2>
            <SearchSmth />
            <AddArticle />
            <CardArticle cards={cardData} />
        </>
    )
};
