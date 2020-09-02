import { useRouter } from 'next/router'
import MainLayout from '../../components/MainLayout'

export default function Post() {
  const router = useRouter()
  console.log(router)
  return (
    <MainLayout title={'Post'} >
      <h1>Post {router.query.id}</h1>
    </MainLayout>
  )
}