import { FC, useState } from 'react'
import Content from './Content'

export type Betrayal = {
    name: string
    description: string
    anime: string
    score: number
    image?: string
}

export interface Props {
    initBetrayals: Betrayal[]
}

const Home: FC<Props> = ({ initBetrayals }) => {
    // State
    const [betrayals, setBetrayals] = useState<Betrayal[]>(initBetrayals)
    const [displayContent, setDisplayContent] = useState(false)

    const showContent = () => {
        setDisplayContent(true)
    }

    return (
        <>
            <div id="welcome" style={{ backgroundImage: 'url("./naruto-background.jpg")' }} className="min-h-screen">
                <div className="absolute inset-x-0 bottom-6 text-center md:text-left md:left-1/10 md:inset-y-1/2">
                    <h1 className="bg-clip-text bg-red-400 text-gray-800 text-7xl font-bold md:text-9xl">Welcome to<br />Anime-chan!</h1>
                </div>
            </div>

            <div className="p-12 border-t-8 border-red-700 bg-gray-400">
                <div className="container mx-auto">
                    <h2 className="mt-4 text-red-900 text-5xl">Explore your favourite anime betrayals</h2>
                    <span className="inline-block ml-1 mt-5 text-gray-900 text-xl">
                        This website is dedicated to ranking the top anime betrayals to ever occur.
                    </span>
                    <button onClick={showContent} className="ml-1 mt-5 px-5 py-1.5 rounded-md border-2 border-red-900 text-red-900 text-md md:ml-12 hover:text-white hover:border-white">Enjoy!</button>
                </div>
            </div>

            {displayContent && <Content initBetrayals={initBetrayals} initDisplayContent={displayContent} />}
        </>
    )
}

export default Home
