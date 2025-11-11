import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await getServerSession()

  if (!session || !session.user) {
    redirect('/sign-in')
  }

  return <div>hello{session.user?.name}</div>
}
