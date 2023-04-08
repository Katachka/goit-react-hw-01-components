import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem/FriendListItem"

export default function FriendList({friends}) {
    return (
        <ul>
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

FriendList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
        })
    ).isRequired
};
