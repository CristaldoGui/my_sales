import AppDataSource from '@shared/typeorm/data-source';
import { Order } from '../entities/Order';
import Costumer from '@modules/costumers/database/entities/Costumer';
import { OrderProduct } from '../entities/OrderProduct';

interface ICreateOrder {
  costumer: Costumer;
  orders_products: OrderProduct[];
}

export const ordersRepositories = AppDataSource.getRepository(Order).extend({
  async findOrderById(id: number): Promise<Order | null> {
    const order = await this.findOne({
      where: { id },
      relations: ['orders_products', 'costumer'],
    });

    return order;
  },

  async createOrder({ costumer, orders_products }: ICreateOrder) {
    const order = this.create({
      costumer,
      orders_products,
    });

    await this.save(order);

    return order;
  },
});
