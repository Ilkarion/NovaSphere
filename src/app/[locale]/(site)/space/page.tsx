import blackHoleImg from "@/imgs/blackHoleDesctop.svg"
import antImg from "@/imgs/antDesctop.svg"
import { StaticImageData } from "next/image";
import CategoryPage from "../categoryPage/categoryPage";


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
]

export default function page() {
    return(
        <>
            <CategoryPage cards={cardData} header="Space"/>
        </>
    )
};
