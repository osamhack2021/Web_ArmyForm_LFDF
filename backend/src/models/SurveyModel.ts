import { Table, Model, DataType, Column, PrimaryKey, IsUUID, Default, ForeignKey, BelongsTo, HasMany, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import User from './UserModel';
import Result from './ResultModel';
import Unit from './UnitModel';

@Table
class Survey extends Model {
  @PrimaryKey
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  json!: string;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  ownerId!: string;

  @BelongsTo(() => User, 'ownerId')
  owner!: User;

  @ForeignKey(() => Unit)
  @Column(DataType.UUID)
  unitId!: string;

  @BelongsTo(() => Unit, 'unitId')
  unit!: User;

  @HasMany(() => Result, 'surveyId')
  results!: Result[];

  @CreatedAt
  readonly createdAt!: Date;

  @UpdatedAt
  readonly updatedAt!: Date;

  @DeletedAt
  readonly deletedAt!: Date;
};

export default Survey;
