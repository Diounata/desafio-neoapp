import { useRouter } from 'next/router';
import { useEffect } from 'react';

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  });

  return <p>Redirecting...</p>;
}

export default NotFound;
