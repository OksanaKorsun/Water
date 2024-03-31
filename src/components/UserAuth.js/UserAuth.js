import sprite from '../../pictures/icons/sprite.svg';
import { Icon } from './UserAuth.styled';
export const UserAuth = () => {
    return (
        <div>
            <p>Sign in</p>
            <Icon>
                <use href={`${sprite}#icon-user`}></use>
            </Icon>
        </div>
    )
}