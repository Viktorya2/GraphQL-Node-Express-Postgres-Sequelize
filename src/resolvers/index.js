import { mergeResolvers } from 'merge-graphql-schemas';

// Country
import getCountries from './country/getCountries';

export default mergeResolvers([
  // Country
  getCountries,
]);
