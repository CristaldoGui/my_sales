import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Order } from './Order';
import { Product } from '@modules/products/database/entities/Product';

@Entity('orders_products')
export class OrderProduct {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Order, order => order.orders_products)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column()
  order_id: number;

  @ManyToOne(() => Product, product => product.order_product)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column()
  product_id: number;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'integer' })
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
