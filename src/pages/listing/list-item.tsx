import { List, Avatar, Tag } from "antd";
import { Character } from "types";

interface ListItemProps {
  character: Character;
}

export const ListItem = (props: ListItemProps) => {
  const { character } = props;

  return (
    <List.Item className="list-row">
      <List.Item.Meta
        avatar={<Avatar size={"large"} src={character.image} />}
        title={
          <ul className="list-character-description">
            <li>Name</li>
            <li>Gender</li>
            <li>Status </li>
            <li>Location </li>
            <li>Species</li>
            <li>Total Episode</li>
          </ul>
        }
        description={
          <ul className="list-character-description">
            <li>{character.name}</li>
            <li>{character.gender}</li>
            <li>{character.status}</li>
            <li>{character?.location?.name}</li>
            <li>{character?.species}</li>
            <li>
              <Tag color={"purple"}>{character?.episode?.length}</Tag>
            </li>
          </ul>
        }
      />
    </List.Item>
  );
};
