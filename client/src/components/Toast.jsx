import { Toaster } from 'react-hot-toast';

const Toast = () => {
  return (
    <Toaster 
    position="top-center"
    toastOptions={{
      duration: 2000,
      style: {
        background: '#363636',
        color: '#fff',
      }
    }}
    />
  )
}

export default Toast