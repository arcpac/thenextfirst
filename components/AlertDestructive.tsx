import { AlertCircle } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { cn } from "@/lib/utils"

export function AlertDestructive({message}: {message: string}) {
  return (
    <Alert className="dark:text-white dark:bg-destructive my-3" variant="destructive">
      <AlertCircle className="h-4 w-4 dark:text-white" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
       {message}
      </AlertDescription>
    </Alert>
  )
}
