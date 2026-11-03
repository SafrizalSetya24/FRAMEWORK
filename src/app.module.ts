import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  Customer,
  CustomerAddress,
  Category,
  Publisher,
  Author,
  Book,
  BookAuthor,
  Order,
  OrderItem,
  Payment,
  Shipment,
} from './entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgrespassword',
      database: 'bookstore_db',
      entities: [
        Customer,
        CustomerAddress,
        Category,
        Publisher,
        Author,
        Book,
        BookAuthor,
        Order,
        OrderItem,
        Payment,
        Shipment,
      ],
      synchronize: true, // Otomatis membuat semua tabel dan relasi di PostgreSQL Docker
      logging: true,     // Menampilkan query SQL yang digenerate di terminal
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
