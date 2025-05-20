export interface FiltrosGrafico {
  tipo: 'Focos' | 'Área de Queimadas' | 'Riscos de Fogo';
  local: 'Estados' | 'Biomas';
  inicio: string;
  fim: string;
}

export interface FiltrosMapa {
  tipo: 'foco_calor' | 'area_queimada' | 'risco';
  estado: string;
  bioma: string;
  inicio: string;
  fim: string;
}
