import PersonCard from "../leadership-components/PersonCard";
import Omkar from "../assets/leadership/Omkar.jpg";
import Tejas from "../assets/Tejas.jpg";

function Contributors(){
    return(
        <div className="h-screen w-screen bg-white flex flex-col items-center justify-center">
            <h1 className="text-9xl font-kode font-bold m-10 text-codePurple gradient-scroll">Contributors</h1>
            <div className="flex flex-row">
                <PersonCard name="Tejas Panja" title="Lead Web Dev" description="" image={Tejas}/>
                <PersonCard name="Omkar Page" title="Code Lead" description="" image={Omkar}/>
            </div>
        </div>
    )
}

export default Contributors;