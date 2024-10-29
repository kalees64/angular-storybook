import { Meta, StoryObj } from '@storybook/angular';
import { CardWidgetSingleComponent } from './card-widget-single.component';

const meta: Meta<CardWidgetSingleComponent> = {
  title: 'Card Widget Single',
  component: CardWidgetSingleComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<CardWidgetSingleComponent>;

export const Card: Story = {
  args: {
    label: 'Priority',
    value: 64,
  },
};

export const SmallCard: Story = {
  args: {
    label: 'Priority',
    value: 64,
    size: 'small',
  },
};

export const PrimaryCard: Story = {
  args: {
    label: 'Priority',
    value: 64,
    variant: 'primary',
  },
};

export const PrimarySmallCard: Story = {
  args: {
    label: 'Priority',
    value: 64,
    variant: 'primary',
    size: 'small',
  },
};
