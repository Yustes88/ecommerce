type HeadingProps = {
    children: string,
    className?: string,

}

export default function Heading({children, className}: HeadingProps) {
    return(
        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
        <h2
          id="category-heading"
          className={`text-2xl font-bold tracking-tight ${className}`}
        >
          {children}
        </h2>
      </div>
    )
}