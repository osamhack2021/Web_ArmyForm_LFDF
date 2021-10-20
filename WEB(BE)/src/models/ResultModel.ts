import { Table, Model, DataType, Column, PrimaryKey, IsUUID, Default, ForeignKey, BelongsTo, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import Survey from './SurveyModel';
import User from './UserModel';

@Table
class Result extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @Column(DataType.STRING(10000))
  json!: string;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  surveyId!: string;

  @BelongsTo(() => Survey, 'surveyId')
  survey!: Survey;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  ownerId!: string;

  @BelongsTo(() => User, 'ownerId')
  owner!: User;

  @CreatedAt
  readonly createdAt!: Date;

  @UpdatedAt
  readonly updatedAt!: Date;

  @DeletedAt
  readonly deletedAt!: Date;
};

export default Result;
