import PersonCard from "../leadership-components/PersonCard";
import Omkar from "../assets/leadership/Omkar.jpg";
import Tejas from "../assets/5827_logo.jpg";

function Contributors(){
    return(
        <div className="h-screen w-screen bg-white flex flex-col items-center justify-center">
            <h1 className="text-9xl font-kode m-10 text-codePurple gradient-scroll">Contributors</h1>
            <div className="flex flex-row">
                <PersonCard name="Tejas Panja" title="Contributor" description="" image={Tejas}/>
                <PersonCard name="Omkar Page" title="Contributor" description="" image={Omkar}/>
            </div>
        </div>
    )
}

export default Contributors;