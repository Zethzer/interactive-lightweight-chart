import Logo from '@/app/ui/logo';
import Chart from '@/app/ui/chart/chart';

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex p-4 bg-sky-500 rounded-lg">
                <Logo />
            </div>
            <div className="mt-4 flex grow flex-col gap-4 rounded-lg bg-gray-50 px-6 py-10 md:px-20">
                <p className="text-xl text-gray-800">
                    <strong>BTCUSDT.P Pair</strong>
                </p>
                <div id="chart-container">
                    <Chart />
                </div>
            </div>
            <div>
                <p className="text-gray-800 text-sm text-center">
                    TradingView Lightweight Charts&trade;
                    Copyright &copy; 2025 <a href='https://www.tradingview.com/'><u>TradingView, Inc.</u></a>
                </p>
            </div>
        </main>
    );
}
