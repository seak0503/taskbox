import React from 'react';
import { Provider } from 'react-redux';
import { rest } from 'msw';
import {
  within,
  waitForElementToBeRemoved,
  waitFor,
  fireEvent
} from '@storybook/testing-library';

import InboxScreen from './InboxScreen';
import store from '../lib/store';
import { MockedState } from './TaskList.stories';

export default {
  component: InboxScreen,
  title: 'InboxScreen',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>]
};

const Template = () => <InboxScreen />;

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [
      rest.get(
        'https://jsonplaceholder.typicode.com/todos?userId=1',
        (req, res, ctx) => {
          return res(ctx.json(MockedState.tasks));
        }
      )
    ]
  }
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // コンポーネントがロード状態から遷移するのを待ちます
  await waitForElementToBeRemoved(await canvas.findByTestId('loading'));
  // ストアに基づいてコンポーネントが更新されるのを待ちます
  await waitFor(async () => {
    //最初のタスクの固定をシミュレートします
    await fireEvent.click(canvas.getByLabelText('pinTask-1'));
    //番目のタスクの固定をシミュレートします
    await fireEvent.click(canvas.getByLabelText('pinTask-3'));
  });
};

export const Error = Template.bind({});
Error.parameters = {
  msw: {
    handlers: [
      rest.get(
        'https://jsonplaceholder.typicode.com/todos?userId=1',
        (req, res, ctx) => {
          return res(ctx.status(403));
        }
      )
    ]
  }
};
