import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClick: { action: 'it will do something' } },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'md',
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: 'green',
  label: 'Press Me',
  size: 'md',
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: 'red',
  label: 'Press Me',
  size: 'lg',
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  backgroundColor: 'red',
  label: 'Press this very looooooong button',
  size: 'md',
};
