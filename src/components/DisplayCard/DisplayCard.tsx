import { Card, CardContent, CardHeader } from "@mui/material";

import { DisplayCardProps } from "./DisplayCard.interfaces";

const DisplayCard = (props: DisplayCardProps) => {
  const { title, description, children } = props;
  return (
    <Card className="DisplayCard" data-testid="DisplayCard">
      <CardHeader
        title={title}
        titleTypographyProps={{ "data-testid": "DisplayCardTitle" }}
        subheader={description}
        subheaderTypographyProps={{ "data-testid": "DisplayCardDescription" }}
      />
      <CardContent data-testid="DisplayCardContent">{children}</CardContent>
    </Card>
  );
};
export default DisplayCard;
