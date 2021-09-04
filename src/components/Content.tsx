import { FC, useState, useRef, useEffect } from 'react'
import { Betrayal, Props } from './Home'

interface ContentProps extends Props {
    initDisplayContent: boolean
}

const Content: FC<ContentProps> = ({ initBetrayals, initDisplayContent }) => {
    // State
    const [betrayals, setBetrayals] = useState<Betrayal[]>(initBetrayals)
    const [displayContent, setDisplayContent] = useState<boolean>(initDisplayContent)

    const betrayalsRef = useRef<HTMLDivElement>(null)
    const scrollToBetrayals = () => {
        betrayalsRef?.current?.scrollIntoView({'behavior': 'smooth', 'block': 'start'})
    }

    useEffect(() => {
        scrollToBetrayals()
    }, [])

    return (
        <div id="betrayals" className="py-10 min-h-screen bg-gray-100" ref={betrayalsRef}>
            <div className="flex flex-col">
                {/* TODO: Create component for making new betrayals */}
                <div className="flex flex-col justify-center mx-5 md:mx-60 md:mt-16">
                    {betrayals.map((betrayal: Betrayal) => (
                        <div className="my-10 p-4 border border-gray-500 rounded-lg shadow-lg bg-white">
                            <h2 className="inline-block ml-2 text-2xl text-red-900">{betrayal.name}</h2>
                            <h3 className="inline-block ml-2 text-lg text-gray-700">{betrayal.anime}</h3>
                            <hr className="line" />
                            <div className="flex flex-wrap justify-center justify-items-start my-2 md:flex-nowrap md:my-6">
                                <p className="font-serif md:px-4">{betrayal.description}</p>
                                {betrayal.image && <img src={betrayal.image} alt={betrayal.name} className="mt-8 max-w-sm max-h-sm rounded-md md:mt-0" />}
                            </div>
                            <h3 className="mx-1 text-lg text-red-900 font-bold">Final score: {betrayal.score}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Content
