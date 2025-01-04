import PersonCard from "./PersonCard";

function CSuite() {
    return (
        <div className="w-full h-auto bg-codePurple flex items-center flex-col">
            <h1 className="text-7xl font-kode font-bold my-6 text-white">C-Suite</h1>
            <div className="w-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid px-8 pb-8 max-w-[5000px]">
                <PersonCard name={"Matthew Warmington"} title={"Electronics Lead"} description={"Description goes here for the role. blah blah blah blah blah blah blah"}/>
                <PersonCard name={"Aimal Samir"} title={"Build Lead"} description={"hi"}/>
                <PersonCard name={"Logan Schmidt"} title={"Design Lead"} description={"hi"}/>
                <PersonCard name={<a href="/freddy">Omkar Page</a>} title={"Code Lead"} description={<a href="/freddy">freddy fazbear</a>} />
                <PersonCard name={"Jayden Hong"} title={"Code Lead"} description={"hi"} />
                <PersonCard name={"Rohan Chilukuri"} title={"Finance Lead"} description={"hi"} />
                <PersonCard name={"Emi Elman"} title={"Marketing Lead"} description={"hi"} />
                <PersonCard name={"Jerry Guo"} title={"Drive Lead"} description={"hi"} />
            </div>
        </div>
    );
}

export default CSuite;
