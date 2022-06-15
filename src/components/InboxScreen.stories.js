import React from 'react';
import { Provider } from 'react-redux';

import InboxScreen from './InboxScreen';
import store from '../lib/store';

const Template = () => <InboxScreen />;

export default {
  component: InboxScreen,
  title: 'InboxScreen',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>]
};

export const Default = Template.bind({});
export const Error = Template.bind({});
