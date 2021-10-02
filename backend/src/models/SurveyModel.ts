import { Sequelize, DataTypes, Model } from 'sequelize';

// Temporary, should be reallocate to other files.
const sequelize = new Sequelize(
  'test',
  'test',
  'test',
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

sequelize.sync({ force: true });

interface SurveyAttributes {
  id: number;
  json: string;

  owner: number;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

class Survey extends Model<SurveyAttributes> implements SurveyAttributes {
  public id!: number;
  public json!: string;

  public owner!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
};

Survey.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    json: {
      type: DataTypes.STRING,
      allowNull: false
    },
    owner: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  },
  {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true
  }
);

export default Survey;
