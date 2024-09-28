import { Button, Column, Row } from '@react-email/components';

export function LoginButton(props: { text: string }) {
  return (
    <Row align="center">
      <Column align="center">
        <Button
          href="https://reffy.ai/login"
          style={{
            backgroundColor: '#F9D27F',
            padding: '1rem',
            textDecoration: 'none',
            color: 'black',
            width: '250px',
          }}
        >
          {props.text}
        </Button>
      </Column>
    </Row>
  );
}
