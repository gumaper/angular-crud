import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category.model';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: 'Aluguel', description: 'Pagamento aluguel'},
      { id: 2, name: 'Saúde', description: 'Plano de saúde'},
      { id: 3, name: 'Lazer', description: 'Cinema, jogos, livros, etc'},
      { id: 4, name: 'Salário', description: 'Recebimento de salário'},
      { id: 5, name: 'Internet', description: 'Pagamento da internet'}
    ];

    return { categories }
  }
}
