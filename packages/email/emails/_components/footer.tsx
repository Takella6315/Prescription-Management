import { Text } from '@react-email/components';

import { CenteredLogo } from './logo';

export function Footer({ showLogo = false }: { showLogo?: boolean }) {
  return (
    <span className="pt-8 text-[#999999]">
      {showLogo && <CenteredLogo />}
      <Text className="text-center text-xs">
        <a className="text-[#999999]" href="https://reffy.ai">
          reffy.ai
        </a>{' '}
        | Copyright (C) 2024, Reffy Inc., All rights reserved.
      </Text>
    </span>
  );
}
