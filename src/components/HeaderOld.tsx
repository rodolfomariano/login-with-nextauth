import { Link } from '@chakra-ui/layout';
import { useSession, signIn, signOut } from 'next-auth/client'

export function Header() {
  const [session] = useSession();

  const handleSignin = (e) => {
    e.preventDefault()
    signIn('github', {callbackUrl: 'http://localhost:3000/dashboard'})
  }    
  const handleSignout = (e) => {
    e.preventDefault()
    signOut({ callbackUrl: 'http://localhost:3000' })
  }

  return (
    <div className='header'>
           {session && <a href="#" onClick={handleSignout} className="btn-signin">Sign out</a>  } 
           {!session && <a href="#" onClick={handleSignin}  className="btn-signin">Sign in</a>  } 
        
        {session && <Link href="/">Home</Link>}
    </div>
  )
}