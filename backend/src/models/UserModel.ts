import { Table, Model, DataType, Column, PrimaryKey, IsUUID, Unique, CreatedAt, UpdatedAt, DeletedAt, HasMany} from 'sequelize-typescript';
import Result from './ResultModel';
import Survey from './SurveyModel';

@Table
class User extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column(DataType.UUID)
  id!: string;

  @Unique
  @Column(DataType.STRING)
  username!: string

  @Column(DataType.STRING)
  password!: string

  @Column(DataType.STRING)
  name!: string

  @Column(DataType.STRING)
  armyType!: string

  @Column(DataType.STRING)
  armyUnit!: string

  @Column(DataType.STRING)
  armyRank!: string

  @Column(DataType.STRING)
  serialNumber!: string

  @HasMany(() => Survey, 'ownerId')
  surveys!: Survey[];

  @HasMany(() => Result, 'ownerId')
  results!: Result[];

  @CreatedAt
  readonly createdAt!: Date;

  @UpdatedAt
  readonly updatedAt!: Date;

  @DeletedAt
  readonly deletedAt!: Date;
};

export default User;
