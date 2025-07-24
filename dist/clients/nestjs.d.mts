import { NestFactoryStatic } from '@nestjs/core/nest-factory';

declare const instrumentNestFactory: (nestFactory: NestFactoryStatic, redMiddleware: Function) => void;

export { instrumentNestFactory };
