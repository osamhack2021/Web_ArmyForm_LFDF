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

interface UserAttributes {
    userid: string;
    passwd: string;

    name: string;

    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
};

// export interface UserInput extends Optional<UserAttributes, 'userid'> {};

// class User extends Model<UserAttributes, UserInput> implements UserAttributes
class User extends Model<UserAttributes> implements UserAttributes {
    public userid!: string
    public passwd!: string
    public name!: string

    // timestamps!
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
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true
  }
);

export default User;
