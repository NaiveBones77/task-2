import {useMediaQuery} from "react-responsive";
import Mobile from "./mobile/Mobile";
import Desktop from "./desktop/Desktop";

const App =() => {

    const isDesktop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    const isMobile = useMediaQuery({
        query: '(max-width: 1224px)'
    })

    return (
        <div>
            {isDesktop && <Desktop/>}
            {isMobile && <Mobile/>}
        </div>

    );
}

export default App;
