import { useEffect, useState } from "react"

function NavBox({stuff}) {
    const [animate, setAnimate] = useState(false)
    
    useEffect(() => {
        setAnimate(false)
        const timeout = setTimeout(() => setAnimate(true), 10)
        return () => clearTimeout(timeout)
    }, [stuff])

    

    return (
        <div className="bg-codePurple w-[50vw] h-96 border-white border-2 rounded-xl mb-24 overflow-hidden">
            <div className={`flex justify-center items-center h-full text-white text-2xl font-semibold font-cooper mx-4 ${
                    animate ? "floatin" : ""
                }`} >
                {stuff}
            </div>
        </div>
    );
}

export default NavBox;