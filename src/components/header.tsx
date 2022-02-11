import { PageHeader, Typography, Avatar } from "antd";

interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  return (
    <PageHeader className="app-headers">
      <Avatar
        shape="square"
        src="https://seeklogo.com/images/A/adobe-character-animator-logo-B4F589173E-seeklogo.com.png"
      />
      <Typography.Title level={4}>{props.title}</Typography.Title>
    </PageHeader>
  );
}
