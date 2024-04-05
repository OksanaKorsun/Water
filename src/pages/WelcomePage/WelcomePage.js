import { MainContent } from "components/Main/MainContent/MainContent"
import { Section, Wrapper } from "./WelcomePage.styled"
import PopoverPopupState from "components/Popover/Popover"
import { Ref } from "components/Ref/Ref"
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn, selectUser } from '../redux/selectors';


export default function WelcomePage() {
//     const user = useSelector(selectUser);
//   const isLoggedin = useSelector(selectIsLoggedIn);
    return (
        <Wrapper>
            <Section>
                <MainContent />
                <PopoverPopupState />
                <Ref/>
            </Section>
        </Wrapper>
    )
}