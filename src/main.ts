import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: true,
  });
  await app.listen(3001).then(()=>
  console.log(`The GQL app is up and running on port 3001`));
}
bootstrap();
