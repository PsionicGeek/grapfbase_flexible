"use client";



import { getProviders, signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import Button from './Button';


type Provider = {
  id: string;
  name: string;
  type: string;
  signInUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;


}
type Providers = Record<string, Provider>;
const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null)

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    }
    fetchProviders();

  }, [])


  if (providers) {
    return (<div>
      {Object.values(providers).map((provider: Provider, i) => {
        return (<Button key={i} title='Sign In' handleClick={() => signIn(provider?.id)} />)
      })}
    </div>)
  }
  // return (
  //   <div>AuthProvider</div>
  // )
}

export default AuthProviders