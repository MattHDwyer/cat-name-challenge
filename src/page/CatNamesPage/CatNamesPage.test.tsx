import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CatNamesPage } from './CatNamesPage';
import { AppProvider } from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';

/**
 *
 * TEST:
 * 1. Checks that the render of the catNamesFromFemalesList is in alphabetical order
 * 2. Checks that the render of the catNamesFromMalesList is in alphabetical order
 *
 */
describe('CatNamesPage', () => {
  // Mock the window.matchMedia function
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  /**
   * TEST 1: Checks that the render of the catNamesFromFemalesList is in alphabetical order
   */
  it('renders catNamesFromFemalesList in alphabetical order', () => {
    // Mock data
    const mockCatNamesFromFemalesList = ['Zara', 'Alice', 'Mia'];

    // Render the component
    const { getAllByText } = render(
      <AppProvider i18n={translations}>
        <CatNamesPage
          catNamesFromFemalesList={mockCatNamesFromFemalesList}
          catNamesFromMalesList={[]}
        />
      </AppProvider>,
    );

    // Get all the DOM elements, where text content matches the names in the mock data
    const renderedNames = getAllByText(
      (_, DOM_Node) =>
        !!DOM_Node &&
        mockCatNamesFromFemalesList.some(
          (name) => name === DOM_Node.textContent,
        ),
    ).map((DOM_Node) => DOM_Node.textContent || '');

    //Sort the names rendered alphabetically.
    const sortedNames = [...renderedNames].sort();

    // Check that the sorted names are equal to the rendered names.
    expect(renderedNames).toEqual(sortedNames);
  });

  /**
   * TEST 2: Checks that the render of the catNamesFromMalesList is in alphabetical order
   */
  it('renders catNamesFromMalesList in alphabetical order', () => {
    // Mock data
    const mockCatNamesFromMalesList = ['Zach', 'Andrew', 'Matt', 'Jack'];

    // Render the component
    const { getAllByText } = render(
      <AppProvider i18n={translations}>
        <CatNamesPage
          catNamesFromFemalesList={[]}
          catNamesFromMalesList={mockCatNamesFromMalesList}
        />
      </AppProvider>,
    );

    // Get all the DOM elements, where text content matches the names in the mock data
    const renderedNames = getAllByText(
      (_, DOM_Node) =>
        !!DOM_Node &&
        mockCatNamesFromMalesList.some((name) => name === DOM_Node.textContent),
    ).map((DOM_Node) => DOM_Node.textContent || '');

    // Sort the rendered names alphabetically.
    const sortedNames = [...renderedNames].sort();

    // Check that the sorted names are equal to the rendered names.
    expect(renderedNames).toEqual(sortedNames);
  });
});
