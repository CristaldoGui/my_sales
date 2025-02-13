import Costumer from '@modules/costumers/database/entities/Costumer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('orders')
export class Orders {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @ManyToMany(() => Costumer)
  @JoinColumn({ name: 'costumer_id' })
  costumer: Costumer;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
