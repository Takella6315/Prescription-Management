import { Column, Img, Row } from '@react-email/components';

export function CenteredLogo() {
  return (
    <Row align="center">
      <Column align="center">
        <Img
          src="https://refbuilder.com/assets/images/logos/reffy_logo.png"
          alt="Reffy logo"
          width="150px"
          height=""
        />
      </Column>
    </Row>
  );
}
