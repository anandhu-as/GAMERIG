export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  release_date: string;
  platform: string;
  genre: string;
  developer: string;
  publisher: string;
  freetogame_profile_url: string;
  rating?: number;
  quantity?: number;
}

export interface AboutGameState {
  selectedGame: Game | null;
}

export type GameStateType = {
  games: Game[];
};

export type GameCardProps = {
  game: Game;
};

export type cartItem = {
  id: number;
  thumbnail: string;
  title: string;
  short_description: string;
  genre: string;
  rating: number;
  quantity: number;
};

export type CartProp = {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
};
export interface CartState {
  cart: cartItem[];
}
