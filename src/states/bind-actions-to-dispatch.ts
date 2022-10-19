export default function bindActionsToDispatch(actions: any, dispatch: any) {
  return Object.keys(actions).reduce(
    (hash, actionCreatorName) => ({
      ...hash,
      [actionCreatorName]: actions[actionCreatorName].bind(undefined, dispatch)
    }),
    {}
  );
}
