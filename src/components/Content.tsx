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

    const addBetrayal = () => {

    }

    useEffect(() => {
        scrollToBetrayals()
    }, [])

    return (
        <div id="betrayals" className="py-10 min-h-screen bg-gray-100" ref={betrayalsRef}>
            <div className="flex flex-row flex-wrap justify-center">
                <div className="flex flex-col justify-center mx-5 md:mt-16">
                    {betrayals.map((betrayal: Betrayal) => (
                        <div className="mb-10 p-4 border border-gray-500 rounded-lg shadow-lg bg-white md:max-w-4xl">
                            <h2 className="inline-block ml-2 text-2xl text-red-900">{betrayal.name}</h2>
                            <h3 className="inline-block ml-2 text-lg text-gray-700">{betrayal.anime}</h3>
                            <hr className="line" />
                            <div className="flex flex-col justify-between align-center my-2 p-3">
                                <p className="font-serif">{betrayal.description}</p>
                                {betrayal.image && <img src={betrayal.image} alt={betrayal.name} className="my-4 rounded-md" />}
                            </div>
                            <h3 className="mx-1 text-lg text-red-900 font-bold">Final score: {betrayal.score}</h3>
                        </div>
                    ))}
                </div>
                <div className="w-full mx-5 p-4 border border border-gray-500 rounded-lg shadow-lg bg-white md:w-auto md:mx-5 md:mt-16">
                    <h2 className="text-2xl text-red-900">Add new top betrayal</h2>
                    <hr className="line" />
                    <form onSubmit={() => {addBetrayal()}} method="post" className="flex flex-col mx-2 mt-5">
                        <div className="py-3">
                            <label htmlFor="name" className="mr-3">Name</label>
                            <input type="text" id="name" className="border border-gray-600 rounded-lg" />
                        </div>
                        <div className="py-3">
                            <label htmlFor="description">Description</label><br />
                            <textarea id="description"
                            cols={30}
                            rows={10}
                            placeholder="Enter the anime betrayal's description"
                            className="p-2 border border-gray-600 rounded-lg"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Content
