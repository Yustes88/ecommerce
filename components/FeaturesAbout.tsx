import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Timeless Designs',
    description:
      'Our jewelry collection showcases intricate designs that transcend trends, allowing you to cherish each piece for years to come. Every detail is carefully considered, from the delicate filigree patterns to the sparkling gemstones, ensuring that your jewelry reflects your timeless elegance.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Premium Materials',
    description:
      'We believe in using only the finest materials to create jewelry that is both beautiful and durable. Our pieces are crafted from ethically sourced precious metals like gold, silver, and platinum, ensuring that they will remain cherished heirlooms for generations to come.',
    icon: LockClosedIcon,
  },
  {
    name: 'Affordable Luxury',
    description:
      'Experience the exquisite quality of fine jewelry without the extraordinary price tag. Our pieces are crafted with premium materials and meticulous attention to detail, making them an accessible gateway to the world of luxury.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Made with Love',
    description:
      'Each piece we create is not just an accessory; it is an expression of passion and dedication. We pour our hearts and souls into crafting timeless pieces that resonate with your unique story.',
    icon: FingerPrintIcon,
  },
]

export default function FeaturesAbout() {
  return (
    <div className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you were looking for
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are focused on delivering high quality jewelry with all our attention and care. 
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#534555]">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
