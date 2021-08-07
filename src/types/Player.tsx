export interface Player {
  recId: string;
  name: string;
  club: string;
  gudge: boolean;
  faction: string;
  isSingleMaster: boolean;
  master: string;
  isFirstTournament: boolean;
  hasWarning: boolean;
  previousOpponents: Array<string>;
}
