import { DataTypes, Model } from 'sequelize';
import sequelize from '../configs/DatabaseConfig';

// TODO: Add reference information to Sequelize. [owner: number > User.id: number] (many-to-one)
//                                               [surveyid: number > Survey.id: number] (many-to-one)
interface ResultAttributes {
  id: number;

  json: string;

  surveyid: number;
  owner: number;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

class Result extends Model<ResultAttributes> implements ResultAttributes {
  public id!: number;

  public json!: string;

  public surveyid!: number;
  public owner!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
};

Result.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    json: {
      type: DataTypes.STRING
    },
    surveyid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    owner: {
      type: DataTypes.BIGINT
    }
  },
  {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true
  }
);

export default Result;
