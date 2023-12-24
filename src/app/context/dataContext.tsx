import { createContext } from 'react';
import data from '../../../db.json';

export const DataContext = createContext<typeof data | undefined>(undefined);