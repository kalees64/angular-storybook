import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../app/components/button/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    onBtnClick: { action: 'clicked' },
  },
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
    variant: 'link',
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    label: 'Success Button',
    variant: 'success',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    variant: 'danger',
    onBtnClick: () => {
      alert('Danger Button');
      console.log('Button clicked');
    },
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning Button',
    variant: 'warning',
  },
};

export const Info: Story = {
  args: {
    label: 'Info Button',
    variant: 'info',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Button',
    variant: 'small',
  },
};

export const Big: Story = {
  args: {
    label: 'Big Button',
    variant: 'big',
  },
};

export const PrimarySmall: Story = {
  args: {
    label: 'Primary Small Button',
    variant: 'primary',
    size: 'small',
  },
};

export const PrimaryBig: Story = {
  args: {
    label: 'Primary Big Button',
    variant: 'primary',
    size: 'big',
  },
};
