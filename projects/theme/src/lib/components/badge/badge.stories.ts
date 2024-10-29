import { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<BadgeComponent>;

export const BadgePrimary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
  },
};

export const BadgeDanger: Story = {
  args: {
    label: 'Danger',
    variant: 'danger',
  },
};

export const BadgeSuccess: Story = {
  args: {
    label: 'Success',
    variant: 'success',
  },
};

export const BadgeWarning: Story = {
  args: {
    label: 'Warning',
    variant: 'warning',
  },
};

export const BadgePrimaryMedium: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
    size: 'medium',
  },
};

export const BadgePrimaryBig: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
    size: 'big',
  },
};
