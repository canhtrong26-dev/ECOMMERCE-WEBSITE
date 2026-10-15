import Link from 'next/link'

type BreadcrumbItem = {
  label: string
  href?: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-2 text-sm py-6">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <div key={item.label} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link href={item.href} className="text-gray-500 hover:text-black">
                {item.label}
              </Link>
            ) : (
              <span className="text-black font-medium">{item.label}</span>
            )}
            {!isLast && <span className="text-gray-400">&gt;</span>}
          </div>
        )
      })}
    </nav>
  )
}
