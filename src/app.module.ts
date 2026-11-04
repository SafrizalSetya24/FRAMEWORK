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
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'bookstore',
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
      synchronize: true, // Otomatis sinkronisasi tabel dan relasi ke database MySQL
      logging: true,     // Menampilkan query SQL yang digenerate di terminal
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
