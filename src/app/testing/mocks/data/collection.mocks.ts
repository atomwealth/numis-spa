import { Collection } from '../../../shared/models/collection-model';

export const MOCK_COLLECTION: Collection = {
  id: 1,
  name: 'Mock Collection',
  items: [
    {
      id: 1,
      attributes: {
        reference: 'M0001',
        local_reference: 'R001',
        arrival_date: '',
        seller: 'BIDDR - NUMISMAD',
        issue_year: 100,
        emperor: 'Vespasian',
        area: 'Egypt',
        subarea: 'Alexandria',
        denomination: 'Tetradrachm',
        description: 'Vespasian Tetradrachm from Alexandria',
        weight: 3.12,
        size: 22,
        buy_price: 12.5,
      },
    },
  ],
};
