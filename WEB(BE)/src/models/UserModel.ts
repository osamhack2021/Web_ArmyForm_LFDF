import { Table, Model, DataType, Column, PrimaryKey, IsUUID, Default, Unique, ForeignKey, BelongsTo, HasMany, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import Result from './ResultModel';
import Survey from './SurveyModel';
import Unit from './UnitModel';

@Table
class User extends Model {
  @PrimaryKey
  @IsUUID(4)
  @Default(DataType.UUIDV4)
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

  @ForeignKey(() => Unit)
  @Column(DataType.UUID)
  armyUnitId!: string;

  @BelongsTo(() => Unit, 'unitId')
  armyUnit!: Unit;

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
