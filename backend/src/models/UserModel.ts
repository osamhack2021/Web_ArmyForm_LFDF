import { DataTypes, Model } from 'sequelize';
import sequelize from '../configs/DatabaseConfig';

interface UserAttributes {
  userid: string;
  passwd: string;

  name: string;

  type: string;
  serial: string;
  rank: string;
  unit: string;

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

class User extends Model<UserAttributes> implements UserAttributes {
  public userid!: string
  public passwd!: string

  public name!: string

  public type!: string
  public serial!: string
  public rank!: string
  public unit!: string

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
};

User.init(
  {
    userid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    passwd: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    serial: {
      type: DataTypes.STRING
    },
    rank: {
      type: DataTypes.STRING
    },
    unit: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true
  }
);

export default User;
