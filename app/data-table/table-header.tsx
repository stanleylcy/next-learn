import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
  EyeNoneIcon,
} from "@radix-ui/react-icons"
import {
  Button,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/themes"
import { Column } from "@tanstack/react-table"

import { cn } from "@/lib/utils"

interface TableHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export function TableHeader<TData, TValue>({
  column,
  title,
  className,
}: TableHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenuRoot>
        <DropdownMenuTrigger>
          <Button
            variant="ghost"
            size="1"
            className="data-[state=open]:bg-accent -ml-3 h-8"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ArrowDownIcon className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "asc" ? (
              <ArrowUpIcon className="ml-2 h-4 w-4" />
            ) : (
              <CaretSortIcon className="ml-2 h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUpIcon className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDownIcon className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeNoneIcon className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    </div>
  )
}
