import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as TaskListstories from './TaskList.stories';

// composeStoriesは、コンポーネントに関連するすべての情報を処理します
const { WithPinnedTasks } = composeStories(TaskListstories);

it('renders pinned tasks at the start of the list', () => {
  const { container } = render(<WithPinnedTasks />);
  expect(
    container.querySelector(
      '.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
    )
  ).not.toBe(null);
});
