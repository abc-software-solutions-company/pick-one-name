export interface IState {
  isMenuOpen: boolean;
  isDrawerOpen: string;
}

const initialState: IState = {
  isMenuOpen: false,
  isDrawerOpen: 'left'
};

export default initialState;
