import { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Card Widgets',
  component: CardComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<CardComponent>;

export const MediumWidgets: Story = {
  args: {
    data: {
      size: 'medium',
      data: [
        { label: 'High Priority', value: 10, color: 'primary' },
        { label: 'High Priority', value: 10, color: 'danger' },
        { label: 'High Priority', value: 10, color: 'secondary' },
        { label: 'High Priority', value: 10, color: 'info' },
        { label: 'High Priority', value: 10, color: 'warning' },
        { label: 'High Priority', value: 10, color: 'success' },
      ],
    },
    classes:
      'grid grid-cols-6 gap-3  max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4',
  },
};

export const SmallWidgets: Story = {
  args: {
    data: {
      size: 'small',
      data: [
        { label: 'High Priority', value: 10, color: 'primary' },
        { label: 'High Priority', value: 10, color: 'danger' },
        { label: 'High Priority', value: 10, color: 'secondary' },
        { label: 'High Priority', value: 10, color: 'info' },
        { label: 'High Priority', value: 10, color: 'warning' },
        { label: 'High Priority', value: 10, color: 'success' },
      ],
    },
    classes:
      'grid grid-cols-6 gap-3  max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4',
  },
};
