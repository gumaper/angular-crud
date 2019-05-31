import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: 'Moradia', description: 'Contas relacionado a casa'},
      { id: 2, name: 'Saúde', description: 'Plano de saúde, remédios, etc'},
      { id: 3, name: 'Lazer', description: 'Cinema, jogos, livros, etc'},
      { id: 4, name: 'Salário', description: 'Recebimento de salário'}
    ];

    const entries: Entry[] = [
      { id: 1, name: 'Aluguel', categoryId: categories[0], category: categories[0],
        paid: true, date: '31/05/2019', amount: '1200,00', type: 'expense', description: 'uma descrição qualquer' } as Entry,
      { id: 2, name: 'Mercado', categoryId: categories[0], category: categories[0],
        paid: true, date: '31/05/2019', amount: '450,00', type: 'expense' } as Entry,
      { id: 3, name: 'Salário', categoryId: categories[3], category: categories[3],
        paid: true, date: '31/05/2019', amount: '3800,53', type: 'revenue' } as Entry,
      { id: 4, name: 'Açougue', categoryId: categories[0], category: categories[0],
        paid: true, date: '31/05/2019', amount: '160,00', type: 'expense' } as Entry,
      { id: 5, name: 'Energia', categoryId: categories[0], category: categories[0],
        paid: false, date: '31/05/2019', amount: '210,00', type: 'expense' } as Entry,
      { id: 6, name: 'Jogos', categoryId: categories[2], category: categories[2],
        paid: true, date: '31/05/2019', amount: '115,00', type: 'expense' } as Entry,
      { id: 7, name: 'Suplemento', categoryId: categories[1], category: categories[1],
        paid: false, date: '31/05/2019', amount: '329,00', type: 'expense' } as Entry,
    ];

    return { categories, entries };
  }
}
