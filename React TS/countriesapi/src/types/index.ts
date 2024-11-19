export interface CountryType {
    name: {
      common: string;
      official: string;
      nativeName: {
        [key: string]: {
          official: string;
          common: string;
        };
      };
    };
    tld: string[];
    cca2: string;
    currencies: {
      [key: string]: {
        name: string;
        symbol: string;
      };
    };
    idd: {
      root: string;
      suffixes: string[];
    };
    capital: string[];
    region: string;
    subregion: string;
    languages: {
      [key: string]: string;
    };
    borders: string[];
    flag: string;
    population: number;
    continents: string[];
    flags: {
      png: string;
      alt: string;
    };
  }
  