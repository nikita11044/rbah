import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AppCodeBlock } from 'shared/ui/AppCodeBlock/AppCodeBlock';

export default {
    title: 'shared/AppCodeBlock',
    component: AppCodeBlock,
} as ComponentMeta<typeof AppCodeBlock>;

const Template: ComponentStory<typeof AppCodeBlock> = (args) => <AppCodeBlock {...args} />;

export const Default = Template.bind({});

Default.args = {
    // eslint-disable-next-line max-len
    codeText: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
};
