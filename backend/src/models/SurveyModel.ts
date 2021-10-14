import { Table, Model, DataType, Column, PrimaryKey, ForeignKey, BelongsTo, IsUUID, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import User from './UserModel';

@Table
class Survey extends Model {
  @IsUUID(4)
  @PrimaryKey
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

  @CreatedAt
  readonly createdAt!: Date;

  @UpdatedAt
  readonly updatedAt!: Date;

  @DeletedAt
  readonly deletedAt!: Date;
};

export default Survey;
