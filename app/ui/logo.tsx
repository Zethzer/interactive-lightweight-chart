import { roboto } from '@/app/ui/fonts';

export default function Logo() {
  return (
    <div
      className={`${roboto.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[44px]">Bitlearn Scalping Backtest</p>
    </div>
  );
}
