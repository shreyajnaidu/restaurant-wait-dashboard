// types/index.ts

export type TableStatus = 'free' | 'occupied';

export interface Table {
  id: string;
  tableNumber: number;
  status: TableStatus;
  capacity?: number;
}