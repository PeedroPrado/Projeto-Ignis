export interface BaseDado {
  latitude: number;
  longitude: number;
  estado: string;
  bioma: string;
  risco_fogo: number;
  data: string;
  frp?: number;
  dia_sem_chuva?: string;
  precipitacao?: number;
  tipo: 'risco' | 'foco' | 'area_queimada';
}
