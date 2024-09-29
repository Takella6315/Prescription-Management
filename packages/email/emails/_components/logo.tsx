import { Column, Img, Row } from '@react-email/components';

export function CenteredLogo() {
  return (
    <Row align="center">
      <Column align="center">
        <Img
          src="google.com"
          alt="Reffy logo"
          width="150px"
          height=""
        />
      </Column>
    </Row>
  );
}
