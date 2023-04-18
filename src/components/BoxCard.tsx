import { Check, Info } from '@phosphor-icons/react'
import clxs from 'clsx'

interface FeaturesPlan {
  id: number
  title: string
  describe: string
}

interface Plan {
  id: string
  title: string
  name: string
  amount: number
  features: FeaturesPlan[]
  isUseful?: boolean
}

interface BoxCardProps {
  plan: Plan
}

export function BoxCard({ plan }: BoxCardProps) {
  return (
    <div
      className={clxs(
        'relative flex flex-col gap-8 px-8 pt-12 pb-8 border rounded-lg',
        {
          'bg-gray-900 border-gray-900': plan.isUseful,
          'bg-white border-gray-200': !plan.isUseful,
        },
      )}
    >
      {plan.isUseful && (
        <span className="absolute -mt-[4rem] self-center bg-orange text-gray-900 py-2 px-4 rounded-lg text-xs font-bold tracking-wide uppercase">
          Mais Vantajoso
        </span>
      )}
      <div className="grid gap-2">
        <h4
          className={clxs('text-sm font-semibold tracking-wide uppercase', {
            'text-purple-100': plan.isUseful,
            'text-purple-200': !plan.isUseful,
          })}
        >
          {plan.title}
        </h4>
        <div
          className={clxs('flex items-center justify-between', {
            'text-gray-50': plan.isUseful,
            'text-gray-800': !plan.isUseful,
          })}
        >
          <h1 className="text-xl font-bold">{plan.name}</h1>
          {plan.amount > 0 && (
            <p className="text-md">
              R$ <span className="text-lg font-bold">{plan.amount}</span>
              <span className="font-bold">/mês</span>
            </p>
          )}
        </div>
      </div>
      <button
        className={clxs(
          'w-80 py-4 border rounded text-base font-bold transition-colors',
          {
            'bg-purple-100 text-white border-purple-100 hover:bg-purple-200 hover:border-purple-200':
              plan.isUseful,
            'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white':
              !plan.isUseful,
          },
        )}
      >
        Assinar agora
      </button>
      <div
        className={clxs('w-full max-w-xs border-t', {
          'border-gray-700': plan.isUseful,
          'border-gray-200': !plan.isUseful,
        })}
      ></div>
      <div className="grid gap-4">
        {plan.features.map((feature) => (
          <div key={feature.id} className="flex justify-between items-center ">
            <div className="w-full max-w-xs flex gap-1 items-center">
              <Check className="text-green-200" size={20} />
              <p
                className={clxs('flex-1 tracking-wide', {
                  'text-gray-300': plan.isUseful,
                  'text-gray-600': !plan.isUseful,
                })}
              >
                {feature.title}
              </p>
            </div>
            {feature.describe && (
              <Info
                size={20}
                className={clxs({ 'text-gray-600': plan.isUseful })}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
