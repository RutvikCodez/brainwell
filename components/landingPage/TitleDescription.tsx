import { cn } from '@/lib/utils'
import React from 'react'

const TitleDescription =  ({
  description,
  title,
  titleTextColor,
  descriptionTextColor,
  className,
}: tittleDescPropsType) => {
  return (
    <div className={cn("text-center flex flex-col gap-2", className)}>
      <h2
        className="text-3xl md:text-4xl font-bold text-zinc-800 tracking-tight"
        style={{ color: titleTextColor }}
      >
        {title}
      </h2>
      <p
        className="text-gray-700 max-w-xl mx-auto text-base md:text-lg"
        style={{ color: descriptionTextColor }}
      >
        {description}
      </p>
    </div>
  )
}

export default TitleDescription