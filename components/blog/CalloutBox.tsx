import { Target, Lightbulb, Info } from "lucide-react"

interface CalloutBoxProps {
  title: string
  description: string
  icon?: "target" | "lightbulb" | "info" // Allow different icons
  variant?: "saffron" | "blue" // Different color schemes for the box
}

const iconMap = {
  target: Target,
  lightbulb: Lightbulb,
  info: Info,
}

export default function CalloutBox({ title, description, icon = "info", variant = "saffron" }: CalloutBoxProps) {
  const IconComponent = iconMap[icon]

  const boxClasses = {
    saffron: "bg-dataops-saffron-light/20 border-dataops-saffron text-dataops-black",
    blue: "bg-dataops-light-blue/20 border-dataops-accent-blue text-dataops-black",
  }

  const iconClasses = {
    saffron: "text-dataops-saffron",
    blue: "text-dataops-accent-blue",
  }

  return (
    <div className={`flex items-start gap-4 p-4 border-l-4 rounded-md shadow-sm my-8 ${boxClasses[variant]}`}>
      {IconComponent && <IconComponent className={`w-6 h-6 flex-shrink-0 ${iconClasses[variant]}`} />}
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  )
}
