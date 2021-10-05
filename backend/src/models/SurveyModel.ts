import { DataTypes, Model } from 'sequelize';
import sequelize from '../configs/DatabaseConfig';

// TODO: Add reference information to Sequelize. [owner: number > User.id: number] (many-to-one)
interface SurveyAttributes {
  id: number;

  name: string;
  json: string;

  owner: number;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

class Survey extends Model<SurveyAttributes> implements SurveyAttributes {
  public id!: number;

  public name!: string;
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
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    json: {
      type: DataTypes.STRING
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
