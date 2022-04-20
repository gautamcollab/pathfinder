import NavBar from './NavBar';
import Spells from './Spells';
import EquipmentCard from './EquipmentCard';
import CharacterWindow from './CharacterWindow'
import BackgroundContainer from './BackgroundContainer'
import ClassContainer from './ClassContainer';

function RenderPage({ isBgVisible }) {
    return (
        <div>
            {/* {isCharVisible ? <CharacterWindow storyPost={storyPost} /> : null} */}
            {/* {isBgVisible ? <BackgroundContainer isBgVisible={isBgVisible}/> : null} */}
        </div>
    )
}

export default RenderPage;