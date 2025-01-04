import PersonCard from "./PersonCard";

function CSuite() {
    return (
        <div className="w-full h-auto bg-codePurple flex items-center flex-col">
            <h1 className="text-7xl font-kode font-bold my-6 text-white">C-Suite</h1>
            <div className="w-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid px-8 pb-8 max-w-[5000px]">
                <PersonCard name={"Felix Goodman"} title={"CEO"} description={"Description goes here for the role. blah blah blah blah blah blah blah"}/>
                <PersonCard name={"Vallari Tripathi"} title={"COO"} description={"hi"}/>
                <PersonCard name={"Bella Warmington"} title={"CTO"} description={"hi"}/>
                <PersonCard name={"Christopher Chan"} title={"CSO"} description={"hi"} />
            </div>
        </div>
    );
}

export default CSuite;
