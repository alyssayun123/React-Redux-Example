import { createStore, Store } from 'redux';
import { IRootState } from '../models/root';
import { rootReducer } from '../reducers/root';

export function configureStore(): Store<IRootState> {
  try {
    const store = createStore(rootReducer as any) as Store<IRootState>;
    return store;
  } catch (e) {
    console.log(e);
    return {} as Store<IRootState>;
  }
}
