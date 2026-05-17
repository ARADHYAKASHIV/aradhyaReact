import * as React from "react"
import { cn } from "../../lib/utils"

export function TooltipProvider({ children }) {
  return <>{children}</>
}

export function Tooltip({ children }) {
  return <div className="tw-relative tw-group tw-inline-block">{children}</div>
}

export function TooltipTrigger({ children, asChild }) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(children.props.className, "tw-cursor-pointer")
    })
  }
  return <div className="tw-cursor-pointer">{children}</div>
}

export function TooltipContent({ children, className }) {
  return (
    <div
      className={cn(
        "tw-absolute tw-z-50 tw-invisible tw-opacity-0 group-hover:tw-visible group-hover:tw-opacity-100 tw-transition-all tw-duration-300 tw-bg-popover tw-text-popover-foreground tw-px-3 tw-py-1.5 tw-rounded-md tw-text-sm tw-shadow-md tw-whitespace-nowrap tw-bottom-[-35px] tw-left-1/2 -tw-translate-x-1/2",
        className
      )}
    >
      {children}
    </div>
  )
}
