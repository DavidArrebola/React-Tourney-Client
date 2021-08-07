export interface Tournament {
  recId: string;
  name: string;
  rounds: number;
  roundsCompleted: number;
  roundDuration: number;
  scoringType: string;
  isGGTournament: boolean;
  ggSeason: number;
  isMultiMaster: boolean;
  allowGrudges: boolean;
  isTournamentComplete: boolean;
}
