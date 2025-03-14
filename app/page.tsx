import Logo from '@/app/ui/logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex p-4 bg-sky-500 rounded-lg">
                <Logo />
            </div>
            <div className="mt-4 flex grow flex-col gap-4 rounded-lg bg-gray-50 px-6 py-10 md:px-20">
                <p className="text-3xl text-gray-800 leading-normal">
                    <strong>Welcome to Bitlearn Scalping Backtest.</strong>
                </p>
                <Link
                    href="/login"
                    className="flex items-center gap-5 self-start rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-sky-500 md:text-base"
                >
                    <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
                </Link>
            </div>
        </main>
    );
}
