import React from 'react';
import {
  BlockStack,
  Card,
  Divider,
  Layout,
  Page,
  Spinner,
  Text,
} from '@shopify/polaris';
import { Gender } from '../../types';
import { CustomList } from '../../components';
import { ErrorPageMarkup } from '../../page';

export interface CatNamesPageProps {
  catNamesFromFemalesList: string[] | undefined;
  catNamesFromMalesList: string[] | undefined;
  errorMessage?: string | null;
}

export const CatNamesPage = ({
  catNamesFromFemalesList,
  catNamesFromMalesList,
  errorMessage,
}: CatNamesPageProps) => {
  const loading =
    catNamesFromFemalesList === undefined ||
    catNamesFromMalesList === undefined;

  if (errorMessage) {
    return <ErrorPageMarkup message={errorMessage} />;
  }

  return (
    <Page title="The Cat Challenge">
      {loading ? (
        <Layout>
          <Spinner />
        </Layout>
      ) : (
        <BlockStack gap={'800'}>
          <Card>
            <BlockStack gap={'500'}>
              <Text as={'h2'} variant="heading3xl">
                {Gender.Female}
              </Text>
              <Divider />
              <CustomList list={catNamesFromFemalesList.sort()} />
            </BlockStack>
          </Card>

          <Card>
            <BlockStack gap={'500'}>
              <Text as={'h2'} variant="heading3xl">
                {Gender.Male}
              </Text>
              <Divider />
              <CustomList list={catNamesFromMalesList.sort()} />
            </BlockStack>
          </Card>
        </BlockStack>
      )}
    </Page>
  );
};
