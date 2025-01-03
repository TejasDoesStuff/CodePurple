import SubteamsTitle from "../subteam-components/SubteamsTitle";
import SubteamSelector from "../subteam-components/SubteamSelector";
import BuildScreen from "../subteam-components/BuildScreen";

function Subteams() {
  return <div className="w-screen flex flex-col items-center">
      <SubteamsTitle />
      <SubteamSelector />
    </div>
}

export default Subteams;
