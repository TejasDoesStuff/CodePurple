import PersonCard from "./PersonCard";
import temp from "../assets/galleryPhotos/districts-2024/P24D7.jpg";

function CSuite() {
    return (
        <div className="w-full h-auto bg-white flex items-center flex-col">
            <h1 className="text-7xl font-kode font-bold my-6 text-codePurple">Mentors</h1>
            <div className="w-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid gap-8 px-8 pb-8 max-w-[5000px]">
                <PersonCard description={"Description goes here for the role. blah blah blah blah blah blah blah"} variant="codePurple" text="white" image={temp}/>
                <PersonCard description={"hi"} variant="codePurple" text="white"/>
                <PersonCard description={"hi"} variant="codePurple" text="white"/>
                <PersonCard description={"hi"} variant="codePurple" text="white"/>
            </div>
        </div>
    );
}

export default CSuite;
