import sprite from '../../pictures/icons/sprite.svg';
import { Button, Container, Icon } from './UserAuth.styled';
export const UserAuth = () => {
    return (
        <Container>
            <Button type='button'>Sign in</Button>
            <Icon>
                <use href={`${sprite}#icon-user`}></use>
            </Icon>
        </Container>
    )
}