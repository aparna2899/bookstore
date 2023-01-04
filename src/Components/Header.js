import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import {
  BookOpenIcon,
  UserIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <div className="flex items-center justify-center px-2 py-8 border-b border-slate-200 lg:ml-6 lg:justify-between">
      <div className="flex items-center">
        <BookOpenIcon className="h-10 w-10 text-red-500" />
        <strong className="text-3xl font-medium text-black-500">
          BookStore
        </strong>
      </div>

      <div className="w-1/2">
        <div className="relative">
          <input
            id="search"
            name="search"
            className="block w-full rounded-3xl bg-gray-100 border-none py-3 px-6 shadow"
            placeholder="Search Book..."
            type="search"
          />
          <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-black-400"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <ShoppingCartIcon className="h-7 w-7  mx-2" />
        <UserIcon className="h-7 w-7  mx-2" />
      </div>
    </div>
  );
}
