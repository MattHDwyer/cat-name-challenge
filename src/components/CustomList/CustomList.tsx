import React from 'react';
import { Text } from '@shopify/polaris';

export interface CustomListProps {
  list: string[];
}

export const CustomList = ({ list }: CustomListProps) => {
  return (
    <>
      {list.map((item: string, index: number) => (
        <Text as="p" key={index}>
          {item}
        </Text>
      ))}
    </>
  );
};
