import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem/FriendListItem";
import css from './FriendList.module.css'

export default function FriendList({friends}) {
    return (
        <ul className={css.friendBox}>
            {friends.map(({id, avatar, name, isOnline,}) => (
                <FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    key={id}
                />
            ))}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
};
