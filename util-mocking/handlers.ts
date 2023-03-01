import { rest, RequestHandler } from 'msw';
import { items } from './mocks';

export const handlers: RequestHandler[] = [
  rest.get('/api/items', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(items));
  }),
  rest.get('/api/items/:id', (req, res, ctx) => {
    const { id } = req.params;
    const item = items.find((item) => item.id === id);
    if (!item) {
      return res(ctx.status(404));
    }
    return res(ctx.status(200), ctx.json(item));
  }),
];
