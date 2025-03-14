'use client';

import { calculateMovingAverageSeriesData } from '@/app/lib/chart/indicators';
import { createChart, CandlestickSeries, Time, LineSeries } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

export default function Chart() {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartOptions = {
        width: 800,
        height: 400,
        layout: {
            textColor: 'white',
            background: {
                color: 'black'
            },
        }
    };

    useEffect(() => {
        if (!chartContainerRef.current) {
            return;
        }

        const chart = createChart(chartContainerRef.current, chartOptions);

        const candlestickStyleOptions = {
            upColor: '#26a69a',
            downColor: '#ef5350',
            borderVisible: false,
            wickUpColor: '#26a69a',
            wickDownColor: '#ef5350'
        };
        const candlestickSeries = chart.addSeries(CandlestickSeries, candlestickStyleOptions);
        const maSeries = chart.addSeries(LineSeries, { color: '#2962FF', lineWidth: 1 });
    
        const data = [
            { open: 10, high: 10.63, low: 9.49, close: 9.55, time: (1642427876 as Time) },
            { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: (1642514276 as Time) },
            { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: (1642600676 as Time) },
            { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: (1642687076 as Time) },
            { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: (1642773476 as Time) },
            { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: (1642859876 as Time) },
            { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: (1642946276 as Time) },
            { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: (1643032676 as Time) },
            { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: (1643119076 as Time) },
            { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: (1643205476 as Time) }
        ];
        candlestickSeries.setData(data);
        
        const maData = calculateMovingAverageSeriesData(data, 5);
        maSeries.setData(maData);
    
        chart.timeScale().fitContent();

        return () => {
            chart.remove();
        };
    }, []);

    return (
        <div ref={chartContainerRef} />
    );
}