import Costumer from '@modules/costumers/database/entities/Costumer';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('orders')
export class Orders {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @ManyToMany(() => Costumer)
  costumer: Costumer;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
