import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
// eslint-disable-next-line import/no-cycle
import BoardColumn, { IColumn } from '../columns/column.model';

export interface IBoard {
  id: string;
  title: string;
  columns: IColumn[];
}
@Entity()
class Board implements IBoard {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  title: string;

  @OneToMany(
    () => BoardColumn,
    column => column.board,
    { onDelete: 'CASCADE', cascade: true, eager: true }
  )
  columns!: IColumn[];

  constructor({ id = uuid(), title = '', columns }: Partial<IBoard> = {}) {
    this.id = id;
    this.title = title;

    if (columns) {
      this.columns = columns
    }
  }
}

export default Board;
