import Header from './Header';
import Button from './Button';

export default function Container({ children }) {
  return (
    <div className="container bg-neutral-50 w-11/12 h-screen mx-auto my-12 sm:px-6 lg:px-8">
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}
