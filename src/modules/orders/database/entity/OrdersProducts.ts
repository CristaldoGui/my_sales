import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Order } from './Order';
import { Product } from '@modules/products/database/entities/Product';

@Entity('orders-products')
export class OrdersProducts {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @ManyToOne(() => Order, order => order.orders_products)
  order: Order;

  @ManyToOne(() => Product, product => product.orders_products)
  product: Product;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'integer' })
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
