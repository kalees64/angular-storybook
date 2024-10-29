import { Meta, StoryObj } from '@storybook/angular';
import { SpinnerComponent } from './spinner.component';

const meta: Meta<SpinnerComponent> = {
  title: 'Spinner',
  component: SpinnerComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<SpinnerComponent>;

export const SpinnerSmall: Story = {
  args: {
    size: 'small',
    color: 'primary',
  },
};
export const SpinnerMedium: Story = {
  args: {
    size: 'medium',
    color: 'primary',
  },
};
