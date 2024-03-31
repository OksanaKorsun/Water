import sprite from '../../pictures/icons/sprite.svg'
import { StyledLogo } from './Logo.styled'
export const Logo = () => {
    return (
        <div>
            <StyledLogo>
                <use href={`${sprite}#icon-logo`}></use>
            </StyledLogo>
        </div>
    )
}