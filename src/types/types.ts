export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  release_date: string;
  platform: string;
  genre: string;
  rating: number;
  quantity: number;
}

export type GameStateType = {
  games: Game[];
};
export type GameCardProps = {
  game: {
    id: string | number;
    thumbnail: string;
    title: string;
    short_description: string;
    genre: string;
    rating: number;
    quantity: number;
  };
};
export type cartItem = {
  id: string | number;
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
