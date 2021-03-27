import { mergeTypes } from 'merge-graphql-schemas';

//Models
import Country from './models/Country';

//Country
import Countries from './country/Countries';

export default mergeTypes(
  [
    //Models
    Country,

    //Country
    Countries,
  ],
  { all: true }
);
