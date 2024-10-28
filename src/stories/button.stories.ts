import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../app/components/button/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Button Components',
  component: ButtonComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Default Button',
  },
};

export const ButtonLink: Story = {
  args: {
    label: 'Button Link',
    variant: 'sp-btn-link',
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'sp-btn-primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'sp-btn-secondary',
  },
};

export const Success: Story = {
  args: {
    label: 'Success Button',
    variant: 'sp-btn-success',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    variant: 'sp-btn-danger',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning Button',
    variant: 'sp-btn-warning',
  },
};

export const Info: Story = {
  args: {
    label: 'Info Button',
    variant: 'sp-btn-info',
  },
};
