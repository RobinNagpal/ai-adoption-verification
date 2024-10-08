import {ScaleIcon, WrenchIcon, FaceFrownIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Loss of Trust',
    description:
      'Erodes customer confidence and damages brand reputation, leading to decreased customer loyalty.',
    icon: FaceFrownIcon,
  },
  {
    name: 'Legal Repercussions',
    description:
      'Exposes the organization to lawsuits, fines, and regulatory penalties.',
    icon: ScaleIcon,
  },
  {
    name: 'Operational Disruptions',
    description:
      'Interrupts business operations and impacts productivity.',
    icon: WrenchIcon,
  },
]

export default function ConsequencesOfBreaches() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32" >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Consequences of Security Breaches</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Overall, security breaches can have a devastating impact on an organization's bottom line, reputation, and customer relationships.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
