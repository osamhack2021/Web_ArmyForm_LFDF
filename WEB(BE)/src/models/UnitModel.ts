import { Table, Model, DataType, Column, PrimaryKey, IsUUID, Default, ForeignKey, BelongsTo, HasMany, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import Survey from './SurveyModel';
import User from './UserModel';

@Table
class Unit extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @Column(DataType.STRING)
  name!: string

  @ForeignKey(() => Unit)
  @Column(DataType.UUID)
  superUnitId!: string;

  @BelongsTo(() => Unit, 'superUnitId')
  superUnit!: Unit;

  @HasMany(() => Unit, 'superUnitId')
  subUnits!: Unit[];

  @HasMany(() => User, 'unitId')
  users!: User[];

  @HasMany(() => Survey, 'unitId')
  surveys!: Survey[];

  @CreatedAt
  readonly createdAt!: Date;

  @UpdatedAt
  readonly updatedAt!: Date;

  @DeletedAt
  readonly deletedAt!: Date;
};

export default Unit;
