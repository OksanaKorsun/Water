import { MainContent } from "components/Main/MainContent/MainContent"
import { Section, Wrapper } from "./WelcomePage.styled"
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn, selectUser } from '../redux/selectors';


export default function WelcomePage() {
//     const user = useSelector(selectUser);
//   const isLoggedin = useSelector(selectIsLoggedIn);
    return (
        <Wrapper>
            <Section>
                <MainContent/>
            </Section>
        </Wrapper>
    )
}