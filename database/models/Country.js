import { DataTypes } from 'sequelize';
import { sequelize } from '../../src/config/database';
import { getDatabaseInsertableTime } from '../../src/helpers/DatabaseHelper';

const Country = sequelize.define(
  'Country',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.TEXT },
    code: { type: DataTypes.TEXT },
    shortCode: { type: DataTypes.TEXT },
    phoneCode: { type: DataTypes.TEXT },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    timestamps: true,
    tableName: 'Countries',
  }
);

Country.beforeCreate(async (country) => {
  country.createdAt = country.updatedAt = getDatabaseInsertableTime(0, 'days');
});

Country.beforeUpdate(async (country) => {
  country.updatedAt = getDatabaseInsertableTime(0, 'days');
});

export default Country;
