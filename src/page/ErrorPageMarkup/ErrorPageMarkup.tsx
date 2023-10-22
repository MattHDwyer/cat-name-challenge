import React from 'react';
import { Banner, Page, Text } from '@shopify/polaris';

export interface ErrorPageMarkupProps {
  message: string;
}

export const ErrorPageMarkup = ({ message }: ErrorPageMarkupProps) => {
  return (
    <Page title="Uh oh... We're sorry! 😢 Something went wrong">
      <Banner tone="critical">
        <Text as="p">{message}</Text>
      </Banner>
    </Page>
  );
};
