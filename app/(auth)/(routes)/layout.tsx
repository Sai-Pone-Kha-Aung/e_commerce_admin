export default function AuthLayout({
    children
} : {
    children: React.ReactNode
}) {
  return (
    <div className="flex items-cente justify-center h-full">
      {children}
    </div>
  )
}