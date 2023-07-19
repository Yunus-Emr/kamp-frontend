import { Product } from './product';
import { ResponseModule } from './responseModule';

export interface ProductResponseModule extends ResponseModule {
  data: Product[]
}

