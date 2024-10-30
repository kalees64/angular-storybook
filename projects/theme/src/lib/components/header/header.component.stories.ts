import { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
  title: 'Header',
  component: HeaderComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<HeaderComponent>;

export const Header: Story = {
  args: {
    brand: {
      name: 'MyBrand',
      icon: 'tabler:brand-kickstarter',
    },

    navLinks: [
      { label: 'Home', url: '/home', position: 'right', visible: true },
      { label: 'About', url: '/about', position: 'left', visible: true },
      {
        label: 'Contact',
        url: '/contact',
        position: 'left',
        visible: true,
      },
    ],

    profile: {
      name: 'John Doe',
      icon: 'gg:profile',
      position: 'right',
      visible: true,
      loginURL: '/login',
      signupURL: '/signup',
      logoutFn: () => {
        alert('Logout');
      },
    },
  },
};
