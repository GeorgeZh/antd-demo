
export default {
  namespace: 'products',
  state:
    {
      data: [
        { name: 'abc', id: 1, key: 1 },
        { name: 'cde', id: 2, key: 2 }
      ]
    },
  reducers: {
    'delete': (state, { payload: id }) => {
      return { data: state.data.filter(item => item.id != id) }
    }
  },
  effects: {},
  subscriptions: {},
};
