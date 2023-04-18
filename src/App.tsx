import './styles/global.css'
import { BoxCard } from './components/BoxCard'

const plans = [
  {
    id: '7ed96000-1d6b-4db9-94a3-9339b7cadb97',
    title: 'Para Você Começar',
    name: 'Essentials',
    amount: 19.97,
    features: [
      {
        id: 1,
        title: 'Até 3 usuários',
        describe:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio enim eaque cupiditate saepe exercitationem. Eveniet voluptas expedita distinctio obcaecati, itaque eligendi minus, sunt enim, ipsum iusto excepturi corporis quod.',
      },
      {
        id: 2,
        title: 'Autoatendimento',
        describe:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio enim eaque cupiditate saepe exercitationem. Eveniet voluptas expedita distinctio obcaecati, itaque eligendi minus, sunt enim, ipsum iusto excepturi corporis quod.',
      },
    ],
  },
  {
    id: 'b49213c9-6ebc-4f0a-b39a-3bf06e64d875',
    title: 'Para Você Decolar',
    name: 'Ultimate',
    amount: 29.97,
    features: [
      {
        id: 1,
        title: 'Usuários ilimitados',
        describe:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio enim eaque cupiditate saepe exercitationem. Eveniet voluptas expedita distinctio obcaecati, itaque eligendi minus, sunt enim, ipsum iusto excepturi corporis quod.',
      },
      {
        id: 2,
        title: 'Suporte 24/7',
        describe:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio enim eaque cupiditate saepe exercitationem. Eveniet voluptas expedita distinctio obcaecati, itaque eligendi minus, sunt enim, ipsum iusto excepturi corporis quod.',
      },
      {
        id: 3,
        title: 'CSM Dedicado',
        describe:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio enim eaque cupiditate saepe exercitationem. Eveniet voluptas expedita distinctio obcaecati, itaque eligendi minus, sunt enim, ipsum iusto excepturi corporis quod.',
      },
      {
        id: 4,
        title: 'Treinamentos',
        describe:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat optio enim eaque cupiditate saepe exercitationem. Eveniet voluptas expedita distinctio obcaecati, itaque eligendi minus, sunt enim, ipsum iusto excepturi corporis quod.',
      },
    ],
    isUseful: true,
  },
  {
    id: 'cf7ffba8-8248-4592-a12c-cc6d3d819b1e',
    title: 'Para Sua Empresa',
    name: 'Enterprise',
    amount: 0,
    features: [
      {
        id: 1,
        title:
          'Plano customizado especialmente para a necessidade de seu negocio',
        describe: '',
      },
    ],
  },
]

export function App() {
  return (
    <div className="grid place-content-center bg-gray-50 w-screen h-full lg:h-screen">
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-4 xl:gap-8 max-w-screen-2xl py-20 lg:py-0 px-5 lg:px-0">
        {plans.map((plan) => (
          <BoxCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  )
}
