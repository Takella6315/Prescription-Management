import { Font } from '@react-email/components';

export function Title({ title }: { title: string }) {
  return (
    <>
      <title>{title}</title>
      <Font
        fontFamily="GT Pressura Standard"
        fallbackFontFamily={['sans-serif', 'Verdana', 'Georgia']}
        webFont={{
          url: 'https://storage.googleapis.com/prod-emails/GT-Pressura-Standard-Regular.woff',
          format: 'woff',
        }}
        fontWeight="normal"
        fontStyle="normal"
      />

      <Font
        fontFamily="GT Pressura Standard"
        fallbackFontFamily={['sans-serif', 'Verdana', 'Georgia']}
        webFont={{
          url: 'https://storage.googleapis.com/prod-emails/GT-Pressura-Standard-Bold.woff',
          format: 'woff',
        }}
        fontWeight="bold"
        fontStyle="normal"
      />
    </>
  );
}
