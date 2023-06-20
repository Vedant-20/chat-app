import Chats from '@/components/Chats';
import LeftNav from '@/components/LeftNav';
import Loader from '@/components/Loader';
import { useAuth } from '@/context/authContext'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'



const Home = () => {
  const router=useRouter();

  const {signOut, currentUser, isLoading}=useAuth();


  useEffect(()=>{
    if(!isLoading && !currentUser){
        router.push('/login');
    }

  },[currentUser, isLoading])
  return !currentUser ? (<Loader/>) : (
    // <div>
    //   <button className='p-5 bg-black' onClick={signOut}>Sign Out</button>
    // </div>
    <div className='bg-c1 flex h-[100vh]'>
        <div className='flex w-full shrink-0'>
            <LeftNav/>

            <div className='flex bg-c2 grow '>
                <div className='w-[400px] p-5 overflow-auto scrollbar shrink-0 border-r border-white/[0.05] '>
                  <div className='flex flex-col h-full '> 
                    <Chats/>
                  </div>
                </div>
                <div>Chat</div>

            </div>

        </div>

    </div>
  )
}

export default Home