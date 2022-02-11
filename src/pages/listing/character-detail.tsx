import { Badge, Descriptions, PageHeader, Table, Tag } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { useLocation, useNavigate } from "react-router-dom";
import { Character } from "types";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Air Date",
    dataIndex: "air_date",
    key: "air_date",
  },
  {
    title: "Episode",
    dataIndex: "episode",
    key: "episode",
  },
];

export const CharacterDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { character } = state as { character: Character };

  return (
    <>
      <PageHeader
        className="listing-header"
        onBack={() => navigate("/")}
        title={character.name}
      />
      <Descriptions title="" layout="vertical" bordered>
        <Descriptions.Item className="character-name" label="Name">
          <Avatar src={character.image}></Avatar>
          {character.name}
        </Descriptions.Item>
        <Descriptions.Item label="Gender">{character.gender}</Descriptions.Item>
        <Descriptions.Item label="Status">
          <Badge
            status={character.status === "Alive" ? "processing" : "error"}
            text={character.status}
          ></Badge>
        </Descriptions.Item>
        <Descriptions.Item label="Species">
          {character.species}
        </Descriptions.Item>
        <Descriptions.Item label="Type">{character.type}</Descriptions.Item>
        <Descriptions.Item label="Episodes">
          <Tag>{character?.episode?.length}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Location">
          {character.location?.name} <br />
        </Descriptions.Item>
        <Descriptions.Item label="Origin">
          {character.origin?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
        <Descriptions.Item label="Episode">
          <Table dataSource={character.episode} columns={columns} />;
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};
