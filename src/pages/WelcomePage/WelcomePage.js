import { MainContent } from "components/Main/MainContent/MainContent"
import { Section, Wrapper } from "./WelcomePage.styled"
import PopoverPopupState from "components/Popover/Popover"
// import { Ref } from "components/Ref/Ref"
// import BasicPopover from "components/Popover/BasicPopover"
// import { AvatarLogo } from "components/AvatarLogo/AvatarLogo"
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
                {/* <Ref />
                <BasicPopover />
                <AvatarLogo/> */}
                <PopoverPopupState/>
            </Section>
        </Wrapper>
    )
}