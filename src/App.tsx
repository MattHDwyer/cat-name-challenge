import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AppProvider } from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';
import { CatNamesPage } from './page';
import { Gender, People, Pet, PetType } from './types';

function App() {
  const [catNamesFromFemales, setCatNamesFromFemales] = useState<
    Array<string> | undefined
  >(undefined);
  const [catNamesFromMales, setCatNamesFromMales] = useState<
    Array<string> | undefined
  >(undefined);

  const [errorMesssage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // fetch data from API
    axios
      .get(
        'https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json',
      )
      .then((res) => {
        // Store Data from response
        const data: People[] = res.data;

        // If the data isn't an array return an error.
        if (!Array.isArray(data)) {
          console.error('Unexpected data format');
          setErrorMessage('Unexpected data format');
          return;
        }

        // set up arrays for cat names
        const catNamesFemales: string[] = [];
        const catNamesMales: string[] = [];

        // loop through the data and add cat names to the arrays
        data.forEach((person: People) => {
          if (person.pets) {
            const catNames = person.pets
              .filter((pet: Pet) => pet.type === PetType.Cat)
              .map((cat: Pet) => cat.name);

            if (person.gender === Gender.Female) {
              catNamesFemales.push(...catNames);
            } else if (person.gender === Gender.Male) {
              catNamesMales.push(...catNames);
            }
          }
        });

        // set the state of the catNames arrays for male and female
        setCatNamesFromFemales(catNamesFemales);
        setCatNamesFromMales(catNamesMales);
      })
      .catch((err) => {
        // Console and set error messages
        console.error(err.message);
        setErrorMessage(err.message);
      });
  }, []);

  return (
    <AppProvider i18n={translations}>
      <CatNamesPage
        catNamesFromFemalesList={catNamesFromFemales}
        catNamesFromMalesList={catNamesFromMales}
        errorMessage={errorMesssage}
      />
    </AppProvider>
  );
}

export default App;
