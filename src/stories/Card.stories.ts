import type { Meta, StoryObj } from '@storybook/vue3';

import imageCard1 from './assets/images/card1.jpg';
import imageCard1Webp from './assets/images/card1.webp';
import imageCard2 from './assets/images/card2.jpg';
import imageCard2Webp from './assets/images/card2.webp';
import logo from './assets/images/logo.svg';
import imageCard3 from './assets/images/card3.jpg';
import imageCard3Webp from './assets/images/card3.webp';
import imageCard4 from './assets/images/card4.jpg';
import imageCard4Webp from './assets/images/card4.webp';

import Card from '../components/Card.vue';

const meta = {
    component: Card,
    argTypes: {
      theme: { control: 'select', options: ['default', 'style1', 'style2','style3', 'style4'] }
    },
    args: {
        cardUrl: 'javascrip:void(0);',
        description: ''
    }
  } satisfies Meta<typeof Card>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const DefaultCard: Story = {
    args: {
        theme: 'default',
        image: {
            srcset: imageCard1Webp,
            type: 'image/webp',
            src: imageCard1,
            alt: 'Default card',
            width: '432',
            height: '220'
        },
        badge: {
            label: 'Ответ 1 минута',
            theme: 'light'
        },
        title: {
            text: 'Врач на связи',
            tagType: 'h2',
            color: 'white',
            size: 'medium'
        },
        button: {
            label: 'Бесплатная консультация',
            shape: 'default',
            backgroundcolor: 'white',
            actionURL: 'javascript:void(0);'
        }
    }
  };

  export const BannerCard: Story = {
    args: {
        theme: 'style4',
        image: {
            srcset: imageCard2Webp,
            type: 'image/webp',
            src: imageCard2,
            alt: 'Banner card',
            width: '896',
            height: '220'
        },
        logo: {
            src: logo,
            alt: 'logo',
            width: '81',
            height: '26'
        },
        badge: {
            label: 'Оффер до 1500 рублей',
            theme: 'dark'
        },
        title: {
            text: 'Первая консультация с&nbsp;психологом «Про&nbsp;Себя» со&nbsp;скидкой в 50%',
            tagType: 'h2',
            color: 'black',
            size: 'medium'
        }
    }
  };

  export const DoctorCard: Story = {
    args: {
        theme: 'style1',
        image: {
            srcset: imageCard3Webp,
            type: 'image/webp',
            src: imageCard3,
            alt: 'Doctor card',
            width: '316',
            height: '316'
        },
        title: {
            text: 'Врачи',
            tagType: 'h2',
            color: 'black',
            size: 'large'
        },
        description: '25+ специализаций врачей высшей категории',
        button: {
            label: '',
            shape: 'square',
            backgroundcolor: 'secondary'
        }
    }
  };

  export const CheckupCard: Story = {
    args: {
        theme: 'style2',
        image: {
            srcset: imageCard4Webp,
            type: 'image/webp',
            src: imageCard4,
            alt: 'Checkup card',
            width: '316',
            height: '316'
        },
        title: {
            text: 'Cпортивный чекап ',
            tagType: 'h2',
            color: 'black',
            size: 'medium'
        },
        description: 'Пакет анализов и консультация с экспертом-нутрициологом',
        button: {
            label: 'Пройти',
            shape: 'default',
            backgroundcolor: 'blueberry'
        }
    }
  };

  export const ConsultationCard: Story = {
    args: {
        theme: 'style3',
        title: {
            text: 'Не знаете, <br/> какую диагностику пройти?',
            tagType: 'h2',
            color: 'black',
            size: 'medium'
        },
        description: 'Проконсультируйтесь с&nbsp;врачом в чате',
        button: {
            label: 'Это бесплатно',
            shape: 'default',
            backgroundcolor: 'peach'
        }
    }
  };