import Country from '../../../database/models/Country';

export default {
  Query: {
    countries: async () => {
      return Country.findAll();
    },
  },
};
