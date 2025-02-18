import Costumer from '@modules/costumers/database/entities/Costumer';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderProduct } from './OrderProduct'

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @ManyToOne(() => Costumer)
  @JoinColumn({ name: 'costumer_id' })
  costumer: Costumer;

  @OneToMany(() => OrderProduct, orderProducts => orderProducts.order, {
    cascade: true,
  })
  orders_products: OrderProduct[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
